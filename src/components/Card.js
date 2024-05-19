import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';

// Components
import { CountdownTimer, CurrentRace, RaceState } from './CountdownTimer';
import { GraphFieldRace } from './GraphFieldRace';
import { PosterContainer, PosterContainerSmall } from './PosterContainer';
import { DemoTitle } from './DemoTitle';
import { UserIcon, UserIconList } from './UserIcon';
import { DemoDescription } from './DemoDescription';
import { useTranslation } from 'react-i18next';

import { AiFillStar } from 'react-icons/ai';

export const Card = ({ movie, targetDate, haveWon }) => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="gridRow" className=" flex flex-col lg:flex-row sm:items-stretch bg-nbgreylight rounded-lg max-w-screen-lg h-auto overflow-clip relative hover:bg-slate-200 transition-colors delay-150 shadow-md w-full">
      <PosterContainerSmall movie={movie} />
      <div id="gridCol" className="flex-auto flex flex-col justify-between gap-3 pr-7 lg:pl-3 pl-7 pb-5 lg:pt-5">
        <div id="timeTags" className="flex flex-row justify-between w-full -mb-1">
          <CurrentRace targetDate={targetDate} />
          <RaceState targetDate={targetDate} />
        </div>
        <div id="gridCol" className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-2 lg:gap-2'>
          <DemoTitle movie={movie} />
          <UserIcon movie={movie} />
        </div>
        <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      </div>
    </section >
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
      <PosterContainer movie={movie} />
      <div id="gridCol" className="flex-auto flex flex-col gap-2 justify-between pr-7 pl-7 lg:pl-3 pb-5 lg:pt-5">
        <div id="timeTags" className="flex flex-row justify-between w-full">
          <CurrentRace targetDate={targetDate} />
          <RaceState targetDate={targetDate} />
        </div>
        <div id="gridCol" className='flex flex-col gap-2'>
          <DemoTitle movie={movie} />
          <UserIcon movie={movie} />
        </div>
        <p className="font-p-paragraph text-base text-nbgreymiddark leading-7 line-clamp-3 sm:line-clamp-6 mb-2">Carolyn Marsh legújabb romantikus sikerkönyvének a hőse egy vérbeli felföldi legény: Duncan MacLeod. Mind a könyv pozitív hőse, MacLeod, mind a regénybeli rosszfiú, Terence Coventry találkozni akar az írónővel.</p>
        <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      </div>
    </section >
  );
};

export default Card;