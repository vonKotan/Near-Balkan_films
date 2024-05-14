import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation(); 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //changeLanguage("en");
  const [search, setSearch] = useState(null);
  const [moviesFilter, setMoviesFilter] = useState([]);

  useEffect(() => {
    if (search) {
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );

      setMoviesFilter(filter);
    }
  }, [search, movies]);

  return (
    <section className='max-w-[1200px] w-[90%] mr-auto  sectionHeight'>
      <div className='flex flex-col items-center justify-between gap-4 pb-4 border-b-4 border-nbgreenmain md:pb-8 sm:flex-row'>
        <div className='sm:w-[50%] flex flex-col items-start justify-center'>
          <h1 className='mb-2 text-3xl font-bold sm:text-4xl xl:text-5xl'>
            <span className='text-nbgreenmain'> Near-Balkan</span>
            <span className='border-b-4 border-black'>Films</span>
          </h1>
          <p className='mt-4 text-xs italic text-gray-500 sm:text-base xl:text-xl'>
            <div>{t("home.description")}</div>
          </p>
        </div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("hu")}>HU</button>
        <form className='relative flex sm:w-[50%] w-full'>
          <input
            type='text'
            placeholder={t("home.search")}
            className='items-center justify-center w-full p-2 italic border-2 rounded-md outline-none placeholder:text-center border-slate-200-400 text-start bg-gray-50'
            value={search || ''}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

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
        {search && moviesFilter.length === 0 && <p>{t("home.no_results")}</p>}
        {search &&
          moviesFilter.length > 0 &&
          moviesFilter?.map((movie) => (
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
      </div>
    </section>
  );
};

export default Home;
