import "./App.css";

import React, { useState } from "react";
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
      <div className="App">
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
