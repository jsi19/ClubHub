
import React, {  useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import { backdropClasses } from '@mui/material';
import clubsData from '../components/club_dump';
import { useParams} from 'react-router-dom';





const ClubProfile = () => {
  

  
 


 const {id} = useParams();
 const clubId = parseInt(id, 10);
 const [club, setClub] = useState(null);
 
 useEffect(() => {
      const desiredClub = clubsData.find((club) => club.id === clubId);
      setClub(desiredClub); // Assuming desiredClub is an array with only one element
   }, [id]);

   if (!club) {
       return <div>Loading...</div>; // Or any other loading indicator
      }

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
    padding: '40px 16px',
    paddingTop: '100px',

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
            
       </div>
       </div>
       <div style={SpaceContainerStyle}>
         <div style={SideContainerStyle}> 
            <div style={SubTextStyle}>  Major: {Major}
            <div style={SubTextStyle}>  Year :{Year} </div>
            <div style={SubTextStyle}>  Interest: {Interest}  </div>
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
        
        
            <div style={ContainerStyle}>
              <div style={TitleStyle}>
                <div style={ClubLogo}>
                  <img src= {club.imageURL} alt="Club Profile Picture" style={{ height: '100%' }} />
                </div>
              </div>
             <div style={ItemsStyle}>
                <div style={TitleStyle}>{club.title}</div>
                
              </div> 
        
              <div style={ItemStyle}>
              <button style= {RegisterButton} onClick={ButtonFunction}>Write a Review</button>
              </div>
              
            </div>
            <hr></hr>
            <div style={DesContainerStyle}>
            <div style={SubTitleStyle}>  Description:  </div>
            <div style={SubTextStyle}>  {club.description} </div>
            <div style={SubTitleStyle}>  Commitments </div>
            <div style={SubTextStyle}>  {club.commitments} </div>
            <div style={SubTitleStyle}>  Membership Requirements </div>
            <div style={SubTextStyle}>  {club.requirements} </div>
            <div style={SubTitleStyle}>  Reviews </div>
            
           </div>
        
        
        
        
            <div style={AverageReviewContainerStyle}>  
              <hr></hr>
             <div style={ReviewStyle}>  <MakeStars rating = {club.rating} /> 
             <div style={ReviewStyle}>  {club.rating} </div>
             <div style={MiniReviewStyle}>  {club.numReviews} Reviews</div>
            </div>
          
            
            </div>
           
            
        
            <ReviewBox rating = {club.rating1} ReviewTitle= {club.ReviewTitle1} ReviewComments = {club.ReviewComments1}
              Major = {club.Major1} Year = {club.Year1} Interest = {club.Interest1}/>
            <ReviewBox rating = {club.rating2} ReviewTitle= {club.ReviewTitle2} ReviewComments = {club.ReviewComments2}
              Major = {club.Major2} Year = {club.Year2} Interest = {club.Interest2}/>
            <ReviewBox rating = {club.rating3} ReviewTitle= {club.ReviewTitle3} ReviewComments = {club.ReviewComments3}
              Major = {club.Major3} Year = {club.Year3} Interest = {club.Interest3}/>
           </body>
          
        </div> 
          );
        }; 


      


  export default ClubProfile;


