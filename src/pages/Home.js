import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const Home = (search, moviesFilter) => {
  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let [isShowing, setIsShowing] = useState(true)

  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain leading-3">aktuális</h1>
          <div className="flex items-start -space-x-4 -translate-x-3">
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg className="w-11 h-2 text-nbwhite" xmlns="http://www.w3.org/2000/svg" width="49" height="13"
              viewBox="0 0 49 13" fill="none">
              <path
                d="M46.1999 10.0143C40.8571 10.0143 40.6142 1.99988 35.2714 2C29.9285 2 29.4428 10.0142 24.1 10.0143C18.7571 10.0143 18.5143 1.99988 13.1714 2C7.82856 2 7.34285 10.0142 2 10.0143"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
      <section id="gridRow" className="flex flex-row flex-wrap justify-center items-center bg-nbgreylight rounded-lg">
          <div id="gridCol"
            className="flex-auto w-full max-w-lg">
            <div class="h-24 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-3 lg:aspect-w-2">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" class="h-full w-full object-cover object-center"/>
            </div>
          </div>
          <div id="gridCol" className="lg:flex-auto">
            <div className="flex flex-row justify-between w-full">
              <div className="inline-flex flex-row items-center gap-2">
                <div class="h-1 w-1 animate-ping rounded-full bg-nbgreenmain opacity-75"></div>
                <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">2024 május-június</h4>
              </div>
              <h4 className="font-bold font-h4-lead text-base text-nbgreenlight tracking-tighter uppercase sm:block hidden">versenyben</h4>
            </div>
            <div className='space-y-1'>
              <h3 className="font-black font-h2-title text-4xl text-gray-900 tracking-tight">Példátlan Mintafilm</h3>
              <h5 className="font-bold font-h3-subtitle text-gray-500 text-sm leading-4 tracking-wide">M.Ádám & Bizzer Pityu
              </h5>
            </div>
            <p className="mt-6 font-p-paragraph text-base text-gray-600 leading-7">Carolyn Marsh legújabb romantikus sikerkönyvének a hőse egy vérbeli felföldi legény: Duncan MacLeod. Mind a könyv pozitív hőse, MacLeod, mind a regénybeli rosszfiú, Terence Coventry találkozni akar az írónővel.</p>
            <div
              className="mt-6 lg:flex lg:flex-col lg:justify-center bg-gray-50 py-4 lg:py-6 rounded-2xl text-center ring-1 ring-gray-900/5 ring-inset">
              <div className="mx-auto px-8 max-w-xs">
                <p className="font-semibold text-gray-600 text-sm">Were you also there?</p>
                <button href="#"
                  className="bg-nbgreendark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain">
                  <div className="flex items-start gap-2 -mb-0.5">
                    <svg
                      className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreenmain"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                      <path
                        d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                    </svg>
                    <p
                      className="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                      I was there!</p>
                  </div>
                </button>
                <p className="mt-4 text-gray-600 text-xs leading-4">Click on the button, assign your profile and get
                  verified!</p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
