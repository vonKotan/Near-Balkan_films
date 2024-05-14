import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ResetPassword from '../components/ResetPassword';
import { useAuth } from '../hooks/useAuth';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { t, i18n } = useTranslation(); 

  const [error, setError] = useState(null);

  const { signInUser, error: firebaseError, loading, googleSignIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Empty fields');
      return;
    }

    signInUser(email, password);
  };

  const googleLogin = (e) => {
    e.preventDefault();
    googleSignIn();
  }

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
    <section className='flex flex-col items-center justify-center sectionHeight bg-nbgreylight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-white rounded-md shadow-md max-w-[600px] w-[90%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-nbgreenmain transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-nbgreenlight'>
          {t('login.login')}
        </h1>
        <p className='mt-2 text-sm italic text-gray-500'>
          {t('login.log_in_to')}
        </p>
        <form
          className='flex flex-col items-center justify-center w-full gap-2 mt-8'
          onSubmit={handleLogin}
        >
          <input
            type='email'
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'E-mail'}
            autoComplete='true'
            className='w-full p-4 italic text-white rounded-md shadow-sm outline-none bg-zinc-800'
          />
          <input
            type='password'
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('login.password')}
            autoComplete='true'
            className='w-full p-4 italic text-white rounded-md shadow-sm outline-none bg-zinc-800'
          />
          {!loading && (
            <input
              type='submit'
              value={t("login.log_in")}
              className='w-full p-4 font-bold text-white transition-all duration-300 bg-nbgreenmain rounded-md shadow-sm cursor-pointer hover:bg-nbgreenlight hover:tracking-wider'
            />
          )}

          {loading && (
            <div className='flex items-center justify-center w-full'>
              <Loading size={'30px'} />
            </div>
          )}

          {error && <p className='error'>{error}</p>}
          <button onClick={(e) => { googleLogin(e) }}> Google </button>
        </form>
        <div className='flex flex-col w-full gap-2 mt-4'>
          <p className='italic text-gray-500 '>
            {t("login.forgot")}<ResetPassword userEmail={email} />
          </p>
          <p className='italic text-gray-500 '>
            {t("login.new_here")}{' '}
            <Link
              to='/register'
              className='pb-1 font-bold text-nbgreenmain transition-all duration-150 hover:tracking-wider hover:text-nbgreenlight'
            >
              {t("login.register")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
