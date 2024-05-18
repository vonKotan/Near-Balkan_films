import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';

// Components
import { CountdownTimer, CurrentRace, RaceState } from './CountdownTimer';
import { GraphFieldRace } from './GraphFieldRace';
import { useTranslation } from 'react-i18next';

import { AiFillStar } from 'react-icons/ai';

export const Card = ({ movie, targetDate, haveWon }) => {

  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="gridRow" className="flex flex-col lg:flex-row sm:items-stretch justify-stretch bg-nbgreylight rounded-lg max-w-screen-lg h-auto overflow-clip relative hover:bg-slate-200 transition-colors delay-150 shadow-md w-full">
      <div id="gridCol"
        className="min-w-full max-h-56 sm:min-w-24 w-full lg:ml-5 lg:my-5 ring-1 ring-gray-900/5 ring-inset overflow-clip relative active:max-h-max lg:rounded-md lg:max-w-28 lg:min-h-40">
        <div class="peer aspect-h-4 aspect-w-3 active:aspect-h-3 active:aspect-w-2 lg:active:aspect-none lg:aspect-none transition-all lg:h-full">
          <img src={movie.image} alt="poster" class="h-full w-full object-cover object-center select-none" />
        </div>
        <svg className='peer/arrow z-10 absolute bottom-2 right-2 h-5 w-5 peer-active:hidden lg:hidden transition-all stroke-nbgreylight hover:stroke-nbgreenmain hover:h-6 hover:w-6 duration-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
        </svg>
      </div>
      <div id="gridCol" className="flex-auto flex flex-col justify-between pr-7 lg:pl-3 pl-7 pb-5 lg:pt-5">
        <div id="timeTags" className="flex flex-row justify-between w-full mb-1">
          <CurrentRace targetDate={targetDate} />
          <RaceState targetDate={targetDate} />
        </div>
        <div id="gridCol" className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-8'>
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="font-black font-h2-title text-4xl text-nbgreydark tracking-tight leading-tight pb-1 underline decoration-nbgreenmain decoration-4 underline-offset-4 hover:text-nbgreenmain active:text-nbgreenlight active:decoration-nbgreenlight transition-colors sm:min-w-max">{movie.title}</Link>
          <div class="flex flex-row items-stretch sm:items-center justify-between gap-4 overflow-x-hidden lg:overflow-x-visible py-1">
            <div class="flex flex-row items-end sm:items-center justify-start gap-4 overflow-visible">
              <a className='flex flex-row gap-2 items-center group/button'>
                <button type="button"
                  className="peer flex justify-center items-end gap-1 bg-nbgreydark group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none">
                  <svg
                    className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                  </svg>
                </button>
                <h3
                  className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight  font-bold font-h2-title text-base text-left text-nbgreydark leading-none tracking-tight cursor-pointer text-nowrap text-ellipsis max-w-32 sm:max-w-44 lg:max-w-none">
                  {movie.user}</h3>
              </a>
            </div>
          </div>

        </div>
        <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      </div>
    </section>
  );
};

export const CardComplex = ({ movie, targetDate, haveWon }) => {

  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="gridRow" className="flex flex-col lg:flex-row sm:items-stretch justify-stretch items-center bg-nbgreylight rounded-lg max-w-screen-lg overflow-clip relative hover:bg-slate-200 transition-colors delay-150">
      <div id="gridCol"
        className="min-w-full lg:max-w-[35%] sm:min-w-0 w-full lg:ml-5 lg:my-5 ring-1 ring-gray-900/5 ring-inset relative">
        <div class="h-full overflow-hidden bg-white lg:rounded-md aspect-h-1 aspect-w-2 active:aspect-h-3 active:aspect-w-2 transition-all peer-hover/arrow:hue-rotate-15">
          <img src={movie.image} alt="poster" class="h-full w-full object-cover object-center select-none" />
        </div>
        <svg className='peer/arrow z-10 absolute bottom-2 right-2 h-5 w-5 peer-active:hidden transition-all stroke-nbgreylight hover:stroke-nbgreenmain hover:h-6 hover:w-6 duration-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
        </svg>
      </div>
      <div id="gridCol" className="flex-auto flex flex-col justify-between pr-7 pl-7 lg:pl-3 pb-5 lg:pt-5">
        <div id="timeTags" className="flex flex-row justify-between w-full mb-1">
          <a href="/" className="inline-flex flex-row items-center gap-2">
            <div class="h-1 w-1 animate-ping rounded-full bg-nbgreenmain opacity-75"></div>
            <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">2024 május-június</h4>
          </a>
          <a href="/" className="font-bold font-h4-lead text-base text-nbgreenmain animate-pulse tracking-tighter uppercase sm:block hidden">versenyben</a>
        </div>
        <div id="gridCol" className='flex flex-col'>
          {i18n.language === 'hu' && (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="font-black font-h2-title text-4xl text-nbgreydark tracking-tight leading-tight pb-1 underline decoration-nbgreenmain decoration-4 underline-offset-4 hover:text-nbgreenmain active:text-nbgreenlight active:decoration-nbgreenlight transition-colors">{movie.title}
            </Link>)}
          {i18n.language === 'en' && (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="font-black font-h2-title text-4xl text-nbgreydark tracking-tight leading-tight pb-1 underline decoration-nbgreenmain decoration-4 underline-offset-4 hover:text-nbgreenmain active:text-nbgreenlight active:decoration-nbgreenlight transition-colors">{movie.englishTitle}
            </Link>)}
          <div class="min-w-40 w-52 sm:w-full max-w-screen-md overflow-x-scroll sm:overflow-x-visible sm:border-r-transparent border-r-2 border-nbgreymain mb-3 scroll-pr-6">
            <div class="flex flex-row items-center sm:items-center justify-between gap-4 overflow-visible py-1">
              <div class="flex flex-row items-end sm:items-center justify-start gap-4 overflow-visible">
                <a href=""
                  className='flex flex-row gap-2 items-center group/button'>
                  <button type="button"
                    className="peer flex justify-center items-end gap-1 bg-nbgreydark group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none">
                    <svg
                      className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                    </svg>
                  </button>
                  <h3
                    className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight  font-bold font-h2-title text-base text-left text-nbgreydark leading-none tracking-tight cursor-pointer text-nowrap sm:text-balance text-ellipsis">
                    Magyar 'Machine' Ádám 'Gun' Gergely</h3>
                </a>
                <a href=""
                  className='flex flex-row gap-2 items-center group/button'>
                  <button type="button"
                    className="peer flex justify-center items-end gap-1 bg-nbgreydark group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none">
                    <svg
                      className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                    </svg>
                  </button>
                  <h3
                    className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight  font-bold font-h2-title text-base text-left text-nbgreydark leading-none tracking-tight cursor-pointer text-nowrap sm:text-balance text-ellipsis">
                    Bizzer Pityu</h3>
                </a>
              </div>
              <a href=""
                className="hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-2 pt-1 pb-1.5 rounded-xl min-w-fit transition-all select-none group/button ring-inset focus:outline-none ring-2 focus:ring-nbgreenmain hover:ring-nbgreenmain ring-nbgreymain sm:-translate-y-0.5 max-h-fit">
                <div className="flex items-start gap-1 -mb-0.5">
                  <svg
                    className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-focus/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreymain"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                    <path
                      d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                  </svg>
                  <p
                    className="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreymain group-focus/button:text-nbgreenmain text-sm leading-5 tracking-tight">
                    munka</p>
                </div>
              </a>
              {/* <Link role="menuitem" tabindex="-1" id="menu-item-1"
              className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
              <svg
                className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreymain"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                <path
                  d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
              </svg>
              <p
                className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-max font-a-anchor font-semibold text-base text-nbgreymain leading-5 tracking-tight transition-all">
                belépek</p>
            </Link> */}
            </div>
          </div>
          <p className="font-p-paragraph text-base text-nbgreymiddark leading-7 line-clamp-3 sm:line-clamp-6 mb-2">Carolyn Marsh legújabb romantikus sikerkönyvének a hőse egy vérbeli felföldi legény: Duncan MacLeod. Mind a könyv pozitív hőse, MacLeod, mind a regénybeli rosszfiú, Terence Coventry találkozni akar az írónővel.</p>
        </div>
        <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      </div>
    </section >
  );
};

export default Card;