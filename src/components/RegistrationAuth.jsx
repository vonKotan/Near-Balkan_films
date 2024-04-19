import { useState } from "react"
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";




export const RegistrationAuth = () => {

    const [error, setError] = useState(null);


    const { registerUser, getUser, googleSignIn, loading } = useAuth()

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email("Please write a valid email address").required("Email is missing"),
        password: yup.string().min(8, "Password too short").required("Password is missing"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password does not match previous one").required("Please confirm your password")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleRegister(user) {
        await registerUser({
            email: user.email,
            password: user.password
        });
    }

    function googleLogin(e) {
        googleSignIn();
    }

    return (
        <>
            <form
                className='flex flex-col items-center justify-center w-full gap-2 mt-8'
                onSubmit={handleSubmit(handleRegister)}
            >
                {errors.email && (<p>{errors.email?.message}</p>)}
                <input
                    type='text'
                    {...register("email")}
                    placeholder={'E-mail'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.password && (<p>{errors.password?.message}</p>)}
                <input
                    type='password'
                    {...register("password")}
                    placeholder={'Password'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                {errors.confirmPassword && (<p>{errors.confirmPassword?.message}</p>)}
                <input
                    type='password'
                    {...register("confirmPassword")}
                    placeholder={'Confirm Password'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />

                {!loading && (
                    <>
                        <input
                            type='submit'
                            value='Create Account'
                            className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
                        />

                    </>
                )}

                {loading && (
                    <div className='flex items-center justify-center w-full'>
                        <Loading size={'30px'} />
                    </div>
                )}

                {error && <p className='error'>{error}</p>}
            </form>

            <button onClick={(e) => { googleLogin(e) }}> Google </button>

        </>
    );
};