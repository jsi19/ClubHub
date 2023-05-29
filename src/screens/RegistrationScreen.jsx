import React, { useState } from 'react';
import './RegistrationScreen.css';
import Login from '../components/login';
import SignUp from '../components/signup';


const RegistrationScreen = () => { 

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);}

return (
<div>
    <section className='body-section'>
        <section className = 'registration-section'>
            <section className = 'heading-text'>Register</section>
            <SignUp handleChange={handleChange} />
        </section>
        <section className = 'login-section'>
            <section className = 'heading-text'>Login</section>
            <Login handleChange={handleChange} />
        </section>
    </section>
</div>
);

};

export default RegistrationScreen;