import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import clubsData from "../components/club_dump";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase-config";
import "./CompleteProfileScreen.css"; // Import the CSS file for component-specific styles

// Initialize Firebase
const auth = getAuth();

const SelectedInterest = ({ interest, onRemove }) => {
  return (
    <div className='selected-interest' onClick={() => onRemove(interest)}>
      {interest}
    </div>
  );
};

const CompleteProfileScreen = () => {
  const [major, setMajor] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [interests, setInterests] = useState([]);

  const handleInterestSelection = (e) => {
    const selectedInterest = e.target.value;
    if (!interests.includes(selectedInterest)) {
      setInterests([...interests, selectedInterest]);
    }
  };

  const handleInterestRemoval = (removedInterest) => {
    const updatedInterests = interests.filter(
      (interest) => interest !== removedInterest
    );
    setInterests(updatedInterests);
  };

  // const handleSubmit = () => {
  //   // Perform profile submission or further processing
  //   console.log({ major, schoolYear, interests });
  // };

  const handleSubmit = async () => {
    try {
      const profileCollectionRef = collection(
        firestore,
        "users",
        auth.currentUser?.uid,
        "Profile"
      );

      // Add profile data to the Profile collection
      await addDoc(profileCollectionRef, {
        major,
        schoolYear,
        interests,
      });
      console.log("Profile added successfully!");

      // Reset the form fields
      setMajor("");
      setSchoolYear("");
      setInterests([]);
    } catch (error) {
      console.error("Error adding profile:", error);
    }
  };

  return (
    <div className='complete-profile-container'>
      <h1>Complete Your Profile</h1>
      <Form>
        <div className='form-group'>
          <Form.Label>Major:</Form.Label>
          <Form.Select
            className='form-select major-school-year'
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          >
            <option id=''></option>
            <option id='major1'>Computer Science</option>
            <option id='major2'>Chemical Engineering</option>
            <option id='major3'>Business</option>
            <option id='major4'>Pre-Medicine</option>
            <option id='major6'>Economics</option>
            <option id='major7'>Visual Arts</option>
            <option id='major8'>History</option>
            <option id='major9'>Sociology</option>
            <option id='major10'>Mechanical Engineering</option>
            <option id='major11'>Civil Engineering</option>
            <option id='major12'>Gender Studies</option>
            <option id='major13'>Biology</option>
            <option id='major14'>Chemistry</option>
            <option id='major15'>Law</option>
            <option id='major16'>Digital Arts</option>
            <option id='major17'>Statitics</option>
            <option id='major18'>Human Biology</option>
            <option id='major19'>Chicano Studies</option>
            <option id='major20'>Philosophy</option>
            <option id='major21'>English</option>
            <option id='major22'>International Development</option>
            <option id='major23'>Mathematics</option>
            <option id='major24'>Biomedical Engineering</option>
            <option id='major25'>Geography</option>
            {/* Add more options */}
          </Form.Select>
        </div>

        <div className='form-group'>
          <Form.Label>UCLA Graduation Year:</Form.Label>
          <Form.Select
            className='form-select major-school-year'
            id={schoolYear}
            onChange={(e) => setSchoolYear(e.target.id)}
          >
            <option id=''></option>
            <option id='1'>1st Year</option>
            <option id='2'>2nd Year</option>
            <option id='3'>3rd Year/1st Year Transfer</option>
            <option id='4'>4th Year/2nd Year Transfer</option>
            <option id='5'>5th Year/3rd Year Transfer</option>
          </Form.Select>
        </div>

        <div className='form-group'>
          <Form.Label>Available Interests:</Form.Label>
          <Form.Select
            className='form-select'
            multiple
            onChange={handleInterestSelection}
            value={interests}
          >
            {clubsData.map((club) =>
              renderRecommendedInterests(club.RecommendedInterest)
            )}
          </Form.Select>
        </div>
        <div className='form-group'>
          <Form.Label>Selected Interests:</Form.Label>
          {interests.map((interest) => (
            <SelectedInterest
              key={interest}
              interest={interest}
              onRemove={handleInterestRemoval}
            />
          ))}
        </div>

        <div className='selected-interests-container'>
          <h4>Your Interests:</h4>
          <div>
            {interests.map((interest, index) => (
              <SelectedInterest
                key={index}
                interest={interest}
                onRemove={handleInterestRemoval}
              />
            ))}
          </div>
        </div>

        <Link to='*'>
          <Button variant='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default CompleteProfileScreen;
