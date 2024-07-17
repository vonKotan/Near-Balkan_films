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
import { CountdownTimer, CurrentRace, RaceState, FundingButtons } from '../components/CountdownTimer';
import { DemoTitle } from '../components/DemoTitle';
import { GraphFieldRace } from '../components/GraphFieldRace';
import { UserIcon, UserIconList } from '../components/UserIcon';

// Radix Imports
import {
  Item,
} from '@radix-ui/react-navigation-menu';

const User = ({ user, targetDate, haveWon }) => {

  return (
    <>
      <div className='gap-4 grid grid-cols-3 min-w-full'>
        <div className="flex justify-center items-center col-span-auto bg-nbgreylight rounded-lg min-w-full min-h-fit">
          <img className='rounded-full' src="https://s3-alpha-sig.figma.com/img/1bc8/ebd2/0199f30d095605936c7e043284a05446?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJFWd2ddQwIDGTfW7ksjfw~1OVSpJicJLX2Ik55bGA4WQN4cCfklDVud-t0iFXIAqatyi-0ZQMlFfkntB7fvpLnRweKCsAjWIWxy86W~VSbr~Sx-hzo9G7VIlutoYw94hesx7o0yOZeB7uHoKEZi8y3RanFzcaW562KazzwMmNqHHhyoHGRhLCVhWRqIDUG7PH6OyZCjDOLMtDwkUG1eQoimUElPdiJLL4fR-E1N8M-zewuTY3rSuv1A1JPNkDc-s~zIHBKfS~MXMUVWQlNyVoluM8UB5GNp~PRjsA1y9Ib-4JEbIQ2kjGr3Bxh3liqN4jn45uDB507Ww-uvQ7Rujw__" alt="" />
        </div>
        <div className="col-span-auto bg-nbgreylight rounded-lg min-w-full min-h-fit"></div>
        <div className="col-span-auto bg-nbgreylight rounded-lg min-w-full min-h-fit"></div>
      </div>
    </>
  );
};

export default User;
