import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Icons
import { AiFillStar } from 'react-icons/ai';

// Components
import Comments from '../components/Comments';
import { database } from '../firebase/config';
import AddFavorite from '../components/AddFavorite';

// Radix Imports
import {
  Item,
} from '@radix-ui/react-navigation-menu';

const Details = ({ user }) => {
  const { id } = useParams();
  const videoRef = React.useRef(null);  //megtekintesek novelesehez kell
  const [stars, setStars] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const loadDocument = async () => {
      const docRef = doc(database, 'reviews', id);  //majd át kell írni a reviews-t films-re
      const docSnap = await getDoc(docRef);

      setMovie(docSnap.data());
    };
    loadDocument();
  }, [id]);

  const setRatingStars = (size) => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    if (movie) {
      setStars(setRatingStars(movie?.rating));
    }
  }, [movie]);
  
  //Megtekintesek novelese
  useEffect(() => {
    const increaseViews = async () => {
      const docRef = doc(database, 'reviews', id);  //majd át kell írni a reviews-t films-re
      const docSnap = await getDoc(docRef);
      const currentViews = docSnap.data().views;
      await updateDoc(docRef, { views: currentViews + 1 });
    };
    const handleVideoPlay = () => {
      // Increase views when the video starts playing
      increaseViews();
    };
    let currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      currentVideoRef.addEventListener('play', handleVideoPlay);
    }
    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('play', handleVideoPlay);
      }
    };
  }, [videoRef, id]);

  return (
    <section className='flex items-center justify-center py-4 sectionHeight lg:py-8'>
      <div className='m-auto max-w-[1200px] w-[90%] '>
        <div className='relative flex flex-col gap-10 lg:flex-row'>
          <img
            src={movie.image}
            alt='poster'
            className='object-cover lg:w-[500px] lg:h-[700px] max-h-[500px] md:max-h-[700px]'
          />
          {user && (
            <div className='absolute top-0 left-0 p-2 bg-[rgba(0,0,0,0.7)]  cursor-pointer'>
              <AddFavorite movieId={id} user={user} />
            </div>
          )}

          <div className='flex flex-col gap-4'>
            <h1 className='w-full text-3xl lg:text-6xl font-bold lg:mt-[-10px]'>
              {movie.title}
            </h1>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                {stars.map((e) => (
                  <AiFillStar
                    key={e}
                    className='text-xl text-yellow-400 lg:text-3xl'
                  />
                ))}
              </div>
              <div className='flex items-center gap-4'>
                {/* <AddToFavorits data={movieData} movieId={id} /> */}
                <span className='text-xl italic text-gray-500'>
                  {movie.genre}
                </span>
              </div>
            </div>
            <p className='text-justify lg:text-xl'>{movie.description}</p>
          </div>
        </div>
        {/*EZT CSAK BEJELENTKEZVE KENE LATNI INNENTOL*/}
        {user&&(<Item>
          <div className='py-4'>
            <video ref={videoRef} controls src={movie.videoUrl} className='w-full' />
          </div>
          <p className='text-justify lg:text-xl'>Views: {movie.views}</p>
          {/* Comments section */}
          <Comments id={id} user={user} />
        </Item>
        )}
      </div>
    </section>
  );
};

export default Details;
