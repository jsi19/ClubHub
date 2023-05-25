import React from 'react';

const NavigationBar = () => {
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
  };
  

  return (
    <div style={navContainerStyle}>
      <div style={navTitleStyle}>
        <div style={navLogoStyle}>
          <img src="/logo_icon.png" alt="Logo" style={{ height: '100%' }} />
        </div>
      </div>
      <div style={navItemsStyle}>
        <div style={navItemStyle}>Match</div>
        <div style={navItemStyle}>My Clubs</div>
        <div style={navItemStyle}>Profile</div>
      </div>
    </div>
  );
};

export default NavigationBar;
