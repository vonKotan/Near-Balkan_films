import React, { useEffect, useState, useMemo } from 'react';

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc, getDoc,
  where,
  documentId
} from 'firebase/firestore'
import { database } from '../firebase/config';

// Components
import { useTranslation } from 'react-i18next';
import { Card, CardComplex } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { useFilterMovies } from '../hooks/useFilterMovies';
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



const Home = ({user, search}) => {
  const {documents: competitions} = useFetchData('competitions'); //documents nelkul is szar

  const { t, i18n} = useTranslation();
  const [adUrl, setAdUrl] = useState('')

  const [randomMovie, setRandomMovie] = useState(0);

  const currentDate = useMemo(() => new Date(), []);
  const formattedDate = currentDate.toLocaleDateString();
  const [currentCompetition, setCurrentCompetition] = useState(null); // Use null instead of 0 for a more meaningful initial state
  const [currentCompetitionFilms, setCurrentCompetitionFilms] = useState(null);
  const {filteredMovies: moviesFilter} = useFilterMovies(currentCompetitionFilms, search)

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
    if (currentCompetition) {
      const q = query(
        collection(database, 'films'),
        where(documentId(), 'in', currentCompetition.films)
      );

      // Set up a real-time listener for the query
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        const films = [];
        querySnapshot.forEach((doc) => {
          films.push({ id: doc.id, ...doc.data() });
        });

        const filmsWithUser = await fetchUsersForFilms(films);
        // Update state with the fetched films and user data
        setCurrentCompetitionFilms(filmsWithUser);
      });

      return () => unsubscribe();
    }
  }, [currentCompetition]);

  useEffect(() => {
    if (currentCompetitionFilms && currentCompetitionFilms.length > 0) {
      const generateRandomMovie = () => {
        const randomMovie = currentCompetitionFilms[Math.floor(Math.random() * currentCompetitionFilms.length)];
        setRandomMovie(randomMovie);
      };

      const adUrls = [
        'https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/films%2Ffarkaszsigmond%2F1716435235191?alt=media&token=53a1c883-fd59-489e-a9a6-4e265a3dbd17',
        'https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/films%2Fkovacszalan%2F1716386835153?alt=media&token=655b2454-9334-4a04-a5ad-4ac1590b55ec'
      ];
      const url = adUrls[Math.floor(Math.random() * adUrls.length)];
      setAdUrl(url);

      generateRandomMovie();
    }
  }, [currentCompetitionFilms]);

  return (
    <>


      {/* {!user && <div className = 'py-4 max-w-screen-lg rounded-lg overflow-hidden'><video
        src = {adUrl}
        autoPlay
        controls
        >
      </video></div>} */}


      <div>
      {/*parasztos nmegoldás*/}  
      {currentCompetition && (
        <SectionTitle 
          title={i18n.language === 'hu' ? currentCompetition.title : currentCompetition.engTitle} 
        />
      )}
      </div>
        
      {randomMovie && !search &&
        <CardComplex
          movie={randomMovie}
          targetDate={currentCompetition.endDate.toDate()}
        />}

      {!search &&
        currentCompetitionFilms?.map((movie) => (
          <Card
            movie={movie} targetDate={currentCompetition.endDate.toDate()} haveWon={false}
          />
        ))}
      {search &&
        moviesFilter.length > 0 &&
        moviesFilter?.map((movie) => (
          <Card
            movie={movie} targetDate={currentCompetition.endDate.toDate()} haveWon={true}
          />
        ))}
      {search && moviesFilter.length === 0 && (
        <div className='flex justify-center items-center gap-8 py-8 w-full max-w-screen-lg'>
          <p>{t("home.no_results")}</p>
        </div>
      )}
    </>
  );
};

export default Home;