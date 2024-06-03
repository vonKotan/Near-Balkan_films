import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';

// Router
import { Link } from 'react-router-dom';

// Components
import { useTranslation } from 'react-i18next';
import { GraphFieldRace } from './GraphFieldRace';

export const CountdownTimer = ({ targetDate, haveWon, movie }) => {

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice haveWon={haveWon} movie={movie} />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                isDanger={days <= 3}
            />
        );
    }
};

const DateTimeDisplay = ({ value, type }) => {
    return (
        <span>{value}{type}</span>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds, isDanger }) => {
    const { t, i18n } = useTranslation();

    return (
        <h3 className={`inline order-first sm:order-none font-h3-subtitle px-2 pt-px rounded-md max-w-fit font-semibold text-nbgreylight text-base sm:text-sm leading-normal cursor-pointer select-none align-center ${isDanger ? 'bg-nbredmain hover:bg-red-400' : 'bg-nborangemain hover:opacity-70'}`}>
            <DateTimeDisplay value={days} type={'d'} />
            {" "}
            <DateTimeDisplay value={hours} type={'h'} isDanger={false} />
            {" "}
            <DateTimeDisplay value={minutes} type={'m'} isDanger={false} />
            {" "}
            <DateTimeDisplay value={seconds} type={'s'} isDanger={false} />
        </h3>
    );
};

const ExpiredNotice = ({ haveWon, movie }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    if (haveWon && ((Math.floor(Math.floor(movie.collected || 0) / Math.floor(movie.moneygoal || 0) * 100)) + (Math.floor(Math.floor(movie.moneyRest || 0) / Math.floor(movie.moneygoal || 0) * 100)) >= (Math.floor(Math.floor(movie.moneyMin || ((movie.moneygoal * 0.60) || 0)) / Math.floor(movie.moneygoal || 0) * 100)))) {
        return (
            <Link to="/" className="inline order-first sm:order-none bg-nbgreenmain hover:bg-nbpurplemain px-2 pt-px rounded-md max-w-fit font-h3-subtitle font-semibold text-nbgreylight text-sm sm:text-sm leading-normal cursor-pointer select-none align-center">{t("card.won_all")}</Link>
        );
    } if (haveWon && ((Math.floor(Math.floor(movie.collected || 0) / Math.floor(movie.moneygoal || 0) * 100)) + (Math.floor(Math.floor(movie.moneyRest || 0) / Math.floor(movie.moneygoal || 0) * 100)) < (Math.floor(Math.floor(movie.moneyMin || ((movie.moneygoal * 0.60) || 0)) / Math.floor(movie.moneygoal || 0) * 100)))) {
        return (
            <Link to="/" className="inline order-first sm:order-none bg-nbredmain hover:bg-nbpurplelight px-2 pt-px rounded-md max-w-fit font-h3-subtitle font-semibold text-nbgreylight text-sm sm:text-sm leading-normal cursor-pointer select-none align-center">{t("card.lost_not_min")}</Link>
        );
    }
    else {
        return (
            <Link to="/" className="inline order-first sm:order-none bg-nbredmain hover:bg-red-400 px-2 pt-px rounded-md max-w-fit font-h3-subtitle font-semibold text-nbgreylight text-sm sm:text-sm leading-normal cursor-pointer select-none align-center">{t("card.lost")}</Link>
        );
    }
};

// Egyeb elemek a versenyhez kotve
export const CurrentRace = ({ targetDate, detailPage, movie }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const formatterHU = new Intl.DateTimeFormat("hu-HU", {
        year: "numeric",
        // month: "long",
        month: "2-digit",
        day: "2-digit"
    });

    const formatterEN = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
        // timeZone: "Europe/Budapest",
        // timeZoneName: "short"
    });

    if (days + hours + minutes + seconds <= 0) {
        return (
            <Link to="/" className="inline-flex flex-row items-center gap-2">
                <div class={`${detailPage ? "bg-nbgreylight" : "bg-nbredmain"} opacity-75 rounded-full w-1.5 h-1.5`}></div>
                <h4 className={`font-bold font-h3-subtitle text-base ${detailPage ? "text-nbgreylight" : "text-nbredmain"} tracking-tighter`}>{detailPage ? (i18n.language === 'en' && (formatterEN.format(movie?.createdAt) || 'unknown time') || (i18n.language === 'hu' && (formatterHU.format(movie?.createdAt).replace(' ', '').replace(' ', '') || 'unknown time'))) : (t("card.date_past_competition"))}</h4>
            </Link>
        );
    } else {
        return (
            <Link to="/" className="inline-flex flex-row items-center gap-2">
                <div class="bg-nbgreenmain opacity-75 rounded-full w-1 h-1 animate-ping"></div>
                <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">{detailPage ? (i18n.language === 'en' && (formatterEN.format(movie?.createdAt) || 'unknown time') || (i18n.language === 'hu' && (formatterHU.format(movie?.createdAt).replace(' ', '').replace(' ', '') || 'unknown time'))) : (t("card.date_current_competition"))}</h4>
            </Link>
        );
    }
};

export const RaceState = ({ targetDate, detailPage }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (<Link to="/" className={`sm:block hidden font-bold font-h4-lead text-base ${detailPage ? "text-nbgreylight" : "text-nbredmain"} uppercase tracking-tighter`}>{t("card.previous_competition")}</Link>);
    } else {
        return (<Link to="/" className="sm:block hidden font-bold font-h4-lead text-base text-nbgreenmain uppercase tracking-tighter animate-pulse">{t("card.in_competition")}</Link>);
    }
};

export const FundingButtons = ({ targetDate, movie, user, haveWon }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (
            <div class="flex flex-col justify-evenly md:justify-start gap-4 md:gap-0 md:grid grid-cols-1 md:grid-cols-9 grid-rows-3 md:grid-rows-1">
                <div className="z-20 md:col-span-7 md:col-start-1 md:row-span-1 md:row-start-1">
                    <GraphFieldRace movie={movie} haveWon={haveWon} targetDate={targetDate} detailPage={true} />
                </div>
                <div className="flex flex-row md:flex-col justify-center md:col-span-9 md:col-start-1 md:row-span-1 md:row-start-1 bg-teal-700 rounded-2xl divide-x-2 md:divide-x-none divide-y-none md:divide-y-2 divide-nbgreydark text-start transition-colors duration-1000 delay-1000 overflow-clip group/graphfield ring-1 ring-gray-900/5 ring-inset">
                    <Link to={!user ? ("/login") : ("")} className="md:grid md:grid-cols-9 md:grid-rows-1 bg-nbgreymain opacity-60 p-3 md:p-0 w-full h-full transition cursor-default pointer-events-none group/button line-pattern ring-nbgreylight">
                        <h3 className="flex justify-center items-center md:col-span-2 md:col-start-8 font-h2-title font-semibold text-lg text-nbwhite underline-offset-2 select-none decoration-2">{t("details.back-them")}</h3>
                    </Link>
                    <Link to={!user ? ("/login") : ("")} className="md:grid md:grid-cols-9 md:grid-rows-1 bg-emerald-700 hover:bg-nbredmain active:bg-nbredlight opacity-90 p-3 md:p-0 w-full h-full transition cursor-pointer group/button">
                        <h3 className="group-hover/button:text-nbwhite group-active/button:text-nbgreydark flex justify-center items-center md:col-span-2 md:col-start-8 font-h2-title font-semibold text-lg text-nbgreylight underline-offset-2 hover:underline select-none decoration-2 active:decoration-nbredmain">{t("details.own-them")}</h3>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div class="flex flex-col justify-evenly md:justify-start gap-4 md:gap-0 md:grid grid-cols-1 md:grid-cols-9 grid-rows-3 md:grid-rows-1 md:max-h-[92px]">
                <div className="z-20 md:col-span-7 md:col-start-1 md:row-span-1 md:row-start-1">
                    <GraphFieldRace className="w-full h-full" movie={movie} haveWon={haveWon} targetDate={targetDate} detailPage={true} />
                </div>
                <div className="flex flex-row md:flex-col justify-center md:col-span-9 md:col-start-1 md:row-span-1 md:row-start-1 bg-teal-700 rounded-2xl divide-x-2 md:divide-x-none divide-y-none md:divide-y-2 divide-nbgreydark text-start transition-colors duration-1000 delay-1000 overflow-clip group/graphfield ring-1 ring-gray-900/5 ring-inset">
                    <Link to={!user ? ("/login") : ("")} className="md:grid md:grid-cols-9 md:grid-rows-1 bg-emerald-500 hover:bg-nbgreenmain active:bg-nbgreenlight opacity-90 p-3 md:p-0 w-full h-full max-h-min transition cursor-pointer group/button ring-nbgreylight">
                        <h3 className="group-hover/button:text-nbwhite group-active/button:text-nbgreydark flex justify-center items-center md:col-span-2 md:col-start-8 font-h2-title font-semibold text-lg text-nbwhite underline-offset-2 hover:underline select-none decoration-2 active:decoration-nbgreenmain">{t("details.back-them")}</h3>
                    </Link>
                    <Link to={!user ? ("/login") : ("")} className="md:grid md:grid-cols-9 md:grid-rows-1 bg-emerald-700 hover:bg-nbredmain active:bg-nbredlight opacity-90 p-3 md:p-0 w-full h-full max-h-min transition cursor-pointer group/button">
                        <h3 className="group-hover/button:text-nbwhite group-active/button:text-nbgreydark flex justify-center items-center md:col-span-2 md:col-start-8 font-h2-title font-semibold text-lg text-nbgreymain underline-offset-2 hover:underline select-none decoration-2 active:decoration-nbredmain">{t("details.own-them")}</h3>
                    </Link>
                </div>
            </div>
        );
    }
};

export default CountdownTimer;