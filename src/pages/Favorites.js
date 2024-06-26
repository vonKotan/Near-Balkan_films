import React from 'react';
import { Link } from 'react-router-dom';
import AddFavorite from '../components/AddFavorite';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const Favorites = ({ user, targetDate, }) => {
  const { documents: favorites } = useFetchData(`users/${user?.uid}/favorites`);
  const { t, i18n } = useTranslation();
  console.log(favorites);
  return (
    <>
      <SectionTitle title={t("favourites.favourites")} />
      {favorites &&
        favorites.length > 0 &&
        favorites?.map((movie) => (
          <div className='relative w-full max-w-screen-lg' key={movie.id}>
            <Card
              movie={movie} targetDate={targetDate} haveWon={true}
            />
            <div className='absolute top-2 left-2 p-2 bg-nbredmain cursor-pointer rounded-full shadow-md hover:bg-red-400'>
              <AddFavorite movieId={movie.id} user={user} />
            </div>
          </div>
        ))}
      {favorites && favorites.length === 0 && (
        <div className='flex justify-center items-center gap-8 py-8 w-full max-w-screen-lg h-[65dvh]'>
          <p>{t("favourites.no_favs")}</p>
        </div>
      )}
    </>
  );
};

export default Favorites;
