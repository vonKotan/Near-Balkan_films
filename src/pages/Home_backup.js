import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card.1';
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
    <section id="gridRow" className='w-full'>
        <div className='flex flex-col items-center justify-between gap-4 pb-4 border-b-4 border-nbgreenmain md:pb-8 sm:flex-row'>
          <div className='sm:w-[50%] flex flex-col items-start justify-center'>
            <p className='mt-4 text-base italic text-nbgreenmain xl:text-xl'>
              <div>{t("home.description")}</div>
            </p>
          </div>
        </div>
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
        <div className='grid items-start grid-flow-row grid-cols-1 gap-8 py-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {!search &&
            movies?.map((movie) => (
              <Link
                key={movie.id}
                to={`/details/${movie.id}`}
                className='flex items-center'
              >
                <Card
                  image={movie.image}
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                />
              </Link>
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
                <Link
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className='flex items-center'
                >
                  <Card
                    image={movie.image}
                    title={movie.title}
                    genre={movie.genre}
                    rating={movie.rating}
                  />
                </Link>
              </Transition>
            ))}
        </div>
      </section>
  );
};

export default Home;