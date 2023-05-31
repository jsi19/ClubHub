import "./App.css";
import React, { useState, useEffect } from "react";
import NavigationBar from './components/NavigationBar';
import HomeScreen from "./screens/HomeScreen";
import CompleteProfileScreen from "./screens/CompleteProfileScreen";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import RegistrationScreen from "./screens/RegistrationScreen";

function App() {
  const [user, setUser] = useState({});
  const [showProfileScreen, setShowProfileScreen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only once

  const logout = async () => {
    await signOut(auth);
    setShowProfileScreen(false); // Hide the profile screen after logout
  };

  return (
    <div>
      <NavigationBar />
      {!showProfileScreen ? (
        <RegistrationScreen setShowProfileScreen={setShowProfileScreen} />
      ) : (
        <>
          <div>
            <HomeScreen />
          </div>
          <div className="CompleteProfileScreen">
            <CompleteProfileScreen />
            <button onClick={() => setShowProfileScreen(false)}>
              Back to Home
            </button>
          </div>
        </>
      )}

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
