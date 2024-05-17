import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = ({ search }) => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  console.log(search);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let [isShowing, setIsShowing] = useState(true)
  const [moviesFilter, setMoviesFilter] = useState([]);

  useEffect(() => {
    if (search) {
      console.log(search)
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );

      setMoviesFilter(filter);
    }
  }, [search, movies]);

  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 self-stretch pb-5">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain leading-3 underline decoration-nbgreylight decoration-[2.6px] underline-offset-[4px] decoration-wavy">aktuális</h1>
        </div>
      </section>
      <section id="gridRow" className="flex flex-col lg:flex-row sm:items-stretch justify-stretch items-center bg-nbgreylight rounded-lg max-w-screen-lg overflow-clip relative hover:bg-slate-200 transition-colors delay-150">
        <div id="gridCol"
          className="min-w-full lg:max-w-[35%] sm:min-w-0 w-full lg:ml-5 lg:my-5 ring-1 ring-gray-900/5 ring-inset relative">
          <div class="h-full overflow-hidden bg-white lg:rounded-md aspect-h-1 aspect-w-2 active:aspect-h-3 active:aspect-w-2 transition-all active:max-h-40 peer-hover/arrow:hue-rotate-15">
            <img src="https://resizing.flixster.com/sxnyMdBI8PvySbD9UTLfUcTyy6I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzcyNmYxNGRjLWI5MmEtNGZiMS1hYmM3LTA1OTkwYjYzMjkzZS5qcGc=" class="h-full w-full object-cover object-center" />
          </div>
          <svg className='peer/arrow z-10 absolute bottom-2 right-2 h-5 w-5 peer-active:hidden transition-all stroke-nbgreylight hover:stroke-nbgreenmain hover:h-6 hover:w-6 duration-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>
        </div>
        <div id="gridCol" className="flex-auto flex flex-col justify-between px-7 pb-5 lg:pt-5">
          <div id="timeTags" className="flex flex-row justify-between w-full mb-1">
            <Link className="inline-flex flex-row items-center gap-2">
              <div class="h-1 w-1 animate-ping rounded-full bg-nbgreenmain opacity-75"></div>
              <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">2024 május-június</h4>
            </Link>
            <Link className="font-bold font-h4-lead text-base text-nbgreenmain animate-pulse tracking-tighter uppercase sm:block hidden">versenyben</Link>
          </div>
          <div id="gridCol" className='flex flex-col'>
            <Link className="font-black font-h2-title text-4xl text-nbgreydark tracking-tight leading-tight pb-1 underline decoration-nbgreenmain decoration-4 underline-offset-4 hover:text-nbgreenmain active:text-nbgreenlight active:decoration-nbgreenlight transition-colors">Példátlan Mintafilm</Link>
            <div class="min-w-40 w-52 sm:w-full max-w-screen-md overflow-x-scroll sm:overflow-x-visible sm:border-r-transparent border-r-2 border-nbgreymain mb-3 scroll-pr-6">
              <div class="flex flex-row items-center sm:items-center justify-between gap-4 overflow-visible py-1">
                <div class="flex flex-row items-end sm:items-center justify-start gap-4 overflow-visible">
                  <Link className='flex flex-row gap-2 items-center group/button'>
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
                  </Link>
                  <Link className='flex flex-row gap-2 items-center group/button'>
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
                  </Link>
                </div>
                <button href="#"
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
                </button>
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
            <p className="font-p-paragraph text-base text-nbgreymiddark leading-7 line-clamp-3 sm:line-clamp-none">Carolyn Marsh legújabb romantikus sikerkönyvének a hőse egy vérbeli felföldi legény: Duncan MacLeod. Mind a könyv pozitív hőse, MacLeod, mind a regénybeli rosszfiú, Terence Coventry találkozni akar az írónővel.</p>
          </div>
          <div
            id="graphField" className="flex flex-col justify-center bg-gray-50 rounded-2xl text-start ring-1 ring-gray-900/5 ring-inset mt-5 active:bg-slate-200 group/graphfield transition-colors delay-1000 duration-1000">
            <div className="px-6 py-5 flex flex-col gap-2">
              <div class="flex flex-col gap-1 sm:gap-2 group/island">
                <div className="group/labels peer/labels flex flex-col sm:flex-row justify-between gap-1">
                  <div class="pointer-events-none mx-0 leading-none">
                    <span className="text-xs sm:text-base font-bold text-nbgreenmain transition-all">520.540 HUF</span>
                    <span className="text-xs sm:text-base font-bold text-nbgreymain"> / </span>
                    <span className="text-xs sm:text-base group-hover/labels:text-nbredmain group-active/island:text-nbgreydark font-bold text-nbgreenlight transition-all">1.200.000 HUF</span>
                  </div>
                  <span className="order-first flex align-center font-semibold text-nbgreylight text-sm bg-nbredmain hover:bg-red-400 max-w-fit px-2 pt-px rounded-md leading-normal cursor-pointer">30d 21h 32m</span>
                </div>
                <div className="w-full bg-nbgreylight rounded-full h-5 overflow-clip flex items-center group/slider">
                  {/* <div className="bg-nbgreenmain h-2.5 rounded-full w-[45%]"></div> */}
                  <button href="#"
                    className="bg-nbgreenmain hover:bg-nbgreydark active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 rounded-full min-w-fit min-h-fit transition-all select-none group/button h-5 group-active/graphfield:bg-nbgreenlight group-active/graphfield:w-full hover:w-full delay-300 duration-700 group-hover/slider:w-full w-[45%]">
                    <div className="collapse transition-all delay-300 duration-700 group-hover/slider:visible flex items-start justify-center gap-1">
                      <svg
                        className="group-active/button:fill-nbgreenlight group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreylight"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                        <path
                          d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                      </svg>
                      <p
                        className="group-active/button:text-nbgreenlight group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-xs leading-5 tracking-tight">
                        támogatom</p>
                    </div>
                  </button>
                  {/* <div className="peer/empty sm:flex items-start group/button justify-center gap-1 hidden group-hover/slider:hidden hover:hidden w-[55%]">
                    <svg
                      className="group-active/button:fill-nbgreenlight group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreenmain"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                      <path
                        d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                    </svg>
                    <p
                      className="group-active/button:text-nbgreenlight group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreenmain text-xs leading-5 tracking-tight">
                      támogatom</p>
                  </div> */}
                </div>
              </div>
              {/* <button href="#"
                className="bg-nbgreendark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain mb-1 mt-2">
                <div className="flex items-start justify-center gap-2">
                  <svg
                    className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-0.5 fill-nbgreenmain"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                    <path
                      d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                  </svg>
                  <p
                    className="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    fund project</p>
                </div>
              </button> */}
              {/* <p className="text-gray-600 text-xs leading-4">Click on the button, assign your profile and get
                verified!</p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="gridRow" className="flex flex-col lg:flex-row sm:items-stretch sm:justify-end lg:justify-stretch bg-nbgreylight rounded-lg max-w-screen-lg h-auto overflow-clip relative hover:bg-slate-200 transition-colors delay-150 lg:max-h-56">
        <div id="gridCol"
          className="hidden lg:block max-h-56 lg:max-h-none min-w-full lg:max-w-[12.5%] sm:min-w-0 w-full lg:ml-5 lg:my-5 ring-1 ring-gray-900/5 ring-inset overflow-clip">
          <div class="h-full overflow-hidden bg-white lg:rounded-md aspect-h-1 aspect-w-2 transition-all peer-hover/arrow:hue-rotate-15">
            <img src="https://resizing.flixster.com/sxnyMdBI8PvySbD9UTLfUcTyy6I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzcyNmYxNGRjLWI5MmEtNGZiMS1hYmM3LTA1OTkwYjYzMjkzZS5qcGc=" class="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div id="gridCol"
          className="lg:hidden min-w-full lg:max-w-[35%] sm:min-w-0 w-full lg:ml-5 lg:my-5 ring-1 ring-gray-900/5 ring-inset relative">
          <div class="h-full overflow-hidden bg-white lg:rounded-md aspect-h-1 aspect-w-2 active:aspect-h-3 active:aspect-w-2 transition-all active:max-h-40 peer-hover/arrow:hue-rotate-15">
            <img src="https://resizing.flixster.com/sxnyMdBI8PvySbD9UTLfUcTyy6I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzcyNmYxNGRjLWI5MmEtNGZiMS1hYmM3LTA1OTkwYjYzMjkzZS5qcGc=" class="h-full w-full object-cover object-center sm:object-top lg:object-center" />
          </div>
          <svg className='peer/arrow z-10 absolute bottom-2 right-2 h-5 w-5 peer-active:hidden transition-all stroke-nbgreylight hover:stroke-nbgreenmain hover:h-6 hover:w-6 duration-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>
        </div>
        <div id="gridCol" className="flex-auto flex flex-col justify-between pr-7 lg:pl-3 pl-7 pb-5 lg:pt-5">
          <div id="timeTags" className="flex flex-row justify-between w-full mb-1">
            <Link className="inline-flex flex-row items-center gap-2">
              <div class="h-1 w-1 animate-ping rounded-full bg-nbgreenmain opacity-75"></div>
              <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">2024 május-június</h4>
            </Link>
            <Link className="font-bold font-h4-lead text-base text-nbgreenmain animate-pulse tracking-tighter uppercase sm:block hidden">versenyben</Link>
          </div>
          <div id="gridCol" className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-8'>
            <Link className="font-black font-h2-title text-4xl text-nbgreydark tracking-tight leading-tight pb-1 underline decoration-nbgreenmain decoration-4 underline-offset-4 hover:text-nbgreenmain active:text-nbgreenlight active:decoration-nbgreenlight transition-colors sm:min-w-max">Példátlan Mintafilm</Link>
            <div class="flex flex-row items-stretch sm:items-center justify-between gap-4  overflow-x-scroll sm:overflow-x-hidden lg:overflow-x-visible py-1">
              <div class="flex flex-row items-end sm:items-center justify-start gap-4 overflow-visible">
                <Link className='flex flex-row gap-2 items-center group/button'>
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
                    Magyar 'Machine' Ádám 'Gun' Gergely</h3>
                </Link>
              </div>
            </div>

          </div>
          <div
            id="graphField" className="flex flex-col justify-center bg-gray-50 rounded-2xl text-start ring-1 ring-gray-900/5 ring-inset mt-3 sm:mt-2 active:bg-slate-200 group/graphfield transition-colors delay-1000 duration-1000">
            <div className="px-6 py-5 flex flex-col gap-2">
              <div class="flex flex-col gap-1 sm:gap-2 group/island">
                <div className="group/labels peer/labels flex flex-col sm:flex-row justify-between gap-1">
                  <div class="pointer-events-none mx-0 leading-none">
                    <span className="text-xs sm:text-base font-bold text-nbgreenmain transition-all">520.540 HUF</span>
                    <span className="text-xs sm:text-base font-bold text-nbgreymain"> / </span>
                    <span className="text-xs sm:text-base group-hover/labels:text-nbredmain group-active/island:text-nbgreydark font-bold text-nbgreenlight transition-all">1.200.000 HUF</span>
                  </div>
                  <span className="order-first flex align-center font-semibold text-nbgreylight text-sm bg-nbredmain hover:bg-red-400 max-w-fit px-2 pt-px rounded-md leading-normal cursor-pointer">30d 21h 32m</span>
                </div>
                <div className="w-full bg-nbgreylight rounded-full h-5 overflow-clip flex items-center group/slider">
                  <button href="#"
                    className="bg-nbgreenmain hover:bg-nbgreydark active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 rounded-full min-w-fit min-h-fit transition-all select-none group/button h-5 group-active/graphfield:bg-nbgreenlight group-active/graphfield:w-full hover:w-full delay-300 duration-700 group-hover/slider:w-full w-[45%]">
                    <div className="collapse transition-all delay-300 duration-700 group-hover/slider:visible flex items-start justify-center gap-1">
                      <svg
                        className="group-active/button:fill-nbgreenlight group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreylight"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                        <path
                          d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                      </svg>
                      <p
                        className="group-active/button:text-nbgreenlight group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-xs leading-5 tracking-tight">
                        támogatom</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
