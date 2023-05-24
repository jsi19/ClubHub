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
        <Form.Group controlId="major">
          <Form.Label>Select your major</Form.Label>
          <Form.Select
            className="form-select"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          >
            <option value="">Select your major</option>
            <option value="major1">Major 1</option>
            <option value="major2">Major 2</option>
            {/* Add more options */}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="schoolYear">
          <Form.Label>Select your school year</Form.Label>
          <Form.Select
            className="form-select"
            value={schoolYear}
            onChange={(e) => setSchoolYear(e.target.value)}
          >
            <option value="">Select your school year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="interests">
          <Form.Label>Select your interests</Form.Label>
          <Form.Select className="form-select" multiple onChange={handleInterestSelection}>
            <option value="interest1">Interest 1</option>
            <option value="interest2">Interest 2</option>
            <option value="interest2">Interest 3</option>
            <option value="interest2">Interest 4</option>
            <option value="interest2">Interest 5</option>
            <option value="interest2">Interest 6</option>
            <option value="interest2">Interest 7</option>
            {/* Add more options */}
          </Form.Select>
        </Form.Group>

        <div>
          <h4>Selected Interests:</h4>
          <div className="selected-interests-container">
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
