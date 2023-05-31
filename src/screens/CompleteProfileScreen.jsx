import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import "./CompleteProfileScreen.css"; // Import the CSS file for component-specific styles

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
            <option id=""></option>
            <option id="major1">Computer Science</option>
            <option id="major2">Chemical Engineering</option>
            <option id="major3">Business</option>
            <option id="major4">Pre-Medicine</option>
            <option id="major6">Economics</option>
            <option id="major7">Visual Arts</option>
            <option id="major8">History</option>
            <option id="major9">Sociology</option>
            <option id="major10">Mechanical Engineering</option>
            <option id="major11">Civil Engineering</option>
            <option id="major12">Gender Studies</option>
            <option id="major13">Biology</option>
            <option id="major14">Chemistry</option>
            <option id="major15">Law</option>
            <option id="major16">Digital Arts</option>
            <option id="major17">Statitics</option>
            <option id="major18">Human Biology</option>
            <option id="major19">Chicano Studies</option>
            <option id="major20">Philosophy</option>
            <option id="major21">English</option>
            <option id="major22">International Development</option>
            <option id="major23">Mathematics</option>
            <option id="major24">Biomedical Engineering</option>
            <option id="major25">Geography</option>
            {/* Add more options */}
          </Form.Select>
        </div>

        <div className="form-group">
          <Form.Label>UCLA Graduation Year:</Form.Label>
          <Form.Select
            className="form-select major-school-year"
            id={schoolYear}
            onChange={(e) => setSchoolYear(e.target.id)}
          >
            <option id=""></option>
            <option id="1">1st Year</option>
            <option id="2">2nd Year</option>
            <option id="3">3rd Year/1st Year Transfer</option>
            <option id="4">4th Year/2nd Year Transfer</option>
            <option id="5">5th Year/3rd Year Transfer</option>
          </Form.Select>
        </div>

        <div className="form-group">
          <Form.Label>Avaliable Interests:</Form.Label>
          <Form.Select
            className="form-select"
            multiple
            onChange={handleInterestSelection}
          >
            <option id="Interest 1" value="Business">Business</option>
            <option id="Interest 2" value="Service">Service</option>
            <option id="Interest 3" value="Consulting">Consulting</option>
            <option id="Interest 4" value="Economics">Economics</option>
            <option id="Interest 5" value="Outreach">Outreach</option>
            {/* <option id="Interest 6">Religion</option>
            <option id="Interest 7">Law</option>
            <option id="Interest 8">Social Justice</option>
            <option id="Interest 9">Social Activism</option>
            <option id="Interest 10">Computer Science</option>
            <option id="Interest 11">Engineering</option>
            <option id="Interest 12">Coding</option>
            <option id="Interest 13">AI</option>
            <option id="Interest 14">Machine Learning</option>
            <option id="Interest 15">Business</option>
            <option id="Interest 16">Career Planning</option>
            <option id="Interest 17">Chemical Engineering</option>
            <option id="Interest 18">Engineering</option>
            <option id="Interest 19">Culture</option>
            <option id="Interest 20">Healthcare</option>
            <option id="Interest 21">Sports</option>
            <option id="Interest 22">Fraternity</option>
            <option id="Interest 23">Soroity</option>
            <option id="Interest 24">Technology</option>
            <option id="Interest 25">Science</option>
            <option id="Interest 26">Chemistry</option>
            <option id="Interest 27">Biology</option>
            <option id="Interest 28">Tech</option>
            <option id="Interest 29">Software engineering</option>
            <option id="Interest 30">Quiz</option>
            <option id="Interest 31">Gameshow</option>
            <option id="Interest 32">Trivia</option>
            <option id="Interest 33">College Bowl</option>
            <option id="Interest 34">Latinx</option>
            <option id="Interest 35">Jewish</option>
            <option id="Interest 36">Indian</option>
            <option id="Interest 37">Native American</option>
            <option id="Interest 38">Baseball</option>
            <option id="Interest 39">Jiu Jitsu</option>
            <option id="Interest 40">Sports Club</option>
            <option id="Interest 41">Competition</option>
            <option id="Interest 42">MMA</option>
            <option id="Interest 43">Wrestling</option>
            <option id="Interest 44">MMA</option>
            <option id="Interest 45">Rowing</option>
            <option id="Interest 46">Paddling</option>
            <option id="Interest 47">Horses</option>
            <option id="Interest 48">Horseback Riding</option>
            <option id="Interest 49">Esports</option>
            <option id="Interest 50">Gaming</option>
            <option id="Interest 51">Video Games</option>
            <option id="Interest 52">Golf</option>
            <option id="Interest 53">Gymnastics</option>
            <option id="Interest 54">Tumbling</option>
            <option id="Interest 55">Judo</option>
            <option id="Interest 56">Lifting</option>
            <option id="Interest 57">Fitness</option>
            <option id="Interest 58">Gym</option>
            <option id="Interest 59">Powerlifitng</option>
            <option id="Interest 60">Swimming</option>
            <option id="Interest 61">Wushu</option>
            <option id="Interest 62">Chinese</option>
            <option id="Interest 63">Art</option>
            <option id="Interest 64">LGBTQ</option>
            <option id="Interest 65">Sexual-Awareness</option>
            <option id="Interest 66">Gender</option>
            <option id="Interest 67">Inclusivity</option>
            <option id="Interest 68">Queer</option>
            <option id="Interest 69">Sexuality</option>
            <option id="Interest 70">Analytics</option>
            <option id="Interest 71">Research</option>
            <option id="Interest 72">Investment</option>
            <option id="Interest 73">Stocks</option>
            <option id="Interest 74">Banking</option>
            <option id="Interest 75">Visual Arts</option>
            <option id="Interest 76">Photography</option>
            <option id="Interest 77">Digital Art</option>
            <option id="Interest 78">Painting</option>
            <option id="Interest 79">Design</option>
            <option id="Interest 80">Software engineering</option> */}

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
