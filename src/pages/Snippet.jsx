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
      <div className= "flex flex-row flex-wrap justify-center items-center" >
        <div className="container lg:flex items-stretch bg-nbgreylight mx-auto lg:mx-0 px-5 sm:py-2 pt-2 pb-3 rounded-lg w-full min-w-fit lg:max-w-5xl">
          <div className="base lg:flex-auto px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10"></div>
        </div>
      </div>
    </>
  );
};

export default User;
