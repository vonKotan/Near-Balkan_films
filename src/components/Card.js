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
    <section id="gridRow" className="relative flex lg:flex-row flex-col sm:items-stretch bg-nbgreylight hover:bg-slate-200 shadow-md rounded-lg w-full max-w-screen-lg h-auto transition-colors delay-150 overflow-clip">
      <PosterContainerSmall movie={movie} />
      <div id="gridCol" className="flex flex-col flex-auto justify-between gap-3 lg:pt-5 pr-7 pb-5 pl-7 lg:pl-3">
        <div id="timeTags" className="flex flex-row justify-between -mb-1 w-full">
          <CurrentRace targetDate={targetDate} />
          <RaceState targetDate={targetDate} />
        </div>
        <div id="gridCol" className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-2'>
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
    <section id="gridRow" className="relative flex lg:flex-row flex-col justify-stretch items-center sm:items-stretch bg-nbgreylight hover:bg-slate-200 rounded-lg max-w-screen-lg transition-colors delay-150 overflow-hidden">
      <PosterContainer movie={movie} />
      <div id="gridCol" className="flex flex-col flex-auto justify-between gap-3 lg:pt-5 pr-7 pb-5 pl-7 lg:pl-3">
        <div id="timeTags" className="flex flex-row justify-between w-full">
          <CurrentRace targetDate={targetDate} />
          <RaceState targetDate={targetDate} />
        </div>
        <div id="gridCol" className='flex flex-col gap-2'>
          <DemoTitle movie={movie} />
          <UserIconList movie={movie} />
          <DemoDescription movie={movie} />
        </div>
        <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} />
      </div>
    </section >
  );
};

export default Card;