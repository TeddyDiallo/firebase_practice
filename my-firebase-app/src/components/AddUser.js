import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const AddUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        email: email,
        password: password // Caution: Storing passwords in plaintext is a bad practice
      });
      setEmail('');
      setPassword('');
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
