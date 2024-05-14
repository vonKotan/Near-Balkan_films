import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import EventCard from '../components/EventCard';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { documents: events } = useFetchData('events');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain leading-3">last year</h1>
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
      <EventCard
        // images={events[0].images}
      />
    </>
  );
};

export default Events;
