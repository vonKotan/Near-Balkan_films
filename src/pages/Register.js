
// Router
import { Link } from 'react-router-dom';
import { Routes, Route, Navigate} from 'react-router-dom';
//Componenets
import {RegistrationAuth} from '../components/RegistrationAuth';
import {RegistrationInfo} from '../components/RegistrationInfo';



const Register = (user) => {

  return (
    <section className='flex flex-col items-center justify-center sectionHeight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-gray-100 rounded-md shadow-md max-w-[600px] w-[90%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-yellow-400 transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-yellow-300'>
          Register
        </h1>
        <Routes>
          <Route path='/' element={<RegistrationAuth></RegistrationAuth>}/>
          <Route path='/info' element={!user ? <Navigate to="/login"></Navigate>: <RegistrationInfo></RegistrationInfo>}/>
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
