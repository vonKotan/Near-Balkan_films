import { useState } from "react"
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "../hooks/useAuth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";




export const RegistrationAuth = () => {

    const [error, setError] = useState(null);

    const provider = new GoogleAuthProvider();

    const { register, handleSubmit } = useForm();

    const { registerUser, getUser, googleSignIn, loading } = useAuth()

    const navigate = useNavigate();

    async function handleRegister(user) {
        await registerUser({
            email: user.email,
            password: user.password
        });
        navigate("info");
    }

    function googleLogin(e) {
        signInWithPopup(getAuth(), provider);
        const doc = getUser();
        if(!doc){
            navigate("info");
        }
        console.log(doc);
    }

    return (
        <>
            <form
                className='flex flex-col items-center justify-center w-full gap-2 mt-8'
                onSubmit={handleSubmit(handleRegister)}
            >
                <input
                    type='email'
                    {...register("email")}
                    //onChange={(e) => setEmail(e.target.value)}
                    placeholder={'E-mail'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                <input
                    type='password'
                    {...register("password")}
                    //onChange={(e) => setPassword(e.target.value)}
                    placeholder={'Password'}
                    autoComplete='true'
                    className='w-full p-4 italic rounded-md shadow-sm outline-none'
                />
                <input
                    type='password'
                    {...register("confirmPassword")}
                    //onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button onClick={(e) => { googleLogin(e) }}> Sign up with Google</button>

        </>
    );
};