import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { useFilterMovies } from '../hooks/useFilterMovies';
import { useTranslation } from 'react-i18next';

const Search = ({ targetDate }) => {
    const { movies } = useFetchMovies({ fieldToOrderBy: 'collected', isDescending: true });
    const { t } = useTranslation();

    const [search, setSearch] = useState(null);
    const { filteredMovies: moviesFilter } = useFilterMovies(movies, search)

    return (
        <>
            <div className="flex flex-col gap-4">
                <p className="max-w-52 text-balance text-gray-600 text-xs leading-4">{t("search.search_description")}</p>
                <div
                    className="flex items-start gap-1 -mb-0.5 px-2 py-1 rounded-full w-full min-h-fit select-none group/anchor ring-1 ring-nbgreenlight">
                    <svg
                        className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreendark h-3 transition-all translate-y-1 fill-nbgreendark"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                        <path
                            d="M5.2029 0.500827C2.33387 0.500827 0 2.8347 0 5.70372C0 8.57275 2.33387 10.9066 5.2029 10.9066C6.07996 10.9066 6.94215 10.6985 7.67056 10.2971C7.7289 10.3674 7.79359 10.432 7.86381 10.4904L9.35035 11.9769C9.48761 12.1314 9.655 12.2562 9.84222 12.3436C10.0295 12.431 10.2326 12.4792 10.4391 12.4853C10.6457 12.4914 10.8513 12.4552 11.0433 12.3789C11.2354 12.3027 11.4098 12.188 11.5559 12.0419C11.702 11.8957 11.8167 11.7213 11.893 11.5293C11.9692 11.3372 12.0054 11.1316 11.9993 10.9251C11.9933 10.7185 11.945 10.5154 11.8576 10.3282C11.7702 10.141 11.6454 9.97357 11.491 9.83631L10.0044 8.34977C9.93201 8.27733 9.85231 8.21257 9.76658 8.15652C10.1679 7.42811 10.4207 6.58078 10.4207 5.68886C10.4207 2.81983 8.08679 0.485962 5.21776 0.485962L5.2029 0.500827ZM5.2029 1.98737C7.26919 1.98737 8.91925 3.63743 8.91925 5.70372C8.91925 6.68484 8.56248 7.59163 7.93813 8.26058C7.92327 8.27544 7.9084 8.29031 7.89354 8.30517C7.82332 8.36352 7.75863 8.42821 7.70029 8.49842C7.04621 9.09304 6.15428 9.43494 5.18803 9.43494C3.12174 9.43494 1.47168 7.78488 1.47168 5.71859C1.47168 3.6523 3.12174 2.00223 5.18803 2.00223L5.2029 1.98737Z" />
                    </svg>
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
            </div>
            {
                search && moviesFilter?.length === 0 && (
                    <div className='flex justify-center items-center gap-8 py-8'>
                        <p>{t("home.no_results")}</p>
                    </div>
                )
            }
            {
                search &&
                moviesFilter?.length > 0 &&
                moviesFilter?.map((movie) => (
                    <Card
                        movie={movie} targetDate={targetDate} haveWon={false}
                    />
                ))
            }
        </>
    );
};

export default Search;
