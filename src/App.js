import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit} className="App-form">
          <div>
            <label>First Name: </label>
            <input
              id='first'
              type="text"
              name='fname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              id='last'
              type="text"
              name='lname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <button type='submit' style={{width: '4rem'}}>Submit</button>
        </form>
        {fullName &&
        <div>
        <p>Full Name: {fullName}</p>
        </div>}
        
      </header>
    </div>
  );
}

export default App;
