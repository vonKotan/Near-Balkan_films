import React from 'react'

// Router
import { Link } from 'react-router-dom';

// Components
import { useTranslation } from 'react-i18next';

export const DemoTitle = ({ movie }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Link
            key={movie?.id}
            to={`/details/${movie?.id}`}
            className="font-black font-h2-title text-4xl text-nbgreydark hover:text-nbgreenmain active:text-nbgreenlight underline underline-offset-4 leading-tight tracking-tight transition-colors decoration-4 decoration-nbgreenmain active:decoration-nbgreenlight -mt-2 max-w-fit">{i18n.language === 'hu' ? (movie?.title) : (movie?.englishTitle)}
        </Link>
    )
}

export default DemoTitle