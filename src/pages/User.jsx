import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Router
import { Link } from "react-router-dom";

// Icons
import { AiFillStar } from "react-icons/ai";

// Components
import Comments from "../components/Comments";
import { database } from "../firebase/config";
import AddFavorite from "../components/AddFavorite";
import { useTranslation } from "react-i18next";
import {
  PosterContainer,
  PosterContainerSmall,
} from "../components/PosterContainer";
import {
  CountdownTimer,
  CurrentRace,
  RaceState,
  FundingButtons,
} from "../components/CountdownTimer";
import { DemoTitle } from "../components/DemoTitle";
import { GraphFieldRace } from "../components/GraphFieldRace";
import { UserIcon, UserIconList } from "../components/UserIcon";

// Radix Imports
import { Item } from "@radix-ui/react-navigation-menu";

const User = ({ user, targetDate, haveWon }) => {
  return (
    <>
      <div className="gap-8 grid md:grid-cols-3 sm:grid-cols-1 sm:grid-flow-row grid-flow-col min-w-full">
        <div className="columnProfile row-span-3 flex flex-col flex-wrap justify-center items-center col-span-auto bg-nbgreylight rounded-lg min-w-full min-h-fit p-6">
          <img
            className='rounded-full relative inline-block h-28 w-28 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/1bc8/ebd2/0199f30d095605936c7e043284a05446?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJFWd2ddQwIDGTfW7ksjfw~1OVSpJicJLX2Ik55bGA4WQN4cCfklDVud-t0iFXIAqatyi-0ZQMlFfkntB7fvpLnRweKCsAjWIWxy86W~VSbr~Sx-hzo9G7VIlutoYw94hesx7o0yOZeB7uHoKEZi8y3RanFzcaW562KazzwMmNqHHhyoHGRhLCVhWRqIDUG7PH6OyZCjDOLMtDwkUG1eQoimUElPdiJLL4fR-E1N8M-zewuTY3rSuv1A1JPNkDc-s~zIHBKfS~MXMUVWQlNyVoluM8UB5GNp~PRjsA1y9Ib-4JEbIQ2kjGr3Bxh3liqN4jn45uDB507Ww-uvQ7Rujw__"
            alt=""
          />
          <div className="userName p-6 font-black font-h3-title text-2xl text-nbgreydark leading-tight tracking-tight transition-colors decoration-4 decoration-nbgreenmain active:decoration-nbgreenlight -mt-2 max-w-fit">
            Username here
          </div>
          <div className="userInfo text-gray-600 font-h3-subtitle text-sm">
            <div className="userStudies">university or smth goes here</div>
            <div className="userLocation">City, Country</div>
          </div>
          <div className="buttons relative flex md:grid md:grid-flow-row lg:flex items-center justify-center gap-6 mt-6">
            <div className="followButton">
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <svg
                    class="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreenmain"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z"></path>
                  </svg>
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Follow
                  </p>
                </div>
              </button>
            </div>
            <div className="messageButton">
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <svg
                    class="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreenmain"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z"></path>
                  </svg>
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Message
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div class="w-full h-px bg-nbgreydark mt-6"></div>

          <div className="about container content-start">
            <div className="titleAbout pt-4 pb-4 font-bold font-h3-subtitle text-base text-nbgreydark tracking-tighter">
              About
            </div>
            <div className="contentAbout text-gray-600 font-h3-subtitle text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              quia cumque sit ut quos soluta porro accusamus debitis dolorum
              culpa illum labore, ducimus quisquam assumenda laudantium nemo?
              Dolore, quaerat provident!
            </div>
          </div>

          <div class="w-full h-px bg-nbgreydark mt-6"></div>

          <div className="links container content-start pb-4">
            <div className="titleLinks pt-4 pb-4 font-bold font-h3-subtitle text-base text-nbgreydark tracking-tighter">
              Links
            </div>
            <div className="contentLinks text-gray-600 font-h3-subtitle text-sm">
              <a href="">Instagram</a> <br />
              <a href="">Facebook</a> <br />
              <a href="">LinkedIn</a> <br />
              <a href="">Behance</a> <br />
            </div>
          </div>
        </div>

        <div className="columnFilter col-span-2 bg-nbgreylight rounded-lg min-w-full min-h-fit">
          <div className="filters container p-6">
            <div className="categories grid grid-cols-3 justify-items-center group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight
            ">
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Movies
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Events
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Method-Cards
                  </p>
                </div>
              </button>
            </div>
            <div class="w-full h-px bg-nbgreydark mt-6 mb-6"></div>
            <div className="subCategories grid grid-cols-4 justify-items-center">
            <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Produced
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Financed
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Favorites
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Recommendations
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="columnMovieCards row-span-2 col-span-2 bg-nbgreylight rounded-lg min-w-full min-h-fit">
          <div className="cards container">
            

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://s3-alpha-sig.figma.com/img/ffac/cad2/0dcf39ceea8444aa712a00b5aa740fc2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDYywlg8Fb5yZDye9pTiQIS5WJW5aNs-8GYk7manWyG1qCmvhAjni0CC1QdEOGB19W9z51jWoe4KM~RbMgAo4qT1MZ58ZCw4zsIABhwgYykMK6a405TkdzDQEZXx~6Ngm-RDW4j~l3pW0u96FbQglIpTYK8lFIZgHnECtZsBy3l8uw17wEad9W1B6NJ1T6yCbcB7SQDyUtQsNu45iTFtprZHRS72hEYCNrL9jJPK7TulhGZlkl2TLCplGP5MpcCrW2fWMRS~rP6UkjsJkOphYRUkkBqIJV9wTQ5RJLbbInnEuYCbxbATyf6lAP9iHTCzURhDtKD7iyYrArEYfplGCw__" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kacifánt</h5>
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default User;
