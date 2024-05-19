import React from 'react';
import { Link } from 'react-router-dom';
import AddFavorite from '../components/AddFavorite';
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const Favorites = ({ user, targetDate, }) => {
  const { documents: favorites } = useFetchData(`users/${user?.uid}/favorites`);
  const { t, i18n } = useTranslation();
  console.log(favorites);
  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center max-w-screen-lg w-full">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 pb-4 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain underline underline-offset-4 leading-3 decoration-2 decoration-nbgreylight decoration-wavy">{t("favourites.favourites")}</h1>
        </div>
      </section>
      {favorites &&
        favorites.length > 0 &&
        favorites?.map((movie) => (
          <div className='relative' key={movie.id}>
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
