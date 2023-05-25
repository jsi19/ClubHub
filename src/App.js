import "./App.css";

import React, { useState } from "react";
import NavigationBar from './components/NavigationBar';
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import CompleteProfileScreen from "./screens/CompleteProfileScreen";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [showProfileScreen, setShowProfileScreen] = useState(false);

  const openProfileScreen = () => {
    setShowProfileScreen(true);
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <HomeScreen />
      </div>
      <div className="CompleteProfileScreen">
        {showProfileScreen && <CompleteProfileScreen />}
        <button onClick={openProfileScreen}>Open Profile Screen</button>
      </div>
    </div>
  );
}

export default App;
