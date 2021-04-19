import React, { useState } from 'react';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      age,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="form-control"
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="text-center">
        <p>{userName}</p>
        <p>{age}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
      </div>
    </>
  );
};

export default ContactForm;
