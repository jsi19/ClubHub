import "./App.css";

import React, { useState, useEffect } from "react";
import NavigationBar from './components/NavigationBar';
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import CompleteProfileScreen from "./screens/CompleteProfileScreen";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const [showProfileScreen, setShowProfileScreen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only once

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setShowProfileScreen(true); // Show the profile screen after successful registration
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setShowProfileScreen(true); // Show the profile screen after successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setShowProfileScreen(false); // Hide the profile screen after logout
  };

  return (
    <div>
      <NavigationBar />
      {!showProfileScreen ? (
        <>
          <div>
            <h3> Register User </h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />

            <button onClick={register}> Create User</button>
          </div>
          <div>
            <h3> Login </h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />

            <button onClick={login}> Login</button>
          </div>
        </>
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
