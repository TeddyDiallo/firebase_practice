import React from 'react';
import firebase from './firebase-config'; // Adjust the path as necessary

const TestFirebase = () => {
  const addTestData = () => {
    const testDoc = {
      name: "Test Document",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    firebase.firestore().collection("testCollection").add(testDoc)
      .then(docRef => {
        alert(`Document successfully written with doc ID: ${docRef.id}`);
      })
      .catch(error => {
        alert(`Error adding document: ${error}`);
      });
  };

  return (
    <div>
      <button onClick={addTestData}>Add Test Data to Firestore</button>
    </div>
  );
};

export default TestFirebase;
