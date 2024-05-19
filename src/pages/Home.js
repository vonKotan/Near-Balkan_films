import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import { Card, CardComplex } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
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