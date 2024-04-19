import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  //fields to create the auth object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //fields we save to our own database
  const [username, setUsername] = useState('');
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [birthDate, setBirthDate] = useState(Date);
  const [phoneNumber, setPhoneNUmber] = useState('')



  const [error, setError] = useState(null);

  const { registerUser, error: firebaseError, loading } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    // TODO erre a validálásra lehet keresni kéne valami jobb megoldást 
    //+ megbeszélni hétfőn, hogy mik a kötelező mezők plusz egyéb feltételek
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''

    ) {
      setError('Empty fields');
      return;
    } else if (confirmPassword !== password) {
      setError('Passwords must be equal');
      return;
    }

    registerUser(email, password, username, firstName, lastName, phoneNumber, userType, birthDate);
  };

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
    <section className='flex flex-col items-center justify-center sectionHeight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-gray-100 rounded-md shadow-md max-w-[600px] w-[90%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-yellow-400 transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-yellow-300'>
          Register
        </h1>
        <p className='mt-2 text-sm italic text-gray-500'>
          Register and enjoy all functions
        </p>
        <form
          className='flex flex-col items-center justify-center w-full gap-2 mt-8'
          onSubmit={handleRegister}
        >
          <input
            type='text'
            value={firstName || ''}
            onChange={(e) => setFirsName(e.target.value)}
            placeholder={'First name'}
            autoComplete='false'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='text'
            value={lastName || ''}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={'Last Name'}
            autoComplete='false'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='tel'
            value={phoneNumber || ''}
            onChange={(e) => setPhoneNUmber(e.target.value)}
            placeholder={'Phone number'}
            autoComplete='false'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='date'
            value={birthDate || ''}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder={'Birthdate'}
            autoComplete='false'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='text'
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={'Username'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='email'
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'E-mail'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='password'
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={'Password'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <input
            type='password'
            value={confirmPassword || ''}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={'Confirm Password'}
            autoComplete='true'
            className='w-full p-4 italic rounded-md shadow-sm outline-none'
          />
          <select name="typeSelect" onChange = {(e)=> setUserType(e.target.value)}
          className='w-full p-4 italic rounded-md shadow-sm outline-none'>
            <option value="creator"> Content creator</option>
            <option value="viewer" selected> Viewer</option>
            <option value="producer"> Producer</option>
            <option value="admin">Admin</option>
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
        <div className='flex flex-col w-full gap-2 mt-4'>
          <p className='italic text-gray-500 '>
            Already registered?{' '}
            <Link
              to='/login'
              className='pb-1 font-bold text-yellow-400 transition-all duration-150 hover:tracking-wider hover:text-yellow-300'
            >
              Log in
            </Link>
          </p>



        </div>
      </div>
    </section>
  );
};

export default Register;
