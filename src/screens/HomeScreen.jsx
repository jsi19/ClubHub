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
    const interestMatch = selectedInterest === '' || club.title.includes(selectedInterest);
    const starsMatch = selectedStars.length === 0 || selectedStars.includes(Math.floor(club.rating));
    return interestMatch && starsMatch;
  });
  

  return (
    <div>
      <section className="clubs-section">
        <h2>What clubs best fit your interest</h2>
        <input
          type="text"
          placeholder="Search by interest/name..."
          value={selectedInterest}
          onChange={handleInterestSelection}
          style={{ width: '170px' }}
        />
      </section>
      <section className="content-section">
        <section className="filter-section">
          <div className="rating-filter">
            <h3 className='text-element'>Filter by Rating</h3>
            <div className='star-section'>
              {Array.from({ length: 5 }, (_, index) => {
                const starCount = 5 - index;
                return (
                  <label key={starCount} className='star-element'>
                    <input
                      type="checkbox"
                      checked={selectedStars.includes(starCount)}
                      onChange={() => handleStarSelection(starCount)}
                    />
                    <span className="star-icon" style={{ color: '#50B0C8' }}>
                      {Array(starCount).fill('★').join('')}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* <div className="interest-filter">
            <h3 className='text-element'>Filter by Interest</h3>
          </div> */}
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
                <div className="recommended-interests">
                  Recommended if interests are: 
                  {club.RecommendedInterest.map((interest, index) => (
                    <span key={index} className="interest-item">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default HomeScreen;
