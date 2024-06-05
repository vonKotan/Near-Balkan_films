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

export const Deck = ({ competition, search }) => {
  const { t, i18n } = useTranslation();
  const [competitionFilms, setCompetitionFilms] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([]);
  //const [debug,setdebug]=useState("debug");

  console.log(search);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const fetchFilmsForCompetition = async () => {
            const q = query(
              collection(database, 'films'),
              where(documentId(), 'in', competition.films)
            );
            const querySnapshot = await getDocs(q);
            const films = [];
            querySnapshot.forEach((doc) => {
              films.push({ id: doc.id, ...doc.data() });
            });
            
            const filmsWithUser = await fetchUsersForFilms(films);

        setCompetitionFilms(filmsWithUser);
      }
    fetchFilmsForCompetition();
  },[]);
  
  useEffect(() => {
    if (search) {
      console.log(search)
      const filter = competitionFilms.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );
      setMoviesFilter(filter);
    }
  }, [search, competitionFilms]);

  return (<>
      <SectionTitle title={competition.title} />
      {!search &&
        competitionFilms?.map((movie) => (
          <div className="relative flex justify-center items-center w-full max-w-screen-lg">
            <Card
              movie={movie} targetDate={competition.endDate.toDate()} haveWon={competition.winner==movie.id}
            />
            <div className='-left-12 absolute lg:flex justify-center items-center hidden bg-nbgreylight shadow-sm px-4 py-2 rounded-full w-20 h-20 cursor-pointer ring-8 ring-inset ring-nbredmain'>
              <h3 className="font-black font-h3-subtitle text-4xl text-nbgreydark">1</h3>
            </div>
          </div>
        ))}
      {search &&
        moviesFilter.length > 0 &&
        competitionFilms?.map((movie) => (
          <div className="relative flex justify-center items-center w-full max-w-screen-lg">
            <Card
              movie={movie} targetDate={competition.endDate.toDate()} haveWon={competition.winner==movie.id}
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

export default Deck;
