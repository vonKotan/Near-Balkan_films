import React from 'react'

// Components
import { useTranslation } from 'react-i18next';

export const DemoDescription = ({ movie }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <p className="line-clamp-3 sm:line-clamp-6 font-p-paragraph text-base text-nbgreymiddark leading-7">{i18n.language === 'en' && (movie.englishDescription || movie.description)} {i18n.language === 'hu' && (movie.description || movie.englishDescription)}</p>
  )
}

export default DemoDescription
