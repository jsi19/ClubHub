
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { backdropClasses } from '@mui/material';






const ClubProfile = ({clubPFP, ClubName, about,commitments, requirements, score, 
  numReviews, rating1, ReviewTitle1, ReviewComments1, Pfp1, Major1, Year1, Interest1,
  rating2, ReviewTitle2, ReviewComments2, Pfp2, Major2, Year2, Interest2,
  rating3, ReviewTitle3, ReviewComments3, Pfp3, Major3, Year3, Interest3}) => {
  
  const ContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '#F0EBD8',
    height: '350px',
    padding: '0 16px',
    
  };

  const SideContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0EBD8',
    height: '50px',
    padding: '0 16px',
   
    
  };

  const SpaceContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0EBD8',
    height: '350px',
    padding: '0 16px',
    
  };

  const DesContainerStyle = {
    alignItems: 'left',
    justifyContent: 'left',
    backgroundColor: '50B0C8',
    height: '350px',
    padding: '0 16px',
    
  };
  const AverageReviewContainerStyle = {
   // display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    backgroundColor: '#F0EBD8',
    height: '100px',
    padding: '0 16px',

   };

   const ReviewContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '#F0EBD8',
    height: '200px',
    padding: '0 16px',
 
    };
    

  const ClubLogo = {
    height: '40px',
    marginRight: '100px',
    marginLeft: '200px',
    cursor: 'pointer',
  };

  const UserPfp = {
    height: '40px',
    cursor: 'pointer',
   
  };

  const TitleStyle = {
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#115D81',
    display: 'flex',
    alignItems: 'center',
  };

  const ItemsStyle = {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const ReviewStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    color: '#2C95B5',
    padding: '0 16px',
    fontSize: '50px',
  };

  const MiniReviewStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    color: '#2C95B5',
    paddingTop: '20px',
    fontSize: '20px',
  };


  const ItemStyle = {
    marginLeft: '16px',
    cursor: 'pointer',
    color: '#115D81',
    padding: '20px 50px',
  };

  const SubTitleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#2C95B5',
    textAlign: 'left',
    padding: '20px 50px',
    fontFamily: 'Poppins'
  };

  const SubTextStyle = {
    fontSize: '20px',
    fontWeight: 'normal',
    color: '#2C95B5',
    textAlign: 'left',
    fontFamily: 'Poppins'
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

 
  function ButtonFunction() {
    
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

const  ReviewBox = ({rating, ReviewTitle, ReviewComments, Pfp, Major, Year, Interest }) => {
  return(
    <div>
      <hr></hr>
      <div style={SpaceContainerStyle}>
     <div style={ReviewContainerStyle}>
         <MakeSmallStars rating = {rating} /> 
         <div style={SubTitleStyle}>  {ReviewTitle}
            <div style={SubTextStyle}>  {ReviewComments} </div>
         </div>

         <div style={ReviewContainerStyle}>   
         <div style={SideContainerStyle}> 
            <div style={UserPfp}>
              <img src= {Pfp} alt="User Profile Picture" style={{ height: '100%' }} />
            </div>
       </div>
       </div>
       <div style={SpaceContainerStyle}>
         <div style={SideContainerStyle}> 
            <div style={SubTextStyle}>  Major: {Major}
            <div style={SubTextStyle}>  Year :{Year} </div>
            <div style={SubTextStyle}>  Interests: {Interest}  </div>
              </div>  
         </div>
         </div>
      </div>
      </div>
     </div>
    );
      };

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
      <button style= {RegisterButton} onClick={ButtonFunction}>Write a Review</button>
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
    
   </div>




    <div style={AverageReviewContainerStyle}>  
      <hr></hr>
     <div style={ReviewStyle}>  <MakeStars rating = {score} /> 
     <div style={ReviewStyle}>  {score} </div>
     <div style={MiniReviewStyle}>  {numReviews} Reviews</div>
    </div>
  
    
    </div>
   
    

    <ReviewBox rating = {rating1} ReviewTitle= {ReviewTitle1} ReviewComments = {ReviewComments1}
     Pfp = {Pfp1} Major = {Major1} Year = {Year1} Interest = {Interest1}/>
    <ReviewBox rating = {rating2} ReviewTitle= {ReviewTitle2} ReviewComments = {ReviewComments2}
     Pfp = {Pfp2} Major = {Major2} Year = {Year2} Interest = {Interest2}/>
    <ReviewBox rating = {rating3} ReviewTitle= {ReviewTitle3} ReviewComments = {ReviewComments3}
     Pfp = {Pfp3} Major = {Major3} Year = {Year3} Interest = {Interest3}/>
   </body>
  
</div> 
  );
};


  export default ClubProfile;


