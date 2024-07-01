import React, { useEffect, useState, useMemo } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc, getDoc,
  getDocs,
  where,
  documentId
} from 'firebase/firestore'
import { database } from '../firebase/config';

// Components
import { Card, CardComplex } from '../components/Card';
import {Deck} from '../components/Deck';
import { SectionTitle } from '../components/SectionTitle';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
// import SearchBar, { search, searchBar, moviesFilter, setMoviesFilter } from '../components/SearchBar';

const PastCompetitions = ({ search}) => {
  const currentDate = useMemo(() => new Date(), []);
  const {documents: competitions} = useFetchData('competitions');
  const { t, i18n } = useTranslation();
  const [pasttCompetition, setPastCompetitions] = useState(null);


  return (
    <>
      <SectionTitle title={t("past competitions")} />
      {
      competitions
        .filter(competition => competition.endDate.toDate() <= currentDate)
        .map(competition => (
          <Deck competition={competition} search={search} />
        ))
      }
    </>
  );
};

export default PastCompetitions;


{/* <Transition
          show={isShowing}
          enter="transition duration-[400ms]"
          enterFrom="scale-50 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
      > */}

{/*           <div className="relative flex justify-center items-center w-full max-w-[900px]">
      <div className='-left-12 absolute lg:flex justify-center items-center hidden bg-nbgreylight shadow-sm px-4 py-2 rounded-full w-20 h-20 cursor-pointer ring-8 ring-inset ring-nbgreenmain'>
              <h3 className="font-black font-h3-subtitle text-4xl text-nbgreydark">1</h3>
            </div>
          </div> */}