
import React from 'react';

  const TitleStyle = {
    fontSize: '64px',
    fontWeight: 'bolder',
    color : '#2C95B5',
    padding : '20px',
    fontFamily: 'poppins',
   
  };

  const SubTitleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    margin: '10px 2px',
    fontFamily: 'poppins',
  };

  const SubTextStyle = {
    fontSize: '25px',
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'left',
    margin: '10px 2px',
    fontFamily: 'poppins',
  };

  const Box = {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#50B0C8',
    fontWeight: 'bold',
    fontSize: '16px',
    alignItems: 'center',
    color: 'white',
    textAlign : 'left',
    padding: '20px 50px',
    height: '300px',
    width: '800px',
    display: 'inline-block',
    border: 'none', 

    margin: '10px 2px',
  };

  const  Info = ({clubName, rating, description, joinInfo, interest1, interest2, interest3}) => {
    return(
      <div style={Box}> 
        <div style={SubTitleStyle}>{clubName}</div>
        <div style={SubTextStyle}>Rating: {rating} </div>
        <div style={SubTextStyle}>Description:{description} </div>
        <div style={SubTextStyle}>How to Join: {joinInfo} </div>
        <div style={SubTextStyle}>Reccomended because interests are: {interest1}, {interest2}, {interest3} </div>
      </div>
      );
        };

  const  TopClubs = ({club1, rating1, desc1, info1, int1,int2,int3,club2, rating2, desc2, info2, int4,int5,int6,
    club3, rating3, desc3, info3, int7,int8,int9, club4, rating4, desc4, info4, int10,int11,int12,
    club5, rating5, desc5, info5, int13,int14,int15}) => {
    return (
        <div>
          <body style={{backgroundColor:'#F0EBD8'}}> 
            <div style={TitleStyle}> Your Top Clubs</div>
          
            <Info clubName = {club1} rating = {rating1} description = {desc1} joinInfo = {info1} interest1= {int1} interest2={int2} interest3= {int3} />
            <Info clubName = {club2} rating = {rating2} description = {desc2} joinInfo = {info2} interest1= {int4} interest2={int5} interest3= {int6} />
            <Info clubName = {club3} rating = {rating3} description = {desc3} joinInfo = {info3} interest1= {int7} interest2={int8} interest3= {int9} />
            <Info clubName = {club4} rating = {rating4} description = {desc4} joinInfo = {info4} interest1= {int10} interest2={int11} interest3= {int12} />
            <Info clubName = {club5} rating = {rating5} description = {desc5} joinInfo = {info5} interest1= {int13} interest2={int14} interest3= {int15} />
        
          </body> 
         </div>
              
    );
  };

  export default TopClubs;