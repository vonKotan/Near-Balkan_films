import React from 'react'

// Router
import { Link } from 'react-router-dom';

export const UserIcon = ({ movie }) => {
    return (
        <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className='flex flex-row items-center gap-2 group/button'>
            {movie.userProfile ? (
                <img
                    src={movie.userProfile}
                    alt='user'
                    className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                />
            ) : (
                <button type="button"
                    className="group-hover/button: group-active/button: group-disabled/button: flex justify-center items-end gap-1 bg-nbgreenlight bg-nbgreenmain bg-nbgreydark bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                    <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                    </svg>
                </button>)}
            <h3
                className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight sm:max-w-32 lg:max-w-fit font-bold font-h2-title text-base text-left text-nbgreydark truncate leading-none tracking-tight cursor-pointer prose prose-sm">
                {movie.user}</h3>
        </Link>
    )
}

export const UserIconList = ({ movie }) => {
    return (
        <div class="flex flex-row justify-between items-start sm:items-center gap-4 line-clamp-1 max-h-10">
            <div class="flex flex-row justify-start items-end sm:items-center gap-4 py-1 max-w-52 sm:max-w-md md:max-w-lg overflow-x-auto">
                <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className='flex flex-row items-center gap-2 group/button'>
                    {movie.userProfile ? (
                        <img
                            src={movie.userProfile}
                            alt='user'
                            className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                        />
                    ) : (
                        <button type="button"
                            className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                            <svg
                                className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                            </svg>
                        </button>)}
                    <h3
                        className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-16 sm:max-w-32 lg:max-w-fit font-bold font-h2-title text-base text-left text-nbgreydark truncate leading-none tracking-tight cursor-pointer">
                        {movie.user}</h3>
                </Link>
                <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className='flex flex-row items-center gap-2 group/button'>
                    {movie.userProfile ? (
                        <img
                            src={movie.userProfile}
                            alt='user'
                            className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                        />
                    ) : (
                        <button type="button"
                            className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                            <svg
                                className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                            </svg>
                        </button>)}
                    <h3
                        className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-16 sm:max-w-32 lg:max-w-fit font-bold font-h2-title text-base text-left text-nbgreydark truncate leading-none tracking-tight cursor-pointer">
                        {movie.user}</h3>
                </Link>
                <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className='flex flex-row items-center gap-2 group/button'>
                    {movie.userProfile ? (
                        <img
                            src={movie.userProfile}
                            alt='user'
                            className='lg:block hidden rounded-full w-full max-w-7 h-full max-h-7'
                        />
                    ) : (
                        <button type="button"
                            className="group-hover/button:bg-nbgreenmain group-active/button:bg-nbgreenlight group-disabled/button:bg-nbgreymiddark flex justify-center items-end gap-1 bg-nbgreydark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none peer">
                            <svg
                                className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                            </svg>
                        </button>)}
                    <h3
                        className="group-hover/button:text-nbgreenmain group-active/button:text-nbgreenlight group-disabled/button:text-nbgreylight max-w-16 sm:max-w-32 lg:max-w-fit font-bold font-h2-title text-base text-left text-nbgreydark truncate leading-none tracking-tight cursor-pointer">
                        {movie.user}</h3>
                </Link>
            </div>
            <Link
                key={movie.id}
                to={`/details/${movie.id}`}
                className="sm:block hidden hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight px-2 pt-1 pb-1.5 rounded-xl min-w-fit max-h-fit transition-all sm:-translate-y-0.5 select-none group/button ring-inset focus:outline-none ring-2 focus:ring-nbgreenmain hover:ring-nbgreenmain ring-nbgreymain">
                <div className="flex items-start gap-1 -mb-0.5">
                    <svg
                        className="group-hover/button:fill-nbgreenlight group-focus/button:fill-nbgreenmain group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-3 translate-y-1 fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                        <path
                            d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                    </svg>
                    <p
                        className="group-hover/button:text-nbgreydark group-focus/button:text-nbgreenmain group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreymain text-sm leading-5 tracking-tight">
                        munka</p>
                </div>
            </Link>
        </div>
    )
}

export default UserIcon
