import firebase from "firebase/app";
import "firebase/firestore";

db.collection("clubs")
  .add({
    id: 11,
    title: "Test",
    description: "Test",
    rating: 0,
    numReviews: 0,
    imageURL: "test.png",
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
