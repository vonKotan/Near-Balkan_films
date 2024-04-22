import { useState } from "react"
import Loading from '../components/Loading';
import { useForm } from 'react-hook-form';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react";
import * as yup from 'yup';

export const RegistrationInfo = () => {
    const navigate = useNavigate();

    const [userType, setUserType] = useState('');

    const { registerUserInfo, loading, error:firebaseError } = useAuth()


    function handleRegister(user) {
            registerUserInfo(user);
            navigate("/");
        }

    const schema = yup.object().shape({
        firstName: yup.string().matches('^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$', "your name should only contain letters").required("This field is required"),
        lastName: yup.string().matches('^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$', "your name should only contain letters").required("This field is required"),
        phoneNumber: yup.string().matches('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', "Please enter a valid phone number"),
        birthDate: yup.date().max(new Date(), "Your birthDate can not be later than today").required(),
        userName: yup.string().matches('^[a-zA-Z]+$', "your username should only contain letters").required("This field is required"),
        userType: yup.string().oneOf(['viewer', 'creator']).required("This field is required")
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
    )
}