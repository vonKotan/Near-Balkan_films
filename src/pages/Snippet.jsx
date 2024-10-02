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

const User = ({ user }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="container lg:flex items-stretch bg-nbgreylight mx-auto lg:mx-0 px-5 sm:py-2 pt-2 pb-3 rounded-lg w-full min-w-fit lg:max-w-5xl">
          <div className="base lg:flex-auto px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10">
            <div className="titleCategories">
              <div className="title justify-center flex-start gap-8 inline-flex items-center w-full">
                <div className="flex-auto bg-nbgreenmain h-1"></div>
                <h2 className="headingTitle font-black font-h2-title text-3xl text-nbgreendark leading-tight tracking-tight">
                  Improvisational Scene Structure
                </h2>
                <div className="flex-auto bg-nbgreenmain h-1"></div>
              </div>
              <div className="categories justify-center flex-start gap-2 inline-flex items-center w-full">
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #screenwriting
                </h3>
                <div className="flex-auto bg-nbgreenmain h-0.5 max-w-2"></div>
                <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">
                  #story structure
                </h3>
              </div>
            </div>
            <div className="creatorInfo flex flex-col md:flex-row lg:flex-row justify-between items-center px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10">
              <div className="snippetAuthors flex items-center my-2">
                <div className="snippetAuthor relative m-2.5">
                  <img
                    className="avatar w-24 h-24 rounded-full"
                    src="https://scontent.fbud8-1.fna.fbcdn.net/v/t39.30808-6/461030322_2306234669728302_5885443326522953977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YuqrXw-nSq4Q7kNvgGoIKkX&_nc_ht=scontent.fbud8-1.fna&_nc_gid=AsP1gRkaXVcYF_ZBSEhMiX1&oh=00_AYDrNUMrQyQjSoFT0BmoCIOSRyLHcSqg-U0ljDWc4VgqbA&oe=67034E1B"
                    alt=""
                  ></img>
                  <span className="flag bottom-0 left-17 absolute w-6 h-6 border-2 border-nbwhitemain rounded-full display:inline-block overflow-hidden">
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
              <div className="originalAuthors flex flex-col justify-start mt-4">
                <div className="authorsTitle">
                  <p className="text-nbgreendark font-bold font-button text-lg leading-4 bg-nbgreenlight rounded-md min-w-fitmt-3 px-3 py-2">
                    Original Authors
                  </p>
                </div>
                <div className="authorNames p-1">
                  <p className="text-nbgreendark leading-4">Nikolay Nikolaev</p>
                  <p className="text-nbgreendark leading-4">Svetlozar Nachev</p>
                </div>
              </div>
            </div>
            <div className="problemSolution">
              <div className="problem"></div>
              <div className="explanationArrow">
                <div className="explanation"></div>
                <div className="arrow"></div>
              </div>
              <div className="solution"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
