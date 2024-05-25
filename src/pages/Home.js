import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import { Card, CardComplex } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import { EurCalc } from '../components/EurCalc';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { useFilterMovies } from '../hooks/useFilterMovies';
// import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = ({user, search, targetDate }) => {
  const { movies } = useFetchMovies({ fieldToOrderBy: 'collected', isDescending: true });
  const { t, i18n } = useTranslation();
  const [adUrl, setAdUrl] = useState('')

  const [randomMovie, setRandomMovie] = useState(0);
  const {filteredMovies: moviesFilter} = useFilterMovies(movies, search)

  useEffect(() => {
    const generateRandomMovie = () => {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setRandomMovie(randomMovie)
    }
    const adUrls = [
      'https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/films%2Ffarkaszsigmond%2F1716435235191?alt=media&token=53a1c883-fd59-489e-a9a6-4e265a3dbd17',
      'https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/films%2Fkovacszalan%2F1716386835153?alt=media&token=655b2454-9334-4a04-a5ad-4ac1590b55ec'
    ]
    const url = adUrls[Math.floor(Math.random() * 2)]
    setAdUrl(url)
    console.log(movies);
    generateRandomMovie();
  }, [movies]);

  return (
    <>

      {!user && <div className = 'py-4 max-w-screen-lg rounded-lg overflow-hidden'><video
        src = {adUrl}
        autoPlay
        controls
        >
      </video></div>}
      <SectionTitle title={t("home.competition")} />

      {randomMovie && !search &&
        <CardComplex
          movie={randomMovie}
          targetDate={targetDate}
        />}

      {!search &&
        movies?.map((movie) => (
          <Card
            movie={movie} targetDate={targetDate} haveWon={false}
          />
        ))}
      {search &&
        moviesFilter.length > 0 &&
        moviesFilter?.map((movie) => (
          <Card
            movie={movie} targetDate={targetDate} haveWon={true}
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