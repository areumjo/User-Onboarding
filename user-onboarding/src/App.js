import React from 'react';
import './App.css';
import UserForm from './components/Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <p>Account</p>
      </header>
      <UserForm />
    </div>
  );
}

export default App;
