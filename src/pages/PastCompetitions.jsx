import React, { useEffect, useState, useMemo } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc, getDoc,
  getDocs,
  where,
  documentId
} from 'firebase/firestore'
import { database } from '../firebase/config';

// Components
import { Card, CardComplex } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
// import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const fetchUsersForFilms = async (films) => {
  const filmsWithUser = await Promise.all(
    films.map(async (film) => {
      const userRef = doc(database, 'users', film.user); // Reference to the user document
      const userDoc = await getDoc(userRef); // Fetch the user document

      if (userDoc.exists()) {
        return { ...film, user: { id: userDoc.id, ...userDoc.data() } };
      } else {
        console.log(`User with ID ${film.user} does not exist.`);
        return film;
      }
    })
  );

  return filmsWithUser;
};

const PastCompetitions = ({ search, targetDate }) => {
  const currentDate = useMemo(() => new Date(), []);
  const {documents: competitions} = useFetchData('competitions');
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  const [currentCompetition, setCurrentCompetition] = useState(null);
  const [previousCompetitionsFilms, setPreviousCompetitionsFilms] = useState([]);
  const [debug,setdebug]=useState("debug");

  console.log(search);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [moviesFilter, setMoviesFilter] = useState([]);
  const [randomMovie, setRandomMovie] = useState(0);

  useEffect(() => {
    if (competitions && competitions.length > 0) {
      const findCurrentCompetition = () => {
       const currentCompetition = competitions.find(competition => {
          const startDate = competition.startDate.toDate(); 
          const endDate = competition.endDate.toDate(); 
          return startDate <= currentDate && endDate >= currentDate;
        }
      );
      setCurrentCompetition(currentCompetition);
      };
      findCurrentCompetition();
    }
    //currentCompetition.films
  }, [competitions, currentDate]);

  useEffect(() => {
    const fetchFilmsForPreviousCompetitions = async () => {
      if (currentCompetition && competitions) {
        let allFilms = [];

        for (let i = 0; i < competitions.length; i++) {
          const comp = competitions[i];

          if (comp.startDate.toDate() <= currentCompetition.startDate.toDate()) {
            const q = query(
              collection(database, 'films'),
              where(documentId(), 'in', comp.films)
            );
            setdebug("debug2");
            const querySnapshot = await getDocs(q);
            const films = [];
            querySnapshot.forEach((doc) => {
              films.push({ id: doc.id, ...doc.data() });
            });

            const filmsWithUser = await fetchUsersForFilms(films);
            allFilms = [...allFilms, ...filmsWithUser];
          }
        }

        setPreviousCompetitionsFilms(allFilms);
      }
    };

    fetchFilmsForPreviousCompetitions();
  }, [currentCompetition, competitions]);

  useEffect(() => {
    if (search) {
      console.log(search)
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );

      setMoviesFilter(filter);
    }
  }, [search, movies]);

  useEffect(() => {
    const generateRandomMovie = () => {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setRandomMovie(randomMovie)
    }

    generateRandomMovie();
  });

  return (
    <>
      {/*a cimmel meg foglalkozni kell matyit megkerezni!*/}
      <SectionTitle title={t("past competitions")} />
      <SectionTitle title={debug} />
      {previousCompetitionsFilms?.filter((movie, index) => (
        index === movie[Math.floor(Math.random() * movies.length)] &&
        <CardComplex
          movie={movie[Math.floor(Math.random() * movies.length)]}
          targetDate={targetDate}
        />
      ))}
      {!search &&
        previousCompetitionsFilms?.map((movie) => (
          <div className="relative flex justify-center items-center w-full max-w-screen-lg">
            <Card
              movie={movie} targetDate={targetDate} haveWon={false}
            />
            <div className='-left-12 absolute lg:flex justify-center items-center hidden bg-nbgreylight shadow-sm px-4 py-2 rounded-full w-20 h-20 cursor-pointer ring-8 ring-inset ring-nbredmain'>
              <h3 className="font-black font-h3-subtitle text-4xl text-nbgreydark">1</h3>
            </div>
          </div>
        ))}
      {search &&
        moviesFilter.length > 0 &&
        moviesFilter?.map((movie) => (
          <div className="relative flex justify-center items-center w-full max-w-screen-lg">
            <Card
              movie={movie} targetDate={targetDate} haveWon={true}
            />
            <div className='-left-12 absolute lg:flex justify-center items-center hidden bg-nbgreylight shadow-sm px-4 py-2 rounded-full w-20 h-20 cursor-pointer ring-8 ring-inset ring-nbredmain'>
              <h3 className="font-black font-h3-subtitle text-4xl text-nbgreydark">1</h3>
            </div>
          </div>
        ))}
      {search && moviesFilter.length === 0 && (
        <div className='flex justify-center items-center gap-8 py-8 w-full max-w-screen-lg'>
          <p>{t("home.no_results")}</p>
        </div>
      )}
    </>
  );
};

export default PastCompetitions;


{/* <Transition
          show={isShowing}
          enter="transition duration-[400ms]"
          enterFrom="scale-50 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
      > */}

{/*           <div className="relative flex justify-center items-center w-full max-w-[900px]">
      <div className='-left-12 absolute lg:flex justify-center items-center hidden bg-nbgreylight shadow-sm px-4 py-2 rounded-full w-20 h-20 cursor-pointer ring-8 ring-inset ring-nbgreenmain'>
              <h3 className="font-black font-h3-subtitle text-4xl text-nbgreydark">1</h3>
            </div>
          </div> */}