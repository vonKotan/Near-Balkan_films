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
import Search from './pages/Search';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  //auth object of user
  const [user, setUser] = useState(undefined);

  const [search, setSearch] = useState('')

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
      <Header user={user} userObject={userObject} search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<WhiteLayout />}>
          <Route
            path='/profile'
            element={!user ? <Navigate to='/login' /> : <Profile user={user} />}
          />
          <Route
            path='/upload-demo'
            element={!user ? <Navigate to='/login' /> : <NewReview user={user} />}
          />
          <Route
            path='/register/*'
            element={
              user && userObject ? <Navigate to='/' /> : <Register user={user} />
            }
          />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route path='/*' element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
        </Route>
        <Route path="/" element={<Layout />} user={user}>
          <Route index element={<Home search={search}/>} />
          <Route path="/search" element={!user ? <Navigate to='/login' /> : <Search />} />
          <Route
            path='/favorites'
            element={!user ? <Navigate to='/login' /> : <Favorites user={user} />}
          />
          <Route path='/details/:id' element={<Details user={user} />} />
          <Route path='/details/:id' element={<Details />} />
          <Route
            path='/events'
            element={!user ? <Navigate to='/login' /> : <Events user={user} />}
          />
          <Route
            path='/past-events'
            element={!user ? <Navigate to='/login' /> : <Events user={user} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
