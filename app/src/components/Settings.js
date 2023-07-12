import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:8081/current-user', {
          params: {
            email: window.localStorage.getItem("email") 
          }
        });
        const currentUser = response.data;
        setUsername(currentUser.name);
        setEmail(currentUser.email);
      
      } catch (error) {
        console.error(error);
        setMessage('Failed to fetch user data');
      }
    };

    fetchCurrentUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/update-user', {
        email: email,
        name: username,
        password: password
      });
      window.localStorage.setItem("name", response.data.name);
      
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to update user');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Account settings</h2>
        <p>{message}</p>

        <form className="form-control mt-4" onSubmit={handleSubmit}>
          <label className="label" htmlFor="updateUsername">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            id="updateUsername"
            name="updateUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full"
            maxLength={16}
            minLength={2}
          />
          <label className="label" htmlFor="updateEmail">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            id="updateEmail"
            name="updateEmail"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={4}
          />
          <label className="label" htmlFor="updatePassword">
            <span className="label-text">New Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            id="updatePassword"
            name="updatePassword"
            placeholder="New password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={3}
          />
          <label className="label" htmlFor="confirmPassword">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password (optional)"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={3}
          />

          <div className="mt-4">
            <button type="submit" className="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
