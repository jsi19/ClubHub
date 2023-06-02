import React, { useState, useEffect } from 'react';
import clubsData from '../components/club_dump';
import './HomeScreen.css';
import { collection, getDocs, query, where , deleteDoc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../firebase-config';
import { Link } from 'react-router-dom';

// Initialize Firebase
const auth = getAuth();

const MyClubs = () => {
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState('');
  const [myClubs, setMyClubs] = useState([]);

  // Load added clubs from Firestore on component mount
  useEffect(() => {
    const fetchMyClubs = async () => {
      try {
        const clubsCollectionRef = collection(
          firestore,
          'users',
          auth.currentUser?.uid,
          'MyClubs'
        );

        const clubsQuery = query(clubsCollectionRef);
        const querySnapshot = await getDocs(clubsQuery);

        const clubIds = querySnapshot.docs.map((doc) => doc.data().clubId);
        setMyClubs(clubIds);
      } catch (error) {
        console.error('Error fetching MyClubs:', error);
      }
    };

    fetchMyClubs();
  }, []);

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

  const handleRemoveClub = async (clubId) => {
    try {
      const clubsCollectionRef = collection(
        firestore,
        'users',
        auth.currentUser?.uid,
        'MyClubs'
      );
  
      // Check if clubId exists in MyClubs collection
      const clubsQuery = query(clubsCollectionRef, where('clubId', '==', clubId));
      const querySnapshot = await getDocs(clubsQuery);
  
      if (querySnapshot.empty) {
        console.log('Club does not exist in MyClubs');
        return;
      }
  
      // Get the document reference to delete
      const docRef = querySnapshot.docs[0].ref;
  
      // Delete the document
      await deleteDoc(docRef);
      console.log('Club removed successfully!');
  
      // Update the addedClubs state
      const updatedClubs = myClubs.filter((id) => id !== clubId);
      setMyClubs(updatedClubs);
    } catch (error) {
      console.error('Error removing club:', error);
    }
  };


  const filteredClubs = clubsData.filter((club) => {
    const interestMatch =
      selectedInterest === '' ||
      club.title.toLowerCase().includes(selectedInterest) ||
      club.RecommendedInterest.some((interest) =>
        interest.toLowerCase().includes(selectedInterest)
      );
    const starsMatch =
      selectedStars.length === 0 || selectedStars.includes(Math.floor(club.rating));
    return interestMatch && starsMatch && myClubs.includes(club.id);
  });

  return (
    <div>
      <section className="clubs-section">
        <h2>My Clubs</h2>
        <input
          type="text"
          placeholder="Search for your clubs..."
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
                  <div className = "buttons">
                    {myClubs.includes(club.id) ? (
                      <button onClick={() => handleRemoveClub(club.id)}>Remove Club</button>
                    ) : (
                      <button disabled>Removed</button>
                    )}
                    <Link to={`/club-profile/${club.id}`}>
                      <button style={ClubProfileButton}>Club Profile</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};


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
  border: 'none',
};

export default MyClubs;