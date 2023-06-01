import React, { useState, useEffect } from 'react';
import clubsData from '../components/club_dump';
import './TopClubs.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../firebase-config';

// Initialize Firebase
const auth = getAuth();

const TopClubs = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [topClubs, setTopClubs] = useState([]);

  // Load user interests from Firestore on component mount
  useEffect(() => {
    const fetchUserInterests = async () => {
      try {
        const profileCollectionRef = collection(firestore, 'users', auth.currentUser?.uid, 'Profile');
        const profileQuerySnapshot = await getDocs(profileCollectionRef);
        const profileData = profileQuerySnapshot.docs[0]?.data();

        if (profileData && profileData.interests) {
          const userInterests = profileData.interests.map((interest) => interest.toLowerCase());
          const matchingClubs = clubsData.filter((club) =>
            club.RecommendedInterest.some((interest) => userInterests.includes(interest.toLowerCase()))
          );
          setTopClubs(matchingClubs.slice(0, 5));
        }
      } catch (error) {
        console.error('Error fetching user interests:', error);
      }
    };

    fetchUserInterests();
  }, []);

  const handleInterestSelection = (event) => {
    setSelectedInterest(event.target.value);
  };

  const filteredClubs = topClubs.filter((club) => {
    const temp = selectedInterest.toLowerCase()
    const interestMatch =
      temp === '' ||
      club.title.toLowerCase().includes(temp) ||
      club.RecommendedInterest.some((interest) => interest.toLowerCase().includes(temp));
    return interestMatch;
  });

  return (
    <div>
      <section className="clubs-section">
        <h2>Top 5 Recommended Clubs</h2>
        <input
          type="text"
          placeholder="Search for top clubs..."
          value={selectedInterest}
          onChange={handleInterestSelection}
          style={{ width: '170px' }}
        />
      </section>
      <section className="content-section">
        <section className="filter-section"/>
        <section className="clubs-list">
          {filteredClubs.map((club) => {
            return (
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
            );
          })}
        </section>
        <section className="filter-section"/>
      </section>
    </div>
  );
};

export default TopClubs;
