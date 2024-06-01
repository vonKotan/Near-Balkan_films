import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Router
import { Link } from 'react-router-dom';

// Icons
import { AiFillStar } from 'react-icons/ai';

// Components
import Comments from '../components/Comments';
import { database } from '../firebase/config';
import AddFavorite from '../components/AddFavorite';
import { useTranslation } from 'react-i18next';
import { PosterContainer, PosterContainerSmall } from '../components/PosterContainer';
import { CountdownTimer, CurrentRace, RaceState } from '../components/CountdownTimer';
import { DemoTitle } from '../components/DemoTitle';
import { GraphFieldRace } from '../components/GraphFieldRace';
import { UserIcon, UserIconList } from '../components/UserIcon';

// Radix Imports
import {
  Item,
} from '@radix-ui/react-navigation-menu';

const Details = ({ user, targetDate, haveWon }) => {
  const { id } = useParams();
  const videoRef = React.useRef(null);  //megtekintesek novelesehez kell
  const [stars, setStars] = useState([]);
  const [movie, setMovie] = useState({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadDocument = async () => {
      const docRef = doc(database, 'films', id);
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
      const docRef = doc(database, 'films', id);
      const docSnap = await getDoc(docRef);
      const currentViews = docSnap.data().views ?? 0;
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
    <>
      <section className="max-w-screen-xl sm:grid grid-cols-7 gap-4 relative">
        {user && (
          <div className='absolute top-2 left-2 p-2 bg-nbredmain cursor-pointer rounded-full shadow-md hover:bg-red-400 z-50'>
            <AddFavorite movieId={id} user={user} />
          </div>
        )}
        <div class="hidden sm:block bg-white rounded-md aspect-w-2 aspect-h-3 h-full transition-all overflow-clip col-span-2">
          <img src={movie.image} alt="poster" class="w-full h-full select-none object-center object-cover" />
        </div>
        <div class="rounded-md shadow-md videoPlayer relative overflow-clip col-span-5 bg-nbblack py-auto">
          <video ref={videoRef} controls src={movie.videoUrl} className='w-full h-full' />
        </div>
      </section>
      <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      <section className="max-w-screen-xl lg:grid grid-cols-7 flex flex-col justify-between gap-4">
        <section className='flex flex-col gap-2 rounded-md bg-teal-700 px-7 py-5 col-span-5'>
          <div class="flex justify-between">
            <a class="inline-flex flex-row items-center gap-2" href="/"><div class="bg-nbgreenmain opacity-75 rounded-full w-1 h-1 animate-ping"></div><h4 class="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">01/06/2024</h4></a>
            <RaceState targetDate={targetDate} />
          </div>
          <div id="gridCol" className='flex xl:flex-row flex-col xl:justify-between xl:items-center gap-2'>
            <h2 className="font-black font-h2-title text-4xl text-nbwhite underline underline-offset-4 leading-tight tracking-tight transition-colors decoration-4 decoration-nbgreenmain active:decoration-nbgreenlight -mt-2">{i18n.language === 'en' && (movie.englishTitle || movie.title)} {i18n.language === 'hu' && (movie.title || movie.englishTitle)}</h2>
            <div class="flex flex-row justify-between items-start sm:items-center gap-4 line-clamp-1 max-h-10">
              <div class="flex flex-row justify-start items-end sm:items-center gap-4 py-1 max-w-60 sm:max-w-md md:max-w-lg overflow-x-auto">
                <Link
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className='flex flex-row items-center gap-2 group/button'>
                  {movie.userProfile ? (
                    <img
                      src={movie.userProfile}
                      alt='user'
                      className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                    />
                  ) : (
                    <button type="button"
                      className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </button>)}
                  <h3
                    className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-fit font-bold font-h2-title text-base text-left text-nbgreylight truncate leading-none tracking-tight cursor-pointer">
                    {movie.user}</h3>
                </Link>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <h4 className="relative z-10 font-h3-subtitle rounded-full border-2 border-nbgreymiddark px-3 py-1.5 font-semibold text-nbgreylight text-xs">{movie.genre}</h4>
            <h4 className="relative z-10 font-h3-subtitle rounded-full border-2 border-nbgreymiddark px-3 py-1.5 font-semibold text-nbgreylight text-xs">genre2</h4>
            <h4 className="relative z-10 font-h3-subtitle rounded-full border-2 border-nbgreymiddark px-3 py-1.5 font-semibold text-nbgreylight text-xs">genre3</h4>
          </div>
          <p class="text-base leading-6 text-nbgreylight font-p-paragraph">{i18n.language === 'en' && (movie.englishDescription || movie.description)} {i18n.language === 'hu' && (movie.description || movie.englishDescription)}</p>
          <Link
            to={movie.scriptUrl}
            target="_blank"
          >
            <button href="#" class="bg-nbgreylight hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-1.5 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain">
              <div class="flex items-start gap-2 -mb-0.5">
                <svg class="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreenmain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z"></path>
                </svg>
                <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                  {t("details.check_script")}</p>
              </div>
            </button>
          </Link>
        </section>
        <section className='flex flex-col gap-2 rounded-md bg-teal-700 px-7 py-5 col-span-2'>
          <h3 className="text-lg font-semibold font-h2-title text-nbgreylight opacity-70">cast & crew</h3>
          <div className="w-full h-px bg-nbgreymain"></div>
          <div class="flex flex-row justify-between items-start sm:items-center gap-4 line-clamp-1 max-h-10">
            <div class="flex flex-row justify-start items-end sm:items-center gap-4 py-1 max-w-60 sm:max-w-md md:max-w-lg overflow-x-auto">
              <h4 className="font-h3-subtitle text-xs font-normal text-nowrap text-nbgreylight">Director</h4>
              <Link
                key={movie.id}
                to={`/details/${movie.id}`}
                className='flex flex-row items-center gap-2 group/button'>
                {movie.userProfile ? (
                  <img
                    src={movie.userProfile}
                    alt='user'
                    className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                  />
                ) : (
                  <button type="button"
                    className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                    <svg
                      className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                    </svg>
                  </button>)}
                <h3
                  className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-fit font-bold font-h2-title text-base text-left text-nbgreylight truncate leading-none tracking-tight cursor-pointer">
                  {movie.user}</h3>
              </Link>
            </div>
          </div>
          <div className="w-full h-px bg-nbgreymain"></div>
          <div class="flex flex-row justify-between items-start sm:items-center gap-4 line-clamp-1 max-h-10">
            <div class="flex flex-row justify-start items-end sm:items-center gap-4 py-1 max-w-60 sm:max-w-md md:max-w-lg overflow-x-auto">
              <h4 className="font-h3-subtitle text-xs font-normal text-nowrap text-nbgreylight">Director of Photography</h4>
              <Link
                key={movie.id}
                to={`/details/${movie.id}`}
                className='flex flex-row items-center gap-2 group/button'>
                {movie.userProfile ? (
                  <img
                    src={movie.userProfile}
                    alt='user'
                    className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                  />
                ) : (
                  <button type="button"
                    className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                    <svg
                      className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                    </svg>
                  </button>)}
                <h3
                  className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-fit font-bold font-h2-title text-base text-left text-nbgreylight truncate leading-none tracking-tight cursor-pointer">
                  {movie.user}</h3>
              </Link>
            </div>
          </div>
          <div className="w-full h-px bg-nbgreymain"></div>
          <Link
            to={movie.scriptUrl}
            target="_blank"
          >
            <button href="#" class="ring ring-inset ring-nbgreymain hover:ring-nbgreenmain hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-1.5 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring-nbgreenmain">
              <div class="flex items-start gap-2 -mb-0.5">
                <svg class="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreymain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z"></path>
                </svg>
                <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreymain text-sm leading-5 tracking-tight">
                  {t("card.team_up")}</p>
              </div>
            </button>
          </Link>
        </section>
      </section>
      <Comments movie={movie} user={user} />
    </>
  );
};

export default Details;
