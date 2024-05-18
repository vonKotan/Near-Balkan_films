import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import { Card, CardComplex } from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
// import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = ({ search }) => {
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

  // target date
  const RELATIVE_TIME_FROM_NOW = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const EXACT_DATE_IN_FUTURE = new Date("May 3, 2024 12:00:00").getTime();
  const targetDate = EXACT_DATE_IN_FUTURE;

  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 pb-4 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain underline underline-offset-4 leading-3 decoration-2 decoration-nbgreylight decoration-wavy">verseny</h1>
        </div>
      </section>
      {search && moviesFilter.length === 0 && (
        <div className='flex justify-center items-center gap-8 py-8 w-full max-w-screen-lg'>
          <p>{t("home.no_results")}</p>
        </div>
      )}
      {movies?.filter((movie, index) => (
        index === movie[Math.floor(Math.random() * movies.length)] &&
        <CardComplex
          movie={movie[Math.floor(Math.random() * movies.length)]}
          targetDate={targetDate}
        />
      ))}
      {!search &&
        movies?.map((movie) => (
          <>
            <CardComplex
              movie={movie} targetDate={targetDate} haveWon={true}
            />
            <Card
              movie={movie} targetDate={targetDate} haveWon={false}
            />
          </>
        ))}
      {search &&
        moviesFilter.length > 0 &&
        moviesFilter?.map((movie) => (
          <Card
            movie={movie} targetDate={targetDate} haveWon={false}
          />
        ))}
    </>
  );
};

export default Home;


{/* <Transition
          show={isShowing}
          enter="transition duration-[400ms]"
          enterFrom="scale-50 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
      > */}