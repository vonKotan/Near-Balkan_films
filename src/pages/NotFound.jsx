import { Outlet, Link } from "react-router-dom";

// Components
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const NotFound = ({ user, userObject }) => {
    const { documents: movies } = useFetchData('films');
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section>
            <h1 className="m-auto font-semibold text-center text-nbgreydark">404</h1>
            <h2 className="text-center text-nbgreydark text-xs">{t("404.description")}</h2>
        </section>
    );


};

export default NotFound;