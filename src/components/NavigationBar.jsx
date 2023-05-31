import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ loggedIn }) => {
  const navContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0EBD8',
    height: '80px',
    padding: '0 16px',
  };

  const navLogoStyle = {
    height: '40px',
    marginRight: '8px',
    cursor: 'pointer',
  };

  const navTitleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#115D81',
    display: 'flex',
    alignItems: 'center',
  };

  const navItemsStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const navItemStyle = {
    marginLeft: '16px',
    cursor: 'pointer',
    color: '#115D81',
    textDecoration: 'none', // Remove underline from the link
  };

  const logoLink = loggedIn ? '/home' : '/';

  return (
    <div style={navContainerStyle}>
      <div style={navTitleStyle}>
        <Link to={logoLink}>
          <div style={navLogoStyle}>
            <img src="/logo_icon.png" alt="Logo" style={{ height: '100%' }} />
          </div>
        </Link>
      </div>
      {!loggedIn && (
        <div style={navItemsStyle}>
          <Link to="/registration" style={navItemStyle}>
            Register/Login
          </Link>
        </div>
      )}
      {loggedIn && (
        <div style={navItemsStyle}>
          <div style={navItemStyle}>Match</div>
          <div style={navItemStyle}>My Clubs</div>
          <div style={navItemStyle}>Profile</div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
