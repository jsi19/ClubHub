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
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../firebase-config";
import "./CompleteProfileScreen.css";

// Initialize Firebase
const auth = getAuth();

const SelectedInterest = ({ interest, onRemove }) => {
  return (
    <div className="selected-interest" onClick={() => onRemove(interest)}>
      {interest}
    </div>
  );
};

const CompleteProfileScreen = () => {
  const [major, setMajor] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    // Load saved data from localStorage
    const savedMajor = localStorage.getItem("selectedMajor");
    const savedSchoolYear = localStorage.getItem("selectedSchoolYear");
    const savedInterests = JSON.parse(localStorage.getItem("selectedInterests"));

    if (savedMajor) setMajor(savedMajor);
    if (savedSchoolYear) setSchoolYear(savedSchoolYear);
    if (savedInterests) setInterests(savedInterests);
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("selectedMajor", major);
    localStorage.setItem("selectedSchoolYear", schoolYear);
    localStorage.setItem("selectedInterests", JSON.stringify(interests));
  }, [major, schoolYear, interests]);

  useEffect(() => {
    // Fetch interests from Firestore collection and update state
    const fetchInterests = async () => {
      try {
        const profileCollectionRef = collection(
          firestore,
          "users",
          auth.currentUser?.uid,
          "Profile"
        );

        const profileQuerySnapshot = await getDocs(profileCollectionRef);
        if (!profileQuerySnapshot.empty) {
          const profileData = profileQuerySnapshot.docs[0].data();
          setInterests(profileData.interests);
        }
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    };

    fetchInterests();
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
      const profileCollectionRef = collection(
        firestore,
        "users",
        auth.currentUser?.uid,
        "Profile"
      );

      const profileQuerySnapshot = await getDocs(profileCollectionRef);
      if (profileQuerySnapshot.empty) {
        // No profile document exists, create a new one
        await addDoc(profileCollectionRef, {
          major,
          schoolYear,
          interests,
        });
        console.log("Profile added successfully!");
      } else {
        // Profile document already exists, update it
        const profileDocRef = profileQuerySnapshot.docs[0].ref;
        await updateDoc(profileDocRef, {
          major,
          schoolYear,
          interests,
        });
        console.log("Profile updated successfully!");
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
    <div className="complete-profile-container">
      <h1>Complete Your Profile</h1>
      <Form>
        <div className="form-group">
          <Form.Label>Major:</Form.Label>
          <Form.Select
            className="form-select major-school-year"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          >
            <option value=""></option>
            <option value="Computer Science">Computer Science</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Business">Business</option>
            <option value="Pre-Medicine">Pre-Medicine</option>
            <option value="Economics">Economics</option>
            <option value="Visual Arts">Visual Arts</option>
            <option value="History">History</option>
            <option value="Sociology">Sociology</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Gender Studies">Gender Studies</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Law">Law</option>
            <option value="Digital Arts">Digital Arts</option>
            <option value="Statitics">Statitics</option>
            <option value="Human Biology">Human Biology</option>
            <option value="Chicano Studies">Chicano Studies</option>
            <option value="Philosophy">Philosophy</option>
            <option value="English">English</option>
            <option value="International Development">International Development</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Biomedical Engineering">Biomedical Engineering</option>
            <option value="Geography">Geography</option>
            {/* Add more options */}
          </Form.Select>
        </div>

        <div className="form-group">
          <Form.Label>UCLA Graduation Year:</Form.Label>
          <Form.Select
            className="form-select major-school-year"
            value={schoolYear}
            onChange={(e) => setSchoolYear(e.target.value)}
          >
            <option value=""></option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year/1st Year Transfer</option>
            <option value="4">4th Year/2nd Year Transfer</option>
            <option value="5">5th Year/3rd Year Transfer</option>
          </Form.Select>
        </div>

        <div className="form-group">
          <Form.Label>Available Interests:</Form.Label>
          <Form.Select
            className="form-select"
            multiple
            onChange={handleInterestSelection}
            value={interests}
          >
            {renderRecommendedInterests()}
          </Form.Select>
        </div>

        <div className="selected-interests-container">
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

        <Link to="*">
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default CompleteProfileScreen;
