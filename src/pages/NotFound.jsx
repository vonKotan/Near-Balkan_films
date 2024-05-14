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
        <main id="innerGrid" className="container">
            <h1 className="m-auto text-center">404
                <br />
                <h2 className="text-xs">{t("404.description")}</h2>
            </h1>
            <Outlet />
        </main>
    );


};

export default NotFound;