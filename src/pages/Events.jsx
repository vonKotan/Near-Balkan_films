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
        <div className="flex flex-col items-start gap-2.5 px-2 pt-2.5 pb-4 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain underline underline-offset-4 leading-3 decoration-2 decoration-nbgreylight decoration-wavy">last year</h1>
        </div>
      </section>
      <EventCard
        event={events[0]}
      />
    </>
  );
};

export default Events;
