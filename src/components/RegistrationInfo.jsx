import { useState } from "react"
import Loading from '../components/Loading';
import { useForm } from 'react-hook-form';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useRef } from "react";
import { Filmography } from "./Fimography";
import Select from "react-select"
import * as yup from 'yup';

export const RegistrationInfo = () => {

    const titleOptions = [
        { value: 'screenwriter', label: 'Screenwriter' },
        { value: 'director', label: 'Director' },
        { value: 'assistant director', label: 'Assistant director' },
        { value: 'camera assistant', label: 'Camera assistant' },
        { value: 'cameraman', label: 'Cameraman' },
        { value: 'music composer', label: 'Music composer' },
        { value: 'gaffer', label: 'Gaffer' },
        { value: 'production assistant', label: 'Production assistant' },
        { value: 'sound mixer', label: 'Sound mixer' },
        { value: 'boom operator', label: 'Boom operator' },
        { value: 'editor', label: 'Editor' },
        { value: 'director of photography', label: 'Director of photography' },
        { value: 'actor', label: 'Actor' },
        { value: 'set designer', label: 'Set designer' },

        /*'rendező/director',
        'rendezőasszisztens/assistant director',
        'operatőr/director of photography',
        'kameraman/cameraman',
        'operatőr asszisztens/camera assistant',
        'színész/actor',
        'látványtervező/set designer',
        'zeneszerző/music composer',
        'világítástechnikus/gaffer',
        'forgatási segéd/production assistant',
        'hangmérnök/sound mixer',
        'hangtechnikus/boom operator',
        'vágó/editor',*/
    ]

    const navigate = useNavigate();

    const [userType, setUserType] = useState('');

    const hiddenInput = useRef(null);

    const { registerUserInfo, loading, error: firebaseError } = useAuth()

    const [filmography, setFilmography] = useState([])

    const [roles, setRoles] = useState([])

    const [filmographyError, setFilmographyError] = useState('')

    const [rolesError, setRolesError] = useState('')



    function addFilmograpy(film) {
        setFilmography([...filmography, film])
    }


    function handleRegister(user) {
        if (validateExtraFields()) {
            user = CreateUserObj(user);
            registerUserInfo(user);
            navigate("/");
        }
    }

    function CreateUserObj(user) {
        if (roles && roles.length > 0) {
            user = { ...user, roles: roles }
        }

        if (filmography && filmography.length > 0) {
            user = { ...user, filmography: filmography }
        } 
        return user;
    }

    function validateExtraFields() {
        let areFieldsValid=true
        if (userType === 'creator') {
            if (!filmography || filmography.length === 0) {
                setFilmographyError('You need to provide your filmography if you want to be a creator')
                areFieldsValid=false;
            } else setFilmographyError('')

            if (!roles || roles.length === 0) {
                setRolesError('You need to provide your preferred roles if you want to be a creator')
                areFieldsValid = false;
            } else setRolesError('')
        }

        return areFieldsValid;
    }

    function fileUploaded(e) {
        e.preventDefault();
        //
    }

    const schema = yup.object().shape({
        firstName: yup.string().matches('^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$', "your name should only contain letters").required("This field is required"),
        lastName: yup.string().matches('^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$', "your name should only contain letters").required("This field is required"),
        phoneNumber: yup.string().matches('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', "Please enter a valid phone number"),
        birthDate: yup.date("This field is required").max(new Date(), "Your birthDate can not be later than today").required("This field is required"),
        userName: yup.string().matches('^[a-zA-Z]+$', "your username should only contain letters").required("This field is required"),
        userType: yup.string().oneOf(['viewer', 'creator']).required("This field is required"),
        /*roles: yup.array().of(yup.string()).max(10).test({
            name : "rolestest",
            message: "You must provide your preferred roles if you want to be a creator",
            test: (value) => true
        })*/
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [error, setError] = useState(null);


    useEffect(() => {
        if (firebaseError) {
            setError(firebaseError);
        }
    }, [firebaseError]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);



    return (
        <>
            <form
                className='flex flex-col items-center justify-center w-full gap-2 mt-8'
                onSubmit={handleSubmit(handleRegister)}
            >
                <p className='mt-2 text-sm italic text-gray-500'>
                    Since this is your first time here we need some extra information about you
                </p>
                {errors.firstName && (<p>{errors.firstName?.message}</p>)}
                <input
                    type='text'
                    {...register("firstName")}
                    placeholder={'First name'}
                    autoComplete='false'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.lastName && (<p>{errors.lastName?.message}</p>)}
                <input
                    type='text'
                    {...register("lastName")}
                    placeholder={'Last Name'}
                    autoComplete='false'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.phoneNumber && (<p>{errors.phoneNumber?.message}</p>)}
                <input
                    type='tel'
                    {...register("phoneNumber")}
                    placeholder={'Phone number'}
                    autoComplete='false'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.birthDate && (<p>{errors.birthDate?.message}</p>)}
                <input
                    type='date'
                    {...register("birthDate")}
                    placeholder={'Birthdate'}
                    autoComplete='false'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.userName && (<p>{errors.userName?.message}</p>)}
                <input
                    type='text'
                    {...register("userName")}
                    placeholder={'Username'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.userType && (<p>{errors.userType?.message}</p>)}
                <select name="typeSelect"
                    {...register("userType")}
                    onChange={(e) => setUserType(e.target.value)}
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'>
                    <option value="creator"> Content creator</option>
                    <option value="viewer" selected> Viewer</option>
                </select>

                {userType === 'creator' && (
                    <>
                        {rolesError && (<p>{rolesError}</p>)}
                        <Select
                            className='w-full p-4 italic rounded-md shadow-sm outline-none'
                            options={titleOptions}
                            isMulti
                            placeholder="Your preferred roles on movie"
                            onChange={e => {
                                setRoles(Array.isArray(e) ? e.map(x => x.value) : [])
                            }}
                            closeMenuOnSelect={false}>
                        </Select>
                        {filmographyError && (<p>{filmographyError}</p>)}
                        <Filmography sendData={addFilmograpy} />

                        {filmography.length > 0 && (
                            <>
                                <p>Filmography:</p>
                                {filmography.map(film =>
                                    <div>{film.title} {film.year} {film.role}</div>
                                )}
                            </>
                        )}

                    </>
                )}



                {!loading && (
                    <input
                        type='submit'
                        value='Create Account'
                        className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
                    />
                )}

                {loading && (
                    <div className='flex items-center justify-center w-full'>
                        <Loading size={'30px'} />
                    </div>
                )}

                {error && <p className='error'>{error}</p>}
            </form>
        </>
    )
}