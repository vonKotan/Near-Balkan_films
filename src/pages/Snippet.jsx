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
      
    </>
  );
};

export default User;
