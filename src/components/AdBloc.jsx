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
        <>
            <div className="flex flex-col justify-center items-center gap-6 bg-teal-600 mb-7 p-6 lg:pt-8 lg:pb-10 rounded-lg w-full min-w-fit max-w-screen-lg">
                <h1 className='-mb-1 lg:-mb-2 font-bold font-h2-title text-3xl text-center text-nbwhite lg:text-4xl leading-2'>{t("adbloc.crowdfunding-streaming")}</h1>
                <div className="flex lg:flex-col justify-center items-center gap-1 order-3 lg:order-none">
                    <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center lg:items-baseline gap-x-2'>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.publicity")}</h2>
                        <span className='lg:block hidden font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl'>+</span>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.networking")}</h2>
                        <span className='lg:block hidden font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl'>+</span>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.funding")}</h2>
                        <h2 className='order-first lg:order-none bg-nbpurplemain ml-1 px-1 -py-2 font-h2-title font-semibold text-base text-nbwhite sm:text-xl md:text-2xl leading-4'>{t("adbloc.for_filmmakers")}</h2>
                    </div>
                    <div className="block lg:hidden bg-nbgreymain mx-3 w-px max-w-screen-lg h-24 overflow-clip"></div>
                    <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center lg:items-baseline gap-x-2'>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.personal_input")}</h2>
                        <span className='lg:block hidden font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl'>+</span>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.exclusivity")}</h2>
                        <span className='lg:block hidden font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl'>+</span>
                        <h2 className='font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl underline underline-offset-2 decoration-2 decoration-nbgreenmain'>{t("adbloc.patronage")}</h2>
                        <h2 className='lg:block order-first lg:order-none hidden bg-nborangemain ml-1 px-1 -py-2 font-h2-title font-semibold text-lg text-nbwhite sm:text-xl md:text-2xl leading-5'>{t("adbloc.for_movie_consumers")}</h2>
                        <h2 className='order-first lg:order-none lg:hidden bg-nborangemain ml-1 px-1 -py-2 font-h2-title font-semibold text-base text-nbwhite sm:text-xl md:text-2xl leading-4'>{t("adbloc.for_consumers")}</h2>
                    </div>
                </div>
                <div className="justify-center items-center gap-4 order-2 lg:order-none grid grid-cols-3 grid-rows-2 grid-flow-col-dense max-w-md sm:max-w-lg lg:max-w-4xl">
                    <img className='lg:block hidden col-span-1 row-span-2 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F1.jpg?alt=media&token=0251c6a8-dd6c-41bf-aa38-6b6b4583842f" alt="" />
                    <img className='col-span-3 lg:col-span-1 row-span-2 lg:row-span-1 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F2.jpg?alt=media&token=da7397f8-74bd-4093-b1c3-38a07d258559" alt="" />
                    <img className='lg:block hidden col-span-1 row-span-1 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F3.jpg?alt=media&token=85e1d585-6365-471f-b8aa-2acd74a10f44" alt="" />
                    <img className='lg:block hidden col-span-1 row-span-2 shadow-md rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F4.jpg?alt=media&token=13f55c87-e4a8-4217-a2df-bd55b641c5c9" alt="" />
                </div>
                <div className="flex-stretch border-nbgreymain order-4 lg:order-none mx-5 my-2 border border-dashed w-full max-w-screen-lg overflow-clip">
                </div>
                <div className="relative order-last lg:order-none col-span-5 bg-nbblack hover:shadow-md py-auto rounded-md w-full max-w-screen-md md:min-h-96 transition overflow-clip aspect-video videoPlayer">
                    <iframe className="w-full min-h-48 sm:min-h-64 md:min-h-96" src={adUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </>
    )

}

export default AdBloc;