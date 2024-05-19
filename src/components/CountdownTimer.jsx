import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';

// Router

// Components
import { useTranslation } from 'react-i18next';

export const CountdownTimer = ({ targetDate, haveWon }) => {
    
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice haveWon={haveWon} />;
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

const ExpiredNotice = ({ haveWon }) => {
    const { t, i18n } = useTranslation();

    if (haveWon) {
        return (
                <span className="inline order-first sm:order-none bg-nbgreenmain hover:bg-nbpurplemain px-2 pt-px rounded-md max-w-fit font-h3-subtitle font-semibold text-base text-nbgreylight sm:text-sm leading-normal cursor-pointer select-none align-center">mindent nyert</span>
        );
    } else {
        return (
                <span className="inline order-first sm:order-none bg-nbredmain hover:bg-red-400 px-2 pt-px rounded-md max-w-fit font-h3-subtitle font-semibold text-base text-nbgreylight sm:text-sm leading-normal cursor-pointer select-none align-center">vesztett</span>
        );
    }
};

// Egyeb elemek a versenyhez kotve
export const CurrentRace = ({ targetDate }) => {
    const { t, i18n } = useTranslation();
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (
            <span className="inline-flex flex-row items-center gap-2">
                <div class="bg-nbredmain opacity-75 rounded-full w-1.5 h-1.5"></div>
                <h4 className="font-bold font-h3-subtitle text-base text-nbredmain tracking-tighter">2024 március-április</h4>
            </span>
        );
    } else {
        return (
            <span className="inline-flex flex-row items-center gap-2">
                <div class="bg-nbgreenmain opacity-75 rounded-full w-1 h-1 animate-ping"></div>
                <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">2024 május-június</h4>
            </span>
        );
    }
};

export const RaceState = ({ targetDate }) => {
    const { t, i18n } = useTranslation();
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (<h4 className="sm:block hidden font-bold font-h4-lead text-base text-nbredmain uppercase tracking-tighter">korábbi verseny</h4>);
    } else {
        return (<h4 className="sm:block hidden font-bold font-h4-lead text-base text-nbgreenmain uppercase tracking-tighter animate-pulse">versenyben</h4>);
    }
};

export default CountdownTimer;