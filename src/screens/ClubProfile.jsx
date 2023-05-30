
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { backdropClasses } from '@mui/material';






const ClubProfile = ({clubPFP, ClubName, about,commitments, requirements, score, numReviews}) => {
  
  const ContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '#F0EBD8',
    height: '350px',
    padding: '0 16px',
    
  };

  const DesContainerStyle = {
   // display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '50B0C8',
    height: '350px',
    padding: '0 16px',
    
  };
  const ReviewContainerStyle = {
     alignItems: 'left',
     justifyContent: 'left',
     backgroundColor: '50B0C8',
     height: '350px',
     padding: '0 16px',
     
   };

  const ClubLogo = {
    height: '40px',
    marginRight: '100px',
    marginLeft: '200px',
    cursor: 'pointer',
  };

  const TitleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#115D81',
    display: 'flex',
    alignItems: 'center',
  };

  const ItemsStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const ItemStyle = {
    marginLeft: '16px',
    cursor: 'pointer',
    color: '#115D81',
    padding: '20px 50px',
  };

  const SubTitleStyle = {
    fontSize: '40px',
    fontWeight: 'normal',
    color: '#2C95B5',
    textAlign: 'left',
    
  };

  const SubTextStyle = {
    fontSize: '25px',
    fontWeight: 'normal',
    color: '#2C95B5',
    textAlign: 'left',
    
  };
  
  const RegisterButton = {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#115D81',
    fontWeight: 'bold',
    fontSize: '16px',
    alignItems: 'right',
    color: 'white',
    margin: '10px 2px',
    padding: '20px 50px',
    display: 'inline-block',
    border: 'none',
  };

 
  function sayHello() {
    alert('You clicked me!');
  }

  const FilledStar = (props) => {

    return (
        <label className="star">
            <svg 
                width="58" 
                height="58" 
                viewBox="0 0 24 24" 
                fill= '#2C95B5'
                stroke="#2C95B5" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
               
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        </label>
    );
}

const EmptyStar = (props) => {

  return (
      <label className="star">
          <svg 
              width="58" 
              height="58" 
              viewBox="0 0 24 24" 
              fill= 'white'
              stroke="#2C95B5" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
          >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
      </label>
  );
}

const SmallEmptyStar = (props) => {

  return (
      <label className="star">
          <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill= 'white'
              stroke="#2C95B5" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
          >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
      </label>
  );
}

const SmallFilledStar = (props) => {
return (
  <label className="star">
      <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill= '#2C95B5'
          stroke="#2C95B5" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
         
      >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
  </label>
);
}


const MakeStars = ({rating}) => {
  var number = Number(rating)

   const stars = []
    var i = 0
for (; i < number && stars.length < 5; i++) {
    stars[i] = <FilledStar/>
}
for (; stars.length < 5; i++) {
  stars[i] = <EmptyStar/>
}
  return (
      stars
  );
}
const MakeSmallStars = ({rating}) => {
  var number = Number(rating)

   const stars = []
    var i = 0
for (; i < number && stars.length < 5; i++) {
    stars[i] = <SmallFilledStar/>
}
for (; stars.length < 5; i++) {
  stars[i] = <SmallEmptyStar/>
}
  return (
      stars
  );
}

  return (
<div>
<body style={{backgroundColor:'#F0EBD8'}}> 
  <NavigationBar />
  <hr></hr>

    <div style={ContainerStyle}>
      <div style={TitleStyle}>
        <div style={ClubLogo}>
          <img src= {clubPFP} alt="Club Profile Picture" style={{ height: '100%' }} />
        </div>
      </div>
     <div style={ItemsStyle}>
        <div style={TitleStyle}>{ClubName}</div>
        
      </div> 

      <div style={ItemStyle}>
      <button style= {RegisterButton} onClick={sayHello}>Write a Review</button>
      </div>
      
    </div>
    <hr></hr>
    <div style={DesContainerStyle}>
    <div style={SubTitleStyle}>  About </div>
    <div style={SubTextStyle}>  {about} </div>
    <div style={SubTitleStyle}>  Commitments </div>
    <div style={SubTextStyle}>  {commitments} </div>
    <div style={SubTitleStyle}>  Membership Requirements </div>
    <div style={SubTextStyle}>  {requirements} </div>
    <div style={SubTitleStyle}>  Reviews </div>
    <hr></hr>
   

    
      </div>

      <div style={ContainerStyle}>
      <MakeStars rating = "4"  />
      
      {score}
      {numReviews}
      
      </div>
      <hr></hr>

      <div style={ContainerStyle}>
      <MakeSmallStars rating = "3" /> 
      <div style={SubTitleStyle}>  Review Title </div>
      <div style={DesContainerStyle}></div>
      <div style={SubTextStyle}>  Comments </div>
      

      
      </div>
      <hr></hr>
      <div style={ContainerStyle}>
      <MakeSmallStars rating = "3" /> 
    

      
      </div>
      <hr></hr>
      <div style={ContainerStyle}>
      <MakeSmallStars rating = "3" /> 

      
     </div>

   
   </body>
  
</div> 
  );
};


  export default ClubProfile;