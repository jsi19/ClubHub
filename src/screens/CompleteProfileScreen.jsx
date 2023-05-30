import React, { useState } from "react";
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
            <option value=""></option>
            <option value="major1">Computer Science</option>
            <option value="major2">Chemical Engineering</option>
            <option value="major3">Business</option>
            <option value="major4">Pre-Medicine</option>
            <option value="major6">Economics</option>
            <option value="major7">Visual Arts</option>
            <option value="major8">History</option>
            <option value="major9">Sociology</option>
            <option value="major10">Mechanical Engineering</option>
            <option value="major11">Civil Engineering</option>
            <option value="major12">Gender Studies</option>
            <option value="major13">Biology</option>
            <option value="major14">Chemistry</option>
            <option value="major15">Law</option>
            <option value="major16">Digital Arts</option>
            <option value="major17">Statitics</option>
            <option value="major18">Human Biology</option>
            <option value="major19">Chicano Studies</option>
            <option value="major20">Philosophy</option>
            <option value="major21">English</option>
            <option value="major22">International Development</option>
            <option value="major23">Mathematics</option>
            <option value="major24">Biomedical Engineering</option>
            <option value="major25">Geography</option>
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
          <Form.Select
            className="form-select"
            multiple
            onChange={handleInterestSelection}
          >
            <option value="Interest 1">Business</option>
            <option value="Interest 2">Service</option>
            <option value="Interest 3">Consulting</option>
            <option value="Interest 4">Economics</option>
            <option value="Interest 5">Outreach</option>
            <option value="Interest 6">Religion</option>
            <option value="Interest 7">Law</option>
            <option value="Interest 8">Social Justice</option>
            <option value="Interest 9">Social Activism</option>
            <option value="Interest 10">Computer Science</option>
            <option value="Interest 11">Engineering</option>
            <option value="Interest 12">Coding</option>
            <option value="Interest 13">AI</option>
            <option value="Interest 14">Machine Learning</option>
            <option value="Interest 15">Business</option>
            <option value="Interest 16">Career Planning</option>
            <option value="Interest 17">Chemical Engineering</option>
            <option value="Interest 18">Engineering</option>
            <option value="Interest 19">Culture</option>
            <option value="Interest 20">Healthcare</option>
            <option value="Interest 21">Sports</option>
            <option value="Interest 22">Fraternity</option>
            <option value="Interest 23">Soroity</option>
            <option value="Interest 24">Technology</option>
            <option value="Interest 25">Science</option>
            <option value="Interest 26">Chemistry</option>
            <option value="Interest 27">Biology</option>
            <option value="Interest 28">Tech</option>
            <option value="Interest 29">Software engineering</option>
            <option value="Interest 30">Quiz</option>
            <option value="Interest 31">Gameshow</option>
            <option value="Interest 32">Trivia</option>
            <option value="Interest 33">College Bowl</option>
            <option value="Interest 34">Latinx</option>
            <option value="Interest 35">Jewish</option>
            <option value="Interest 36">Indian</option>
            <option value="Interest 37">Native American</option>
            <option value="Interest 38">Baseball</option>
            <option value="Interest 39">Jiu Jitsu</option>
            <option value="Interest 40">Sports Club</option>
            <option value="Interest 41">Competition</option>
            <option value="Interest 42">MMA</option>
            <option value="Interest 43">Wrestling</option>
            <option value="Interest 44">MMA</option>
            <option value="Interest 45">Rowing</option>
            <option value="Interest 46">Paddling</option>
            <option value="Interest 47">Horses</option>
            <option value="Interest 48">Horseback Riding</option>
            <option value="Interest 49">Esports</option>
            <option value="Interest 50">Gaming</option>
            <option value="Interest 51">Video Games</option>
            <option value="Interest 52">Golf</option>
            <option value="Interest 53">Gymnastics</option>
            <option value="Interest 54">Tumbling</option>
            <option value="Interest 55">Judo</option>
            <option value="Interest 56">Lifting</option>
            <option value="Interest 57">Fitness</option>
            <option value="Interest 58">Gym</option>
            <option value="Interest 59">Powerlifitng</option>
            <option value="Interest 60">Swimming</option>
            <option value="Interest 61">Wushu</option>
            <option value="Interest 62">Chinese</option>
            <option value="Interest 63">Art</option>
            <option value="Interest 64">LGBTQ</option>
            <option value="Interest 65">Sexual-Awareness</option>
            <option value="Interest 66">Gender</option>
            <option value="Interest 67">Inclusivity</option>
            <option value="Interest 68">Queer</option>
            <option value="Interest 69">Sexuality</option>
            <option value="Interest 70">Analytics</option>
            <option value="Interest 71">Research</option>
            <option value="Interest 72">Investment</option>
            <option value="Interest 73">Stocks</option>
            <option value="Interest 74">Banking</option>
            <option value="Interest 75">Visual Arts</option>
            <option value="Interest 76">Photography</option>
            <option value="Interest 77">Digital Art</option>
            <option value="Interest 78">Painting</option>
            <option value="Interest 79">Design</option>
            <option value="Interest 80">Software engineering</option>

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
