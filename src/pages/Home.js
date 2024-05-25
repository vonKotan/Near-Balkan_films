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

const Home = ({ search, targetDate }) => {
  const { movies } = useFetchMovies({ fieldToOrderBy: 'collected', isDescending: true });
  const { t, i18n } = useTranslation();

  const [randomMovie, setRandomMovie] = useState(0);
  const {filteredMovies: moviesFilter} = useFilterMovies(movies, search)

  useEffect(() => {
    const generateRandomMovie = () => {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setRandomMovie(randomMovie)
    }
    console.log(movies);
    generateRandomMovie();
  }, [movies]);

  return (
    <>
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