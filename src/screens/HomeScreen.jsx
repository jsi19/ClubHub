import React, { useState } from 'react';
import clubsData from '../components/club_dump'; // Update the import path
import './HomeScreen.css';

const HomeScreen = () => {
  console.log(clubsData); // Add this line to log the clubsData
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState('');

  const handleStarSelection = (star) => {
    if (selectedStars.includes(star)) {
      setSelectedStars(selectedStars.filter((s) => s !== star));
    } else {
      setSelectedStars([...selectedStars, star]);
    }
  };

  const handleInterestSelection = (event) => {
    setSelectedInterest(event.target.value);
  };

  const filteredClubs = clubsData.filter((club) => {
    return (
      selectedStars.includes(club.rating) ||
      (selectedInterest === '' || club.title.includes(selectedInterest))
    );
  });

  return (
    <div>
      <section className="clubs-section">
        <h2>What clubs best fit your interest</h2>
        <input
          type="text"
          placeholder="Search by interest..."
          value={selectedInterest}
          onChange={handleInterestSelection}
        />
      </section>
      <section className="content-section">
        <section className="filter-section">
          <div className="rating-filter">
            <h3>Filter by Rating</h3>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star}>
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(star)}
                    onChange={() => handleStarSelection(star)}
                  />
                  {Array(star)
                    .fill('★')
                    .join('')}
                </label>
              ))}
            </div>
          </div>

          <div className="interest-filter">
            <h3>Filter by Interest</h3>
            {/* Implement your dropdown component for interests here */}
          </div>
        </section>

        <section className="clubs-list">
          {filteredClubs.map((club) => (
            <div key={club.id} className="club-item">
              <img src={club.imageURL} alt={club.title} className="club-image" />
              <div className="club-details">
                <h4>{club.title}</h4>
                <p>{club.description}</p>
                <p>Rating: {club.rating}</p>
                <p>Reviews: {club.numReviews}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default HomeScreen;
