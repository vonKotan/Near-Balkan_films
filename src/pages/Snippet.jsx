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
              <div className="title flex items-center gap-x-4">
                <div className="flex-auto bg-nbgreenmain h-2"></div>
                <h3 className="headingTitle font-black font-h2-title text-2xl text-nbgreendark tracking-tight">Improvisational Scene Structure</h3>
                <div className="flex-auto bg-nbgreenmain h-2"></div>
              </div>
              <div className="categories justify-center flex-start gap-2">
              <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">#screenwriting</h4>
              <div className="flex-auto bg-nbgreenmain h-0.5"></div>
              <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">#story structure</h4>
              </div>
            </div>
            <div className="creatorInfo">
              <div className="snippetAuthor relative">
                <img className="avatar w-20 h-20 rounded-full" src="" alt=""></img>
                <span className="flag bottom-0 left-17 absolute w-6 h-6 border-2 border-nbwhitemain rounded-full display:inline-block overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/2560px-Flag_of_Hungary.svg.png" alt="" className="inline-block w-6 h-6"/>
                </span>
              </div>
              <div className="ogAuthor"> </div>
            </div>
            <div className="problemSolution">
              <div className="problem"></div>
              <div className="explanationArrow">
                <div className="explanation">
                
                </div>
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
