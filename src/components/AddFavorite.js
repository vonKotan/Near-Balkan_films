import { useContext, useEffect, useState } from 'react';
import { database } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { UserContext } from '../App';
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb';

const AddFavorite = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user, userObject } = useContext(UserContext);

  const addFavorite = async () => {
    try {
      let newFavorites = userObject.favourites ? [...userObject.favourites, movie.id] : [movie.id]
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
      userObject.favourites.pop(movie.id)
      await setDoc(
        doc(database, 'users', user.uid),
        userObject,
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log(userObject);
    if (userObject) {
      if (userObject?.favourites?.includes(movie.id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [movie, userObject]);

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
