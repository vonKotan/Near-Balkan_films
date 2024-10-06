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
import { useTranslation } from "react-i18next";
import { UserIcon, UserIconList } from "../components/UserIcon";

// Radix Imports
import { Item } from "@radix-ui/react-navigation-menu";

// Headless ui
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const User = ({ user }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="lg:flex items-stretch bg-nbgreylight mx-auto lg:mx-0 px-5 sm:py-2 pt-2 pb-3 rounded-3xl w-full min-w-fit lg:max-w-5xl container">
          <div className="lg:flex-auto px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10 base">
            <div className="titleCategories">
              <div className="inline-flex flex-start justify-center items-center gap-8 min-w-full title">
                <div className="flex-auto bg-nbgreenmain h-1"></div>
                <h2 className="font-black font-h2-title text-3xl text-nbgreendark leading-tight tracking-tight headingTitle">
                  Improvisational Scene Structure
                </h2>
                <div className="flex-auto bg-nbgreenmain h-1"></div>
              </div>
              <div className="inline-flex flex-start justify-center items-center gap-2 w-full categories">
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #screenwriting
                </h3>
                <div className="flex-auto bg-nbgreenmain max-w-2 h-0.5"></div>
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #story structure
                </h3>
              </div>
            </div>
            <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10 creatorInfo">
              <div className="flex items-center my-2 snippetAuthors">
                <div className="relative m-2.5 snippetAuthor">
                  <img
                    className="rounded-full w-24 h-24 avatar"
                    src="https://scontent.fbud8-1.fna.fbcdn.net/v/t39.30808-6/461030322_2306234669728302_5885443326522953977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YuqrXw-nSq4Q7kNvgGoIKkX&_nc_ht=scontent.fbud8-1.fna&_nc_gid=AsP1gRkaXVcYF_ZBSEhMiX1&oh=00_AYDrNUMrQyQjSoFT0BmoCIOSRyLHcSqg-U0ljDWc4VgqbA&oe=67034E1B"
                    alt=""
                  ></img>
                  <span className="display:inline-block bottom-0 left-17 absolute border-2 border-nbwhitemain rounded-full w-6 h-6 overflow-hidden flag">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWqznwaynEDGBlgCMkbib4Rm1Wsgk0j_BtA&s"
                      alt=""
                      className="w-full h-5 object-cover"
                    />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold font-button text-2xl text-nbgreendark">
                    I. M. Bizzer
                  </h4>
                  <p className="text-nbgreendark leading-4">Near-Balkan</p>
                </div>
              </div>
              <div className="flex flex-col justify-start mt-4 originalAuthors">
                <div className="authorsTitle">
                  <p className="bg-nbgreenlight px-3 py-2 rounded-md min-w-fit font-bold font-button text-lg text-nbgreendark leading-4">
                    Original Authors
                  </p>
                </div>
                <div className="p-1 authorNames">
                  <p className="text-nbgreendark leading-4">Nikolay Nikolaev</p>
                  <p className="text-nbgreendark leading-4">Svetlozar Nachev</p>
                </div>
              </div>
            </div>
            <div>
              <div className="gap-2 grid bg-nbgreenlight rounded-3xl problemSolution">
                <div className="flex justify-center mx-20 problem">
                  <div className="flex justify-center bg-nbgreylight px-8 py-2 rounded-full min-w-full">
                    <div className="font-a-anchor font-bold text-nbgreydark text-xl">
                      DRAMATIC SITUATION ARE USUALLY FLAT
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 px-4 explanationArrow">
                  <div className="flex-auto bg-nbgreylight h-1 explanation"></div>
                  <div className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                    >
                      <path
                        d="M0.5 5V0L16.5 0V5L8.5 13L0.5 5Z"
                        fill="#E9EEF0"
                      />
                    </svg>
                  </div>
                  <div className="flex-auto bg-nbgreylight h-1 explanation"></div>
                </div>
                <div className="flex justify-center mx-20 problem">
                  <div className="flex justify-center bg-nbgreylight px-8 py-2 rounded-full min-w-full">
                    <div className="font-a-anchor font-bold text-nbgreydark text-xl">
                      WE’VE MADE A DRAMATIC SITUATION IN HALF A MINUTE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="lg:flex items-stretch bg-nbgreylight mx-auto lg:mx-0 px-5 sm:py-2 pt-2 pb-3 rounded-3xl w-full min-w-fit lg:max-w-5xl container">
          <div className="lg:flex-auto px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10 base">
            <div className="titleCategories">
              <div className="inline-flex flex-start justify-center items-center gap-8 w-full title">
                <div className="flex-auto bg-nbgreenmain h-1"></div>
                <h2 className="font-black font-h2-title text-3xl text-nbgreendark leading-tight tracking-tight headingTitle">
                  Improvisational Scene Structure
                </h2>
                <div className="flex-auto bg-nbgreenmain h-1"></div>
              </div>
              <div className="inline-flex flex-start justify-center items-center gap-2 w-full categories">
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #screenwriting
                </h3>
                <div className="flex-auto bg-nbgreenmain max-w-2 h-0.5"></div>
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #story structure
                </h3>
              </div>
            </div>
            <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10 creatorInfo">
              <div className="flex items-center my-2 snippetAuthors">
                <div className="relative m-2.5 snippetAuthor">
                  <img
                    className="rounded-full w-24 h-24 avatar"
                    src="https://scontent.fbud8-1.fna.fbcdn.net/v/t39.30808-6/461030322_2306234669728302_5885443326522953977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YuqrXw-nSq4Q7kNvgGoIKkX&_nc_ht=scontent.fbud8-1.fna&_nc_gid=AsP1gRkaXVcYF_ZBSEhMiX1&oh=00_AYDrNUMrQyQjSoFT0BmoCIOSRyLHcSqg-U0ljDWc4VgqbA&oe=67034E1B"
                    alt=""
                  ></img>
                  <span className="display:inline-block bottom-0 left-17 absolute border-2 border-nbwhitemain rounded-full w-6 h-6 overflow-hidden flag">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWqznwaynEDGBlgCMkbib4Rm1Wsgk0j_BtA&s"
                      alt=""
                      className="w-full h-5 object-cover"
                    />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold font-button text-2xl text-nbgreendark">
                    I. M. Bizzer
                  </h4>
                  <p className="text-nbgreendark leading-4">Near-Balkan</p>
                </div>
              </div>
              <div className="flex flex-col justify-start mt-4 originalAuthors">
                <div className="authorsTitle">
                  <p className="bg-nbgreenlight px-3 py-2 rounded-md min-w-fit font-bold font-button text-lg text-nbgreendark leading-4">
                    Original Authors
                  </p>
                </div>
                <div className="p-1 authorNames">
                  <p className="text-nbgreendark leading-4">Nikolay Nikolaev</p>
                  <p className="text-nbgreendark leading-4">Svetlozar Nachev</p>
                </div>
              </div>
            </div>
            <div>
              <div className="gap-5 grid bg-nbgreenlight rounded-3xl problemSolution">
                <div className="top-5 absolute flex justify-center mx-20 problem">
                  <div className="flex justify-center bg-nbgreylight px-8 py-2 rounded-full min-w-full">
                    <div className="font-a-anchor font-bold text-nbgreydark text-xl">
                      DRAMATIC SITUATION ARE USUALLY FLAT
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center px-16">
                  <div className="flex flex-col mx-28 explanationArrow">
                    <div className="gap-5 grid descriptionSpace1">
                      <div className="bg-nbgreylight rounded-xl one">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              1.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            Take three characters in a situation, two standing
                            in, one outside for now.
                          </div>
                        </div>
                      </div>
                      <div className="bg-nbgreylight rounded-xl two">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              2.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            The first character should start any kind of
                            activity setting the scene/location/act.
                          </div>
                        </div>
                      </div>
                      <div className="bg-nbgreylight rounded-xl three">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              3.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            The second character should then interact with the
                            first setting the relationship between the two of
                            them.
                          </div>
                        </div>
                      </div>
                      <div className="bg-nbgreylight rounded-xl four">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              4.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            Then again the first character should create a
                            problem (something physically manifested, best if
                            climactic).
                          </div>
                        </div>
                      </div>
                      <div className="bg-nbgreylight rounded-xl five">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              5.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            The second character should react to the first’s
                            problem and should now make it bigger, that’s ought
                            to be resolved immediately (with ticking clocks and
                            pointing guns).
                          </div>
                        </div>
                      </div>
                      <div className="bg-nbgreylight rounded-xl six">
                        <div className="flex flex-row space-x-2.5 mx-2 my-2 px">
                          <div className="flex justify-center bg-nbgreenlight rounded-full nubercomponent size-6">
                            <div className="font-a-anchor font-bold text-nbgreydark text-sm number">
                              6.
                            </div>
                          </div>
                          <div className="font-bold font-p-paragraph text-nbgreydark text-sm description">
                            Take three characters in a situation, two standing
                            in, one outside for now.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="13"
                        viewBox="0 0 17 13"
                        fill="none"
                      >
                        <path
                          d="M0.5 5.12634V0.208496L16.5 0.208496V5.12634L8.5 12.9949L0.5 5.12634Z"
                          fill="#E9EEF0"
                        />
                      </svg>
                    </div>
                    <div className="border-2 bg-nbgreylight border-dashed min-h-full"></div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                      >
                        <path
                          d="M5.00556 17.7914H0V12.7411L3.47556 9.2608L0 5.78048V0.768066H5.04333L8.5 4.22947L11.9567 0.768066H17V5.78048L13.5244 9.2608L17 12.7411V17.7914H11.9944L8.5 14.2921L5.00556 17.7914Z"
                          fill="#E9EEF0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mx-20 problem">
                  <div className="flex justify-center bg-nbgreylight px-8 py-2 rounded-full min-w-full">
                    <div className="font-a-anchor font-bold text-nbgreydark text-xl">
                      WE’VE MADE A DRAMATIC SITUATION IN HALF A MINUTE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
