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
import NewEvent from './pages/newEvent'
import PastCompetitions from './pages/PastCompetitions';
import NotFound from './pages/NotFound';

function App() {
  //auth object of user
  const [user, setUser] = useState(undefined);

  const [search, setSearch] = useState('')

  const [userObject, setUserObject] = useState(undefined);

  const { auth, onAuthStateChanged, getUser } = useAuth();

  // target date
  const RELATIVE_TIME_FROM_NOW = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const EXACT_DATE_IN_FUTURE = new Date("June 30, 2024 23:59:59").getTime();
  const targetDate = EXACT_DATE_IN_FUTURE;

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
      <Header user={user} userObject={userObject} search={search} setSearch={setSearch} betaVersion={`beta v0.01`} />
      <Routes>
        <Route path="/" element={<WhiteLayout />}>
          <Route
            path='/profile'
            element={!user ? <Navigate to='/login' /> : <Profile user={user} />}
          />
          <Route
            path='/upload-demo'
            element={user && userObject && userObject.userType === 'creator' ? (<NewReview user={user} />) : (<Navigate to='/login' />)}
          />
          <Route
            path='/upload-event'
            element={user && userObject && userObject.userType === 'creator' ? (<NewEvent user = {user}/>) : (<Navigate to='/login' />)}
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
          <Route path="/search" element={!user ? <Navigate to='/login' /> : <Search targetDate={targetDate} />} />
        </Route>
        <Route path="/" element={<Layout />} user={user}>
          <Route index element={<Home search={search} targetDate={targetDate} user={user}/>} />
          <Route path="/past-competitions" element={<PastCompetitions search={search} targetDate={targetDate}/>} />
          <Route
            path='/favourites'
            element={!user ? <Navigate to='/login' /> : <Favorites user={user} targetDate={targetDate} />}
          />
          <Route path='/details/:id' element={<Details user={user} targetDate={targetDate}/>} />
          <Route path='/details/:id' element={<Details targetDate={targetDate}/>} />
          <Route
            path='/events'
            element={<Events user={user} />}
          />
          <Route
            path='/past-events'
            element={!user ? <Navigate to='/login' /> : <Events user={user} />}
          />
        </Route>
      </Routes>
      <Footer betaVersion={`beta v1.0.1`} />
    </div >
  );
}

export default App;
