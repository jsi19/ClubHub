import React, { useState } from "react";
import './RegistrationScreen.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

const RegistrationScreen = ({ setShowProfileScreen }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  return (
    <>
    <div>
        <div className='body-section'>
            <div className = 'registration-section'>
                <div className = 'heading-text'>Register</div>
                <label class="prompt-style">Email:</label><br></br>
                <input 
                    class="input-style" 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />
                <label class="prompt-style">Password:</label><br></br>
                <input 
                    class="input-style" 
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                    <button onClick={register}> Create User</button>
            </div>


            <div className = 'login-section'>
                <div className = 'heading-text'>Login</div>
                <label class="prompt-style">Email:</label><br></br>
                <input 
                    class="input-style" 
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                      }}/>
                <label class="prompt-style">Password:</label><br></br>
                <input 
                    class="input-style" 
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                      }}/>
                    <button onClick={login}> Login</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default RegistrationScreen;
