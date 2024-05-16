import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const Search = () => {
    const { documents: movies } = useFetchData('films');
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    let [isShowing, setIsShowing] = useState(true)

    const [search, setSearch] = useState(null);
    const [moviesFilter, setMoviesFilter] = useState([]);

    useEffect(() => {
        if (search) {
            const filter = movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase()),
            );

            setMoviesFilter(filter);
        }
    }, [search, movies]);

    return (
        <section className='flex flex-col justify-center items-center m-auto'>
            <input
                type='text'
                placeholder={t("home.search")}
                className='justify-center items-center border-2 border-slate-200-400 bg-gray-50 p-2 rounded-md w-full text-start placeholder:text-center italic transition-all outline-none self-stretch'
                value={search || ''}
                onChange={(e) => {
                    setIsShowing(false)
                    setTimeout(() => setIsShowing(true), 750)
                    setSearch(e.target.value)
                }}
            />
            {search && moviesFilter.length === 0 && (
                <Transition
                    show={isShowing}
                    enter="transition duration-[400ms]"
                    enterFrom="scale-50 opacity-0"
                    enterTo="scale-100 opacity-100"
                    leave="transition duration-200 ease-in-out"
                    leaveFrom="scale-100 opacity-100"
                    leaveTo="scale-95 opacity-0"
                >
                    <div className='flex justify-center items-center gap-8 py-8'>
                        <p>{t("home.no_results")}</p>
                    </div>
                </Transition>
            )}
            <div className='flex justify-center items-center gap-8 py-8'>
                {search &&
                    moviesFilter.length > 0 &&
                    moviesFilter?.map((movie) => (
                        <Transition
                            show={isShowing}
                            enter="transition duration-[400ms]"
                            enterFrom="scale-50 opacity-0"
                            enterTo="scale-100 opacity-100"
                            leave="transition duration-200 ease-in-out"
                            leaveFrom="scale-100 opacity-100"
                            leaveTo="scale-95 opacity-0"
                        >
                            <Link
                                key={movie.id}
                                to={`/details/${movie.id}`}
                                className='flex items-center'
                            >
                                <Card
                                    image={movie.image}
                                    title={movie.title}
                                    genre={movie.genre}
                                    rating={movie.rating}
                                />
                            </Link>
                        </Transition>
                    ))}
            </div>
        </section>
    );
};

export default Search;
