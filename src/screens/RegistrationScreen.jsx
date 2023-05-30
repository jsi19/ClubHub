import React, { useState } from 'react';
import './RegistrationScreen.css';
import Login from '../components/login';
import SignUp from '../components/signup';


const RegistrationScreen = () => { 

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

const handleRegister =() => {
    console.log({username, email, password});
}

const [loginUsername, setLoginUsername] = useState('');
const [loginPassword, setLoginPassword] = useState('');

const handleLogin =() => {
    console.log({loginUsername, loginPassword});
}


return (
<div>
    <body>
    <section className='body-section'>


        <section className = 'registration-section'>
            <section className = 'heading-text'>Register</section>
            <form align="center">
            <label for="username" title="username" class="prompt-style">Username:</label><br></br>
            <input 
                class="input-style" 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
            <label for="email" title="email" class="prompt-style">Email:</label><br></br>
            <input 
                class="input-style" 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
            <label for="password" title="password" class="prompt-style">Password:</label><br></br>
            <input 
                class="input-style" 
                type="text" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <button variant="primary" onclick={handleRegister} >Register</button>
            </form>
        </section>


        <section className = 'login-section'>
            <section className = 'heading-text'>Login</section>
            <form align="center">
            <label for="loginUsername" title="loginUsername" class="prompt-style">Username:</label><br></br>
            <input 
                class="input-style" 
                type="text" 
                id="loginUsername" 
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}/>
                <br></br>
            <label for="loginPassword" title="loginPassword" class="prompt-style">Password:</label><br></br>
            <input 
                class="input-style" 
                type="text" 
                id="loginPassword" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}/>
                <br></br>
                <button variant="primary" onclick={handleLogin} >Login</button>
            </form>
        </section>

        
    </section>
    </body>
</div>
);

};

export default RegistrationScreen;