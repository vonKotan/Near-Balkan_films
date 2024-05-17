import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import { Card, CardComplex } from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = ({ search }) => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  console.log(search);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let [isShowing, setIsShowing] = useState(true)
  const [moviesFilter, setMoviesFilter] = useState([]);

  useEffect(() => {
    if (search) {
      console.log(search)
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );

      setMoviesFilter(filter);
    }
  }, [search, movies]);

  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 self-stretch pb-5">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain leading-3 underline decoration-nbgreylight decoration-[2.6px] underline-offset-[4px] decoration-wavy">aktuális</h1>
        </div>
      </section>
      {search && moviesFilter.length === 0 && (
        <Transition
          show={isShowing}
          enter="transition duration-[400ms]"
          enterFrom="scale-50 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <div className='flex justify-center items-center gap-8 py-8'>
            <p>{t("home.no_results")}</p>
          </div>
        </Transition>
      )}
      {!search &&
        movies?.map((movie) => (
          // <Link
          //   key={movie.id}
          //   to={`/details/${movie.id}`}
          //   className='flex items-center'
          // >
            <Card
              image={movie.image}
              title={movie.title}
            // genre={movie.genre}
            // rating={movie.rating}
            />
          // </Link>
        ))}
      {search &&
        moviesFilter.length > 0 &&
        movies?.map((movie) => (
          <Transition
            show={isShowing}
            enter="transition duration-[400ms]"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition duration-200 ease-in-out"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            {/* <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className='flex items-center'
            > */}
              <Card
                image={movie.image}
                title={movie.title}
              // genre={movie.genre}
              // rating={movie.rating}
              />
            {/* </Link> */}
          </Transition>
        ))}
    </>
  );
};

export default Home;
