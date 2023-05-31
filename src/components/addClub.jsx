import firebase from "firebase/app";
import "firebase/firestore";

const clubData = {
  id: 11,
  title: "Test",
  description: "Test",
  rating: 0,
  numReviews: 0,
  imageURL: "test.png",
};

const addClub = async () => {
  try {
    const docRef = await db.collection("clubs").add(clubData);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

addClub();
