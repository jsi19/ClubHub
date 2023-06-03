import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import MyClubs  from './screens/MyClubs';
import TopClubs from './screens/TopClubs';
import CompleteProfileScreen from './screens/CompleteProfileScreen';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import RegistrationScreen from './screens/RegistrationScreen';
import LandingScreen from './screens/LandingScreen';
import ClubProfile from './screens/ClubProfile';
import Review from './screens/Review';


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <NavigationBar loggedIn={user !== null} />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        {user ? (
          <>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/my-clubs" element={<MyClubs />} />
            <Route path="/match" element={<TopClubs/>} />
            <Route path="/complete-profile" element={<CompleteProfileScreen />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          
          <Route path="/registration" element={<RegistrationScreen />} />
        )}
         <Route>
           <Route path="/club-profile/:id" element={<ClubProfile />} />
           <Route path="/review/:id" element={<Review />} />

         </Route>
      </Routes>

      {user && (
        <>
          <h4>User Logged In:</h4>
          {user.email}
          <button onClick={logout}>Sign Out</button>
        </>
      )}
      {!user && (
        <Link to="/">
          <button onClick={logout}>Back to Landing Screen</button>
        </Link>
      )}    
    </Router>
  );
}

export default App;