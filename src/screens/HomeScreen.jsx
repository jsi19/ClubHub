import React from 'react';
import NavigationBar from '../components/NavigationBar';


const MidText = {
  fontFamily: 'Poppins, sans-serif',
  color: '#2C95B5',
  alignItems: 'center',
  padding: '225px 0',
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

const HomeScreen = () => {
  return (
    <div>
      <NavigationBar />
      <body style={{backgroundColor:'#F7DEC0'}}>
      <div style={MidText}>
        <div style={TitleStyle}>Find Your Match</div>
        <div style={SubtitleStyle}>explore clubs that best fit your needs</div>
        <button style={GetStartedButton}>Get Started</button>      
      </div>
      </body>
    </div>
    
  );
};

export default HomeScreen;