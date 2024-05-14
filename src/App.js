// Routes
import { Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';

// Components
import Header from './components/Header';
import Layout from './components/Layout';
import WhiteLayout from './components/WhiteLayout';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import Events from './pages/Events';
import Profile from './pages/Profile';
import NewReview from './pages/NewReview';
import Loading from './components/Loading';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

function App() {
  //auth object of user
  const [user, setUser] = useState(undefined);

  const [userObject, setUserObject] = useState(undefined);

  const { auth, onAuthStateChanged, getUser } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUser(user);
      let userObj = await getUser();
      setUserObject(userObj ?? undefined);
    });
  }, [auth, onAuthStateChanged]);

  if (user === undefined) {
    return (
      <div className='flex items-center justify-center sectionHeight'>
        <Loading size={'60px'} />
      </div>
    );
  }
  return (
    <div className='App'>
      <Header user={user} userObject={userObject} />
      <Routes>
        <Route path="/" element={<WhiteLayout />}>
          <Route
            path='/profile'
            element={!user ? <Navigate to='/' /> : <Profile user={user} />}
          />
          <Route
            path='/add-review'
            element={!user ? <Navigate to='/' /> : <NewReview user={user} />}
          />
          <Route
            path='/register/*'
            element={
              user && userObject ? <Navigate to='/' /> : <Register user={user} />
            }
          />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        </Route>
        <Route path="/" element={<Layout />} user={user}>
          <Route index element={<Home />} />
          <Route
            path='/events'
            element={!user ? <Navigate to='/login' /> : <Events user={user} />}
          />
          <Route path='/details/:id' element={<Details user={user} />} />
          <Route
            path='/favorites'
            element={!user ? <Navigate to='/' /> : <Favorites user={user} />}
          />
          <Route path='/details/:id' element={<Details />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
