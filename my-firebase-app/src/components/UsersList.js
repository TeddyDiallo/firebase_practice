import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userData = await getDocs(usersCollection);
      setUsers(userData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default UsersList;
