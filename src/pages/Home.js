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
// import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = ({ search, targetDate }) => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  console.log(search);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [moviesFilter, setMoviesFilter] = useState([]);
  const [randomMovie, setRandomMovie] = useState(0);

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
      <SectionTitle title={t("home.competition")} />
      {movies?.filter((movie, index) => (
        index === movie[Math.floor(Math.random() * movies.length)] &&
        <CardComplex
          movie={movie[Math.floor(Math.random() * movies.length)]}
          targetDate={targetDate}
        />
      ))}
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