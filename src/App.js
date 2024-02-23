import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const submitForm = () => {
    if (firstName !== '' && lastName !== '') {
      setFullName(`Full Name: ${firstName} ${lastName}`);
      setError('');
    } else {
      setFullName('');
      setError('Please fill in both first and last name.');
    }
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>

      <div id="result">
        {fullName && <p>{fullName}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
