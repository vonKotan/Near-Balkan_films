import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CountdownTimer } from './CountdownTimer';


export const GraphFieldRace = ({ movie, targetDate, haveWon }) => {
    const { t, i18n } = useTranslation();
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (
            <div
                id="graphField" className="flex flex-col justify-center bg-gray-50 active:bg-slate-200 rounded-2xl text-start transition-colors duration-1000 delay-1000 group/graphfield ring-1 ring-gray-900/5 ring-inset">
                <div className="flex flex-col gap-2 px-6 py-5">
                    <div class="flex flex-col gap-2 sm:gap-2 group/island">
                        <div className="flex sm:flex-row flex-col justify-between gap-2 group/labels peer/labels">
                            <div class="mx-0 leading-none pointer-events-none select-none">
                                {haveWon && (
                                    <>
                                        <span className="font-bold text-lg text-nbgreenmain sm:text-base underline transition-all decoration-4">{movie.collected || 0}<span className="font-thin">HUF</span></span>
                                        <span className="inline">
                                            <span className="font-bold text-lg text-nbpurplemain sm:text-base">+</span>
                                            <span className="font-bold text-lg text-nbpurplemain sm:text-base underline transition-all decoration-4">230000<span className="font-thin">HUF</span></span>
                                        </span>
                                        <span className="font-bold text-lg text-nbgreymain sm:text-base"> / </span>
                                        <span className="group-active/island:text-nbredmain group-hover/labels:hidden font-bold text-lg text-nbgreenlight sm:text-base transition-all">{movie.moneygoal || 0}<span className="font-thin">HUF</span></span>
                                        <span className="group-hover/labels:inline hidden font-bold text-lg text-nborangemain sm:text-base transition-all">min {movie.moneyMin || ((movie.moneygoal * 0.060) || 0)}<span className="font-thin">HUF</span></span>
                                    </>
                                )}
                                {!haveWon && (
                                    <>
                                        <span className="font-bold text-lg text-nbredmain sm:text-base line-through transition-all decoration-2">{movie.collected || 0}<span className="font-thin">HUF</span></span>
                                        <span className="font-bold text-lg text-nbgreymain sm:text-base"> / </span>
                                        <span className="group-active/island:text-nbredmain group-hover/labels:hidden font-bold text-lg text-nbredlight sm:text-base transition-all">{movie.moneygoal || 0}<span className="font-thin">HUF</span></span>
                                        <span className="group-hover/labels:inline hidden font-bold text-lg text-nborangemain sm:text-base transition-all">min {movie.moneyMin || ((movie.moneygoal * 0.060) || 0)}<span className="font-thin">HUF</span></span>
                                    </>
                                )}
                            </div>
                            {haveWon && (
                                <CountdownTimer haveWon={true} targetDate={targetDate} />
                            )}
                            {!haveWon && (
                                <CountdownTimer haveWon={false} targetDate={targetDate} />
                            )}
                        </div>
                        {haveWon && (
                            <div className="relative flex items-center bg-nbgreylight rounded-full w-full h-5 overflow-clip group/slider">
                                <Link
                                    key={movie.id}
                                    to={`/details/${movie.id}`}
                                    className={`bg-nbgreenmain disabled:bg-nbgreenlight rounded-full min-h-fit transition-all select-none group/button h-5 active:bg-nbgreenlight hover:bg-nbgreydark group-hover/slider:w-full group-active/slider:w-full delay-300 duration-700 z-50 w-[${Math.floor(Math.floor(movie.collected || 0) / Math.floor(movie.moneygoal || 0) * 100)}%]`}>
                                    <div className="group-hover/slider:flex justify-center items-start gap-1 hidden mx-3 transition-all duration-700 delay-300">
                                        <svg
                                            className="group-disabled/button:fill-nbgreymiddark opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 h-3 translate-y-1 fill-nbgreylight"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                            <path
                                                d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                                        </svg>
                                        <p
                                            className="group-disabled/button:text-nbgreymiddark opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 min-w-max font-button font-semibold text-nbgreylight text-xs leading-5 tracking-tight">
                                            mi lett velük?</p>
                                    </div>
                                </Link>
                                {movie.moneyMin ? (
                                    <div className={`transition-all delay-1000 duration-1000 absolute h-5 left-0 bg-nborangemain rounded-full opacity-100 flex flex-row justify-end pe-2 z-10 w-[60%]`}>
                                        <h6 className="text-nbgreylight text-xs leading-normal select-none">min</h6>
                                    </div>
                                ) : null}
                                <div className={`transition-all delay-1000 duration-1000 absolute h-5 right-0 bg-nbpurplemain rounded-full opacity-100 flex flex-row justify-end px-2 w-min-fit z-50`}>
                                    <h6 className="text-nbgreylight text-xs leading-normal select-none">+123%</h6>
                                </div>
                                <div className={`transition-all delay-1000 duration-1000 absolute h-5 right-0 bg-nbpurplemain rounded-full opacity-50 flex flex-row justify-end pe-2 w-full`}></div>
                            </div>
                        )}
                        {!haveWon && (
                            <div className="relative flex items-center bg-nbgreylight rounded-full w-full h-5 overflow-clip group/slider">
                                <Link
                                    key={movie.id}
                                    to={`/details/${movie.id}`}
                                    className={`line-pattern bg-nbredlight disabled:bg-nbgreenlight rounded-full min-h-fit transition-all select-none group/button h-5 group-active/slider:bg-nbredlight group-hover/slider:bg-nbgreydark group-hover/slider:w-full group-active/slider:w-full delay-300 duration-700 z-50 w-[${Math.floor(Math.floor(movie.collected || 0) / Math.floor(movie.moneygoal || 0) * 100)}%]`}>
                                    <div className="group-hover/slider:flex justify-center items-start gap-1 hidden mx-3 transition-all duration-700 delay-300">
                                        <svg
                                            className="group-disabled/button:fill-nbgreymiddark opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 h-3 translate-y-1 fill-nbgreylight"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                            <path
                                                d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                                        </svg>
                                        <p
                                            className="group-disabled/button:text-nbgreymiddark opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 min-w-max font-button font-semibold text-nbgreylight text-xs leading-5 tracking-tight">
                                            mi lett velük?</p>
                                    </div>
                                </Link>
                                {movie.moneyMin ? (
                                    <div className={`transition-all delay-1000 duration-1000 absolute h-5 left-0 bg-nborangemain rounded-full opacity-100 flex flex-row justify-end pe-2 w-[60%]`}>
                                        <h6 className="text-nbgreylight text-xs leading-normal select-none">min</h6>
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                id="graphField" className="flex flex-col justify-center bg-gray-50 active:bg-slate-200 mt-3 sm:mt-2 rounded-2xl text-start transition-colors duration-1000 delay-1000 group/graphfield ring-1 ring-gray-900/5 ring-inset">
                <div className="flex flex-col gap-2 px-6 py-5">
                    <div class="flex flex-col gap-2 sm:gap-2 group/island">
                        <div className="flex sm:flex-row flex-col justify-between gap-2 group/labels peer/labels">
                            <div class="mx-0 leading-none pointer-events-none select-none">
                                <span className="font-bold text-lg text-nbgreenmain sm:text-base transition-all">{movie.collected || 0}<span className="font-thin">HUF</span></span>
                                <span className="font-bold text-lg text-nbgreymain sm:text-base"> / </span>
                                <span className="group-active/island:text-nbredmain group-hover/labels:hidden font-bold text-lg text-nbgreenlight sm:text-base transition-all">{movie.moneygoal || 0}<span className="font-thin">HUF</span></span>
                                <span className="group-hover/labels:inline hidden font-bold text-lg text-nborangemain sm:text-base transition-all">min {movie.moneyMin || ((movie.moneygoal * 0.060) || 0)}<span className="font-thin">HUF</span></span>
                            </div>
                            <CountdownTimer haveWon={0} targetDate={targetDate} />
                        </div>
                        <div className="relative flex items-center bg-nbgreylight rounded-full w-full h-5 overflow-clip group/slider">
                            <Link
                                key={movie.id}
                                to={`/details/${movie.id}`}
                                className={`bg-nbgreenmain hover:bg-nbgreydark active:bg-nbgreenlight disabled:bg-nbgreenlight rounded-full min-h-fit transition-all select-none group/button h-5 group-active/graphfield:bg-nbgreenlight group-active/graphfield:w-full hover:w-full delay-300 duration-700 z-50 group-hover/slider:w-full w-[${Math.floor(Math.floor(movie.collected || 0) / Math.floor(movie.moneygoal || 0) * 100)}%]`}>
                                <div className="group-hover/slider:flex justify-center items-start gap-1 hidden mx-3 transition-all duration-700 delay-300">
                                    <svg
                                        className="group-active/button:fill-nbgreenlight group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreylight"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                        <path
                                            d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                                    </svg>
                                    <p
                                        className="group-active/button:text-nbgreenlight group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-xs leading-5 tracking-tight">
                                        mellettük versenyzem!</p>
                                </div>
                            </Link>
                            {movie.moneyMin ? (
                                <div className={`transition-all delay-1000 duration-1000 absolute h-5 left-0 bg-nborangemain rounded-full opacity-0 sm:group-hover/island:opacity-100 flex flex-row justify-end pe-2 w-[60%]`}>
                                    <h6 className="text-nbgreylight text-xs leading-normal select-none">min</h6>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default GraphFieldRace;