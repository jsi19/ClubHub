import React from 'react';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
  return (
    <div style={containerStyle}>
      <div style={MidText}>
        <div style={TitleStyle}>Find Your Match</div>
        <div style={SubtitleStyle}>explore clubs that best fit your needs</div>
        <Link to="/registration">
          <button style={GetStartedButton}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#F7DEC0',
};

const MidText = {
  fontFamily: 'Poppins, sans-serif',
  color: '#2C95B5',
  textAlign: 'center',
};

const TitleStyle = {
  fontSize: '60px',
  fontWeight: 'bold',
};

const SubtitleStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  padding: '10px'
};

const GetStartedButton = {
  fontFamily: 'Poppins, sans-serif',
  backgroundColor: '#115D81',
  fontWeight: 'bold',
  fontSize: '16px',
  alignItems: 'center',
  color: 'white',
  margin: '10px 2px',
  padding: '20px 50px',
  display: 'inline-block',
  border: 'none',
};

export default LandingScreen;
