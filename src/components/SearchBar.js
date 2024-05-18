import React, { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

export const SearchBar = ({ search, setSearch }) => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //const [search, setSearch] = useState(null);
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
    <input
      type="text"
      placeholder={t("navbar.search")}
      className='group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreenlight border-0 focus:border-0 active:border-0 bg-transparent m-0 p-0 rounded-none w-24 max-w-fit font-a-anchor font-semibold text-base text-nbgreendark hover:text-nbgreenmain focus:text-nbgreenmain active:text-nbgreenlight placeholder:text-nbgreendark leading-5 tracking-tight transition-all ring-0 active:ring-0 focus:ring-0 focus:underline placeholder:no-underline decoration-nbgreenlight decoration-2 overflow-visible placeholder:hover:text-nbgreenmain placeholder:active:text-nbgreenlight'
      value={search || ''}
      onChange={(e) => {
        setSearch(e.target.value)
      }}
    />
  )
};

export default SearchBar;