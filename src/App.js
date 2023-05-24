import "./App.css";

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
