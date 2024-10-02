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
                <h2 className="headingTitle font-black font-h2-title text-3xl text-nbgreendark leading-tight tracking-tight">Improvisational Scene Structure</h2>
                <div className="flex-auto bg-nbgreenmain h-1"></div>
              </div>
              <div className="categories justify-center flex-start gap-2 inline-flex items-center w-full">
              <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">#screenwriting</h3>
              <div className="flex-auto bg-nbgreenmain h-0.5 max-w-2"></div>
              <h3 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">#story structure</h3>
              </div>
            </div>
            <div className="creatorInfo flex justify-between px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10">
              <div className="snippetAuthors">
              <div className="snippetAuthor relative">
                <img className="avatar w-20 h-20 rounded-full" src="https://scontent.fbud8-1.fna.fbcdn.net/v/t39.30808-6/461030322_2306234669728302_5885443326522953977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YuqrXw-nSq4Q7kNvgGoIKkX&_nc_ht=scontent.fbud8-1.fna&_nc_gid=AsP1gRkaXVcYF_ZBSEhMiX1&oh=00_AYDrNUMrQyQjSoFT0BmoCIOSRyLHcSqg-U0ljDWc4VgqbA&oe=67034E1B" alt=""></img>
                <span className="flag bottom-0 left-17 absolute w-6 h-6 border-2 border-nbwhitemain rounded-full display:inline-block overflow-hidden">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWqznwaynEDGBlgCMkbib4Rm1Wsgk0j_BtA&s" alt="" className="w-full h-5 object-fill"/>
                </span>
                </div>
                <h4 className="font-bold font-button  text-base text-nbgreendark tracking-tighter">I. M. Bizzer</h4>
              </div>
              <div className="ogAuthor">
                
              </div>
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
