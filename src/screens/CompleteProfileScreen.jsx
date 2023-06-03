import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import clubsData from "../components/club_dump";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase-config";
import "./CompleteProfileScreen.css";

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

  useEffect(() => {
    // Fetch profile data from Firestore and prepopulate the form fields
    const fetchProfileData = async () => {
      try {
        const userDocRef = doc(firestore, "users", auth.currentUser?.uid);
        const profileCollectionRef = collection(userDocRef, "Profile");

        const profileQuerySnapshot = await getDocs(profileCollectionRef);

        if (!profileQuerySnapshot.empty) {
          const profileDocData = profileQuerySnapshot.docs[0].data();
          setMajor(profileDocData.major || "");
          setSchoolYear(profileDocData.schoolYear || "");
          setInterests(profileDocData.interests || []);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

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

  function renderRecommendedInterests() {
    const availableInterests = clubsData.reduce((interests, club) => {
      return interests.concat(club.RecommendedInterest);
    }, []);

    const uniqueInterests = Array.from(new Set(availableInterests));

    return uniqueInterests.map((interest, index) => (
      <option key={index} value={interest}>
        {interest}
      </option>
    ));
  }

  const handleSubmit = async () => {
    try {
      const userDocRef = doc(firestore, "users", auth.currentUser?.uid);
      const profileCollectionRef = collection(userDocRef, "Profile");

      const profileQuerySnapshot = await getDocs(profileCollectionRef);

      if (profileQuerySnapshot.empty) {
        // No profile documents exist, create a new one
        const newProfileDocRef = await addDoc(profileCollectionRef, {
          major,
          schoolYear,
          interests,
        });
        console.log("Profile added successfully!", newProfileDocRef.id);
      } else {
        // Profile document already exists, update the first document
        const profileDocRef = profileQuerySnapshot.docs[0].ref;
        await updateDoc(profileDocRef, {
          major,
          schoolYear,
          interests,
        });
        console.log("Profile updated successfully!", profileDocRef.id);
      }

      // Reset the form fields
      setMajor("");
      setSchoolYear("");
      setInterests([]);
    } catch (error) {
      console.error("Error updating profile:", error);
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
            <option value=''></option>
            <option value='Computer Science'>Computer Science</option>
            <option value='Chemical Engineering'>Chemical Engineering</option>
            <option value='Business'>Business</option>
            <option value='Biology'>Biology</option>
            <option value='Chemistry'>Chemistry</option>
            <option value='Civil Engineering'>Civil Engineering</option>
            <option value='Law'>Law</option>
            <option value='Pre-Medicine'>Pre-Medicine</option>
            <option value='Linguistics'>Linguistics</option>
            <option value='Visual Arts'>Visual Arts</option>
            <option value='Economics'>Economics</option>
            <option value='Mechanical Engineering'>
              Mechanical Engineering
            </option>
            <option value='Computer Engineering'>Computer Engineering</option>
            <option value='Business'>Business</option>
            {/* Add more options */}
          </Form.Select>
        </div>

        <div className='form-group'>
          <Form.Label>UCLA Graduation Year:</Form.Label>
          <Form.Select
            className='form-select major-school-year'
            value={schoolYear}
            onChange={(e) => setSchoolYear(e.target.value)}
          >
            <option value=''></option>
            <option value='1'>1st Year</option>
            <option value='2'>2nd Year</option>
            <option value='3'>3rd Year/1st Year Transfer</option>
            <option value='4'>4th Year/2nd Year Transfer</option>
            <option value='5'>5th Year/3rd Year Transfer</option>
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
            {renderRecommendedInterests()}
          </Form.Select>
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
