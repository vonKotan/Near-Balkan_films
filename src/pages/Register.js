import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';
import { Routes, Route, Navigate } from 'react-router-dom';
import {RegistrationAuth} from '../components/RegistrationAuth';
import {RegistrationInfo} from '../components/RegistrationInfo';



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
        <Routes>
          <Route path='/' element={<RegistrationAuth></RegistrationAuth>}/>
          <Route path='/info' element={<RegistrationInfo></RegistrationInfo>}/>
      </Routes>
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
