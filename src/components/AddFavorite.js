import { useContext, useEffect, useState } from 'react';
import { database } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { UserContext } from '../App';
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb';

const AddFavorite = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user } = useContext(UserContext);

  const addFavorite = async () => {
    try {
      let newFavorites = user.favourites ? [...user.favourites, movie.id] : [movie.id]
      await setDoc(
        doc(database, 'users', user.uid),
        { favourites: newFavorites },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeFavorite = async () => {
    try {
      let favorites = user.favourites;
      favorites.pop(movie.id)
      await setDoc(
        doc(database, 'users', user.uid),
        { favourites: favorites },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      if (user?.favourites?.includes(movie.id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [movie, user]);

  return (
    <>
      {isFavorite ? (
        <TbHeartMinus
          size={30}
          className='text-nbgreylight'
          onClick={removeFavorite}
        />
      ) : (
        <TbHeartPlus
          size={30}
          className='text-nbgreylight'
          onClick={addFavorite}
        />
      )}
    </>
  );
};

export default AddFavorite;
