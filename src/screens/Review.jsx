import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import clubsData from '../components/club_dump';
import './Review.css';


const Review = () => {
    const [reviewTitle, setReviewTitle] = useState('');
    const [rating, setRating] = useState('');
    const [reviewBody, setReviewBody] = useState('');
      
    const handleSubmit = () => {
        // Perform profile submission or further processing
        console.log({ reviewTitle, rating, reviewBody });
    }
      

    return (
    <div>
        
    <div class="ratingForm">
      <Form>
        <div>
          <label for="reviewTitle">Review Title:</label><br/>
          <input 
            type="text" 
            id="reviewTitle"
            placeholder="Title Here..."
            name="reviewTitle"/>
          <br/>
        </div>
        <br></br>

        <div>
          <label for="reviewBody">Review:</label><br/>
          <input type="text" id="reviewBody" name="reviewBody"/><br/>
        </div>

        {/* <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head> */}
        <label for="rating" >Rate:</label><br></br>
        <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star </label>
        </div>
        <br></br>


        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    </div>


    );

    };
    
    export default Review;