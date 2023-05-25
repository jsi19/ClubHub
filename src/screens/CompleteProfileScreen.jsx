import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CompleteProfileScreen.css'; // Import the CSS file for component-specific styles

const SelectedInterest = ({ interest, onRemove }) => {
  return (
    <div className="selected-interest" onClick={() => onRemove(interest)}>
      {interest}
    </div>
  );
};

const CompleteProfileScreen = () => {
  const [major, setMajor] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [interests, setInterests] = useState([]);

  const handleInterestSelection = (e) => {
    const selectedInterest = e.target.value;
    if (!interests.includes(selectedInterest)) {
      setInterests([...interests, selectedInterest]);
    }
  };

  const handleInterestRemoval = (removedInterest) => {
    const updatedInterests = interests.filter((interest) => interest !== removedInterest);
    setInterests(updatedInterests);
  };

  const handleSubmit = () => {
    // Perform profile submission or further processing
    console.log({ major, schoolYear, interests });
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
            <option value="major1">Major 1</option>
            <option value="major2">Major 2</option>
            <option value="major3">Major 3</option>
            <option value="major4">Major 4</option>
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
          <Form.Label>Avaliable Interests:</Form.Label>
          <Form.Select className="form-select" multiple onChange={handleInterestSelection}>
            <option value="Interest 1">Interest 1</option>
            <option value="Interest 2">Interest 2</option>
            <option value="Interest 3">Interest 3</option>
            <option value="Interest 4">Interest 4</option>
            <option value="Interest 5">Interest 5</option>
            <option value="Interest 6">Interest 6</option>
            <option value="Interest 7">Interest 7</option>
            {/* Add more options */}
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

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CompleteProfileScreen;
