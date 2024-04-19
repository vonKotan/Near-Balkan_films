import { useState } from "react"
import Loading from '../components/Loading';
import { useForm } from 'react-hook-form';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const RegistrationInfo = () => {
    const navigate = useNavigate();

    const {registerUserInfo, getUser, loading} = useAuth()

    const [error, setError] = useState(null);

    const { register, handleSubmit } = useForm();


    function handleRegister(user) {
        registerUserInfo(user);
        navigate("/");
    }


    return (
        <form
            className='flex flex-col items-center justify-center w-full gap-2 mt-8'
            onSubmit={handleSubmit(handleRegister)}
        >
            <p className='mt-2 text-sm italic text-gray-500'>
                Since this is your first time here we need some extra information about you
            </p>
            <input
                type='text'
                {...register("firstName")}
                placeholder={'First name'}
                autoComplete='false'
                className='w-full p-4 italic rounded-md shadow-sm outline-none'
            />
            <input
                type='text'
                {...register("lastName")}
                placeholder={'Last Name'}
                autoComplete='false'
                className='w-full p-4 italic rounded-md shadow-sm outline-none'
            />
            <input
                type='tel'
                {...register("phoneNumber")}
                placeholder={'Phone number'}
                autoComplete='false'
                className='w-full p-4 italic rounded-md shadow-sm outline-none'
            />
            <input
                type='date'
                {...register("birthDate")}
                placeholder={'Birthdate'}
                autoComplete='false'
                className='w-full p-4 italic rounded-md shadow-sm outline-none'
            />
            <input
                type='text'
                {...register("userName")}
                placeholder={'Username'}
                autoComplete='true'
                className='w-full p-4 italic rounded-md shadow-sm outline-none'
            />

            <select name="typeSelect"
                {...register("userType")}
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