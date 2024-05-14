
// Router
import { Link } from 'react-router-dom';
import { Routes, Route, Navigate} from 'react-router-dom';
//Componenets
import {RegistrationAuth} from '../components/RegistrationAuth';
import {RegistrationInfo} from '../components/RegistrationInfo';
import { useTranslation } from 'react-i18next';



const Register = (user) => {
  const { t, i18n } = useTranslation(); 
  return (
    <section className='flex flex-col items-center justify-center sectionHeight bg-nbgreylight'>
      <div className='flex flex-col items-center justify-center px-16 py-8 bg-gray-100 rounded-md shadow-md max-w-[600px] w-[90%]'>
        <h1 className='py-2 text-4xl font-bold tracking-wider text-nbgreenmain transition-all duration-300 border-b-4 border-black hover:tracking-widest hover:text-nbgreenlight'>
          Register
        </h1>
        <Routes>
          <Route path='/' element={<RegistrationAuth></RegistrationAuth>}/>
          <Route path='/info' element={!user ? <Navigate to="/login"></Navigate>: <RegistrationInfo user={user}></RegistrationInfo>}/>
      </Routes>
        <div className='flex flex-col w-full gap-2 mt-4'>
          <p className='italic text-gray-500 '>
            Already registered?{' '}
            <Link
              to='/login'
              className='pb-1 font-bold text-nbgreenmain transition-all duration-150 hover:tracking-wider hover:text-nbgreenlight'
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
