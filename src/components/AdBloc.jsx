import React, { useEffect, useState } from 'react';

// Router
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const AdBloc = ({ adUrl }) => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
            <div className="md:flex flex-col justify-center items-center gap-6 hidden bg-teal-600 mb-5 p-6 pt-8 pb-10 rounded-lg w-full min-w-fit max-w-screen-xl">
                <h1 className='-mb-2 font-bold font-h2-title text-4xl text-nbwhite leading-2'>{t("adbloc.crowdfunding-streaming")}</h1>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className='flex flex-row flex-wrap items-baseline gap-2'>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.publicity")}</h2>
                        <span className='font-h2-title font-semibold text-2xl text-nbwhite'>+</span>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.networking")}</h2>
                        <span className='font-h2-title font-semibold text-2xl text-nbwhite'>+</span>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.funding")}</h2>
                        <h2 className='bg-nbpurplemain ml-1 px-1 -py-2 font-h2-title font-semibold text-2xl text-nbwhite leading-5'>{t("adbloc.for_filmmakers")}</h2>
                    </div>
                    <div className='flex flex-row flex-wrap items-baseline gap-2'>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.personal_input")}</h2>
                        <span className='font-h2-title font-semibold text-2xl text-nbwhite'>+</span>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.exclusivity")}</h2>
                        <span className='font-h2-title font-semibold text-2xl text-nbwhite'>+</span>
                        <h2 className='font-h2-title font-semibold text-2xl text-nbwhite underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.patronage")}</h2>
                        <h2 className='bg-nborangemain ml-1 px-1 -py-2 font-h2-title font-semibold text-2xl text-nbwhite leading-5'>{t("adbloc.for_movie_consumers")}</h2>
                    </div>
                </div>
                <div className="justify-center items-center gap-4 grid grid-cols-3 grid-rows-2 grid-flow-col-dense max-w-4xl">
                    <img className='col-span-1 row-span-2 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F1.jpg?alt=media&token=0251c6a8-dd6c-41bf-aa38-6b6b4583842f" alt="" />
                    <img className='col-span-1 row-span-1 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F2.jpg?alt=media&token=da7397f8-74bd-4093-b1c3-38a07d258559" alt="" />
                    <img className='col-span-1 row-span-1 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F3.jpg?alt=media&token=85e1d585-6365-471f-b8aa-2acd74a10f44" alt="" />
                    <img className='col-span-1 row-span-2 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F4.jpg?alt=media&token=13f55c87-e4a8-4217-a2df-bd55b641c5c9" alt="" />
                </div>
            </div>
            // <div className="flex-stretch border-nbgreymain mx-5 my-2 border border-dashed w-full max-w-screen-lg overflow-clip">
            // </div>
            // <div class="relative col-span-5 bg-nbblack hover:shadow-md mb-8 py-auto rounded-md w-full max-w-screen-md md:min-h-96 transition overflow-clip aspect-video videoPlayer">
            //     <iframe className="w-full min-h-48 sm:min-h-64 md:min-h-96 aspect-video" src={adUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            // </div>
    )

}

export default AdBloc;