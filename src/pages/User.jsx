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
      <div className="gap-8 grid md:grid-cols-3 grid-flow-row md:grid-flow-col min-w-full">
        <div className="columnProfile row-span-3 flex flex-col flex-wrap justify-center items-center col-span-auto bg-nbgreylight rounded-lg min-w-full min-h-fit p-6">
          <img
            className='rounded-full relative inline-block h-28 w-28 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/1bc8/ebd2/0199f30d095605936c7e043284a05446?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJFWd2ddQwIDGTfW7ksjfw~1OVSpJicJLX2Ik55bGA4WQN4cCfklDVud-t0iFXIAqatyi-0ZQMlFfkntB7fvpLnRweKCsAjWIWxy86W~VSbr~Sx-hzo9G7VIlutoYw94hesx7o0yOZeB7uHoKEZi8y3RanFzcaW562KazzwMmNqHHhyoHGRhLCVhWRqIDUG7PH6OyZCjDOLMtDwkUG1eQoimUElPdiJLL4fR-E1N8M-zewuTY3rSuv1A1JPNkDc-s~zIHBKfS~MXMUVWQlNyVoluM8UB5GNp~PRjsA1y9Ib-4JEbIQ2kjGr3Bxh3liqN4jn45uDB507Ww-uvQ7Rujw__"
            alt=""
          />
          <div className="userName p-6 font-black font-h3-title text-2xl text-nbgreydark leading-tight tracking-tight transition-colors decoration-4 decoration-nbgreenmain active:decoration-nbgreenlight -mt-2 max-w-fit">
            Username here
          </div>
          <div className="userInfo grid justify-items-center text-gray-600 font-h3-subtitle text-sm">
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
              Contact
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
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Movies
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Events
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    Method-Cards
                  </p>
                </div>
              </button>
            </div>
            <div class="w-full h-px bg-nbgreydark mt-3 mb-3"></div>
            <div className="subCategories grid grid-cols-4 justify-items-center">
            <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Produced
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Financed
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
              >
                <div class="flex items-start gap-2 -mb-0.5">
                  <p class="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreydark text-sm leading-5 tracking-tight">
                    Favorites
                  </p>
                </div>
              </button>
              <button
                href="#"
                class="bg-gray-50 hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain"
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

        <div className="columnMovieCards row-span-2 col-span-2 rounded-lg min-w-full min-h-fit">
          <div className="cards container grid grid-cols-3 xl:grid-cols-4 justify-items-strech gap-6">
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/ffac/cad2/0dcf39ceea8444aa712a00b5aa740fc2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDYywlg8Fb5yZDye9pTiQIS5WJW5aNs-8GYk7manWyG1qCmvhAjni0CC1QdEOGB19W9z51jWoe4KM~RbMgAo4qT1MZ58ZCw4zsIABhwgYykMK6a405TkdzDQEZXx~6Ngm-RDW4j~l3pW0u96FbQglIpTYK8lFIZgHnECtZsBy3l8uw17wEad9W1B6NJ1T6yCbcB7SQDyUtQsNu45iTFtprZHRS72hEYCNrL9jJPK7TulhGZlkl2TLCplGP5MpcCrW2fWMRS~rP6UkjsJkOphYRUkkBqIJV9wTQ5RJLbbInnEuYCbxbATyf6lAP9iHTCzURhDtKD7iyYrArEYfplGCw__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">producer</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center hover:bg-nbgreydark-200"'
            src="https://s3-alpha-sig.figma.com/img/8fd3/1a83/87fb2006f37ef5075dd5d12542428f57?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9ZCAzcav3SqM~wcUgzjCBFO~0y7WWajhcdKGyxysSjy6rjZOKwYAGhoZhPQ6p7i9mf2stYTc0lh7WbTTUs4jN8PWQcrkvzs8D4zBQYQVX6W1BnbVoeuVi7ISqequ~LfsH9ubZUSiM~ioHLR7KuIXXfPmO7hGzaKt9epX1FALr7ylGAPW-JpFsmDKnyNvu2Ch0h6Buh3CknYc73yUI61Q0QFsJUtPvO7QFMtBgZ6TXupJdE6~lishWmpFp342ImhKLOsDT-6yfOWMiCnPjmEreAVYM8bVu8zEtfowAootx4zrBkhfMIqCGvn8X0G9gAUbhKoZ9-s~~H3TpwwfpvT3w__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">editor</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/0067/d69d/91ca7f318b39edd4b2ba1ad72a83c33a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qj4TGbHnRw-dLcIDUl6cjpAfZF87kQn7KVI8u-o3BzUrvRPDYp0MeInYMsJzJg2IQCYbXZ0Pd3is3i7IAkSbNZagi63y1A2K8j1Ev8iY6PjimDH1Wf7PZw~WDYS44mksenUPH9uialkTjaZpaaiCbKo7fr~FQeMtTo39JGQPFQ0W14jmjq6njaUcau3hjrIKYUvRmL~r76L5cV8tBP8l3zLXaC-CYEeue9XV~nvuDp1oa06-S9QanpQriuLtFQc3SbCHI3xoDH8eFO4UBdChyJdEMyMn17bW4spY7gu0y8INGKPuUwCf4prSQNHiabHbNjFHs-PAcdlfStqL6DmlXQ__"
            alt=""
          />
                    <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">director</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/4771/a9ca/203bf8cbaf5263fcc29cd7e8280f53d0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHl~5R-tkiiiFjRrfplm7W3Nlz99fnR~9srVLsJwM21F6Si-vGD1RKMSg3NO--6ilaz45k0pA5c~z9GIHWV0JvmZTF56~g-ROe~uyj6E8O-W0qn9guBbpOhK4q9mVKooV0P2DTqtoJUMgWapVV5~WEd3JNrptyZ1YluNkIsjVHko~y5f6-lxGrUVDNYee2LxhO8s8a02L9iUk0HT4oyVG3I0kXLDdfdcHJgXY9h5IIqMBnSqNIlVcZs-ZZ7gNDrpbDvMVFOATuHdBGiBS2i~bUmSlPO~-xtnljfeQedOGCbPOCHOZufOa3sW12CEF9C62wTMQwxZSu14ecPjtI~46Q__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">director</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/4771/a9ca/203bf8cbaf5263fcc29cd7e8280f53d0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHl~5R-tkiiiFjRrfplm7W3Nlz99fnR~9srVLsJwM21F6Si-vGD1RKMSg3NO--6ilaz45k0pA5c~z9GIHWV0JvmZTF56~g-ROe~uyj6E8O-W0qn9guBbpOhK4q9mVKooV0P2DTqtoJUMgWapVV5~WEd3JNrptyZ1YluNkIsjVHko~y5f6-lxGrUVDNYee2LxhO8s8a02L9iUk0HT4oyVG3I0kXLDdfdcHJgXY9h5IIqMBnSqNIlVcZs-ZZ7gNDrpbDvMVFOATuHdBGiBS2i~bUmSlPO~-xtnljfeQedOGCbPOCHOZufOa3sW12CEF9C62wTMQwxZSu14ecPjtI~46Q__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">director</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/ffac/cad2/0dcf39ceea8444aa712a00b5aa740fc2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDYywlg8Fb5yZDye9pTiQIS5WJW5aNs-8GYk7manWyG1qCmvhAjni0CC1QdEOGB19W9z51jWoe4KM~RbMgAo4qT1MZ58ZCw4zsIABhwgYykMK6a405TkdzDQEZXx~6Ngm-RDW4j~l3pW0u96FbQglIpTYK8lFIZgHnECtZsBy3l8uw17wEad9W1B6NJ1T6yCbcB7SQDyUtQsNu45iTFtprZHRS72hEYCNrL9jJPK7TulhGZlkl2TLCplGP5MpcCrW2fWMRS~rP6UkjsJkOphYRUkkBqIJV9wTQ5RJLbbInnEuYCbxbATyf6lAP9iHTCzURhDtKD7iyYrArEYfplGCw__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">cameraman</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/8fd3/1a83/87fb2006f37ef5075dd5d12542428f57?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9ZCAzcav3SqM~wcUgzjCBFO~0y7WWajhcdKGyxysSjy6rjZOKwYAGhoZhPQ6p7i9mf2stYTc0lh7WbTTUs4jN8PWQcrkvzs8D4zBQYQVX6W1BnbVoeuVi7ISqequ~LfsH9ubZUSiM~ioHLR7KuIXXfPmO7hGzaKt9epX1FALr7ylGAPW-JpFsmDKnyNvu2Ch0h6Buh3CknYc73yUI61Q0QFsJUtPvO7QFMtBgZ6TXupJdE6~lishWmpFp342ImhKLOsDT-6yfOWMiCnPjmEreAVYM8bVu8zEtfowAootx4zrBkhfMIqCGvn8X0G9gAUbhKoZ9-s~~H3TpwwfpvT3w__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">actor</span>
            </div>
            <div class="poster relative max-w-48 max-h-60 hover:scale-110 delay-100 duration-100 ease-out hover:opacity-60">
            <img
            className='rounded-lg relative inline-block h-60 w-48 object-cover object-center"'
            src="https://s3-alpha-sig.figma.com/img/0067/d69d/91ca7f318b39edd4b2ba1ad72a83c33a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qj4TGbHnRw-dLcIDUl6cjpAfZF87kQn7KVI8u-o3BzUrvRPDYp0MeInYMsJzJg2IQCYbXZ0Pd3is3i7IAkSbNZagi63y1A2K8j1Ev8iY6PjimDH1Wf7PZw~WDYS44mksenUPH9uialkTjaZpaaiCbKo7fr~FQeMtTo39JGQPFQ0W14jmjq6njaUcau3hjrIKYUvRmL~r76L5cV8tBP8l3zLXaC-CYEeue9XV~nvuDp1oa06-S9QanpQriuLtFQc3SbCHI3xoDH8eFO4UBdChyJdEMyMn17bW4spY7gu0y8INGKPuUwCf4prSQNHiabHbNjFHs-PAcdlfStqL6DmlXQ__"
            alt=""
          />
          <div className="movieTitle absolute opacity-0 hover:opacity-100 delay-100 ease-out duration-100 text-white text-base font-bold font-h3-subtitle top-1/2 left-1/2 -translate-y-1/2">movie title</div>
              <span class="bg-nbgreymain text-sm leading-5 tracking-tight font- text-nbgreydark text-center p-0.5 rounded-full px-2 absolute -translate-y-1/2 translate-x-4 left-auto top-0 right-0">set designer</span>
            </div>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default User;
