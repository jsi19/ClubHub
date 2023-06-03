import React, {  useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import clubsData from '../components/club_dump';
import './Review.css';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';



const Review = () => {
    const [reviewTitle, setReviewTitle] = useState('');
    const [rating, setRating] = useState('');
    const [reviewBody, setReviewBody] = useState('');

  const {id} = useParams();
  const clubId = parseInt(id, 10);
  const [club, setClub] = useState(null);
 
 useEffect(() => {
      const desiredClub = clubsData.find((club) => club.id === clubId);
      setClub(desiredClub); // Assuming desiredClub is an array with only one element
   }, [clubId]);

   if (!club) {
       return <div>Loading...</div>; // Or any other loading indicator
      }
      
    const handleSubmit = () => {
        // Perform profile submission or further processing
        console.log({ reviewTitle, reviewBody, rating });
    }

    return (
    <div style={{backgroundColor:"#F0EBD8"}}>
    <hr></hr>
    <br></br>
    <div class="heading" >Write a Review</div>
    <hr></hr>
        
    <div class="ratingForm">
      <Form action="Check.html" method="GET">
        <div>
          <label for="reviewTitle" class="review-label">Review Title:</label><br/>
          <input 
            class="input-style"
            type="text" 
            id="reviewTitle"
            placeholder="Title Here..."
            name="reviewTitle"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}/>
          <br/>
        </div>
        <br></br>

        <div>
          <label for="reviewBody" class="review-label">Review:</label><br/>
          <input 
            class="input-style"
            type="text" 
            id="reviewBody" 
            placeholder="Review Here..."
            name="reviewBody"
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
            style={{height:"200px"}}/>
          <br/>
        </div>

        {/* <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head> */}
        <label for="rating" class="review-label" >Rate:</label><br></br>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" onChange={(e) => setRating(e.target.value)}/>
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" onChange={(e) => setRating(e.target.value)}/>
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" onChange={(e) => setRating(e.target.value)}/>
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" onChange={(e) => setRating(e.target.value)}/>
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" onChange={(e) => setRating(e.target.value)}/>
          <label for="star1" title="text">1 star</label>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Link to={`/club-profile/${club.id}`}>
        <Button variant="primary" onClick={handleSubmit} class="submit-review-style">
          Submit Review
        </Button>
        </Link>

      </Form>
    </div>
    </div>


    );

    };
    
    export default Review;



