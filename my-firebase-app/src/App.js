import React from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddUser />
        <UsersList />
      </header>
    </div>
  );
}

export default App;
