import { useEffect, useState } from 'react';

import { database } from '../firebase/config';
import { deleteDoc, doc, setDoc, Timestamp } from 'firebase/firestore';

import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const AddFavorite = ({ movieId, user }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { documents: favorites } = useFetchData(`users/${user?.uid}/favorites`);
  const { documents: movies } = useFetchData(`films`);
  const { t, i18n } = useTranslation();   

  const addFavorite = async () => {
    try {
      const movieData = movies.filter((movie) => movie.id === movieId);
      const data = { ...movieData[0], createdAt: Timestamp.now() };
      await setDoc(
        doc(database, `users/${user?.uid}/favorites`, movieId),
        data,
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeFavorite = async () => {
    try {
      await deleteDoc(doc(database, `users/${user?.uid}/favorites`, movieId));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (favorites) {
      const verify = favorites.filter((favorite) => favorite.id === movieId);
      if (verify.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [favorites, movieId]);

  return (
    <>
      {isFavorite ? (
        <TbHeartMinus
          size={30}
          className='text-nbgreenmain'
          onClick={removeFavorite}
        />
      ) : (
        <TbHeartPlus
          size={30}
          className='text-nbgreenmain'
          onClick={addFavorite}
        />
      )}
    </>
  );
};

export default AddFavorite;
