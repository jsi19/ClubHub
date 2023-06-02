import React, { useState } from 'react';
import clubsData from '../components/club_dump';
import './HomeScreen.css';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../firebase-config';
import { Link } from 'react-router-dom';

// Initialize Firebase
const auth = getAuth();

const HomeScreen = () => {
  console.log(clubsData); // Add this line to log the clubsData
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState('');
  const [addedClubs, setAddedClubs] = useState([]);

  const ClubProfileButton = {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#115D81',
    fontWeight: 'bold',
    fontSize: '16px',
    alignItems: 'center',
    color: 'white',
    margin: '10px 2px',
    padding: '20px 50px',
    display: 'inline-block',
    border: 'none',}

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

  const handleAddClub = async (clubId) => {
    try {
      const clubsCollectionRef = collection(
        firestore,
        'users',
        auth.currentUser?.uid,
        'MyClubs'
      );

      // Check if clubId already exists in MyClubs collection
      const clubsQuery = query(clubsCollectionRef, where('clubId', '==', clubId));
      const querySnapshot = await getDocs(clubsQuery);

      if (!querySnapshot.empty) {
        console.log('Club already exists in MyClubs');
        return;
      }

      // Add clubId to MyClubs collection
      await addDoc(clubsCollectionRef, { clubId });
      console.log('Club added successfully!');

      // Update the addedClubs state
      setAddedClubs([...addedClubs, clubId]);
    } catch (error) {
      console.error('Error adding club:', error);
    }
  };

  const filteredClubs = clubsData.filter((club) => {
    const temp = selectedInterest.toLowerCase()
    const interestMatch =
      temp === '' ||
      club.title.toLowerCase().includes(temp) ||
      club.RecommendedInterest.some((interest) =>
        interest.toLowerCase().includes(temp)
      );
    const starsMatch =
      selectedStars.length === 0 || selectedStars.includes(Math.floor(club.rating));
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
            <h3 className="text-element">Filter by Rating</h3>
            <div className="star-section">
              {Array.from({ length: 5 }, (_, index) => {
                const starCount = 5 - index;
                return (
                  <label key={starCount} className="star-element">
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
                {addedClubs.includes(club.id) ? (
                  <button disabled>Added</button>
                ) : (
                  <button onClick={() => handleAddClub(club.id)}>Add Club</button>
                )}
                <Link to={`/club-profile/${club.id}`}>
                       <button style={ClubProfileButton}>Club Profile</button>
                  </Link>
              </div>
            </div>
          ))}
         
        </section>
      </section>
    </div>
  );


};

export default HomeScreen;
