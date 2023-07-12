import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from '../components/registerValidation';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    level: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    try {
      const response = await axios.post('http://localhost:8081/chess', values);
      console.log(response.data);
      console.log("Kayıt başarılı");


      window.localStorage.setItem("isLoggedIn", true);
        const username = values.name;
       // window.localStorage.setItem("name", username);
        window.localStorage.setItem("email", values.email);
      navigate('/');
    } catch (error) {
      console.log(error);
      console.log("Kayıt başarısız");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form action="" className="form-control" onSubmit={handleSubmit}>
          <h1 className="mt-10 text-center text-4xl font-bold leading-9 text-white-900">
            Join Now
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-white-900">
            and Start Playing Chess!
          </h2>
          <label htmlFor="name" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            pattern="[A-Za-z0-9]+"
            title="Alphanumeric characters only"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInput}
            placeholder="username"
            className="input input-bordered"
            maxLength={16}
            minLength={2}
            required
          />

          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInput}
            placeholder="email"
            className="input input-bordered"
            minLength={4}
          />

          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleInput}
            placeholder="password"
            className="input input-bordered"
            minLength={3}
            required
          />

          <div className="containerr">
            <div className="radio-tile-group">
              <div className="input-container">
                <input
                  type="radio"
                  id="new"
                  name="level"
                  value="new"
                  className="radio-button"
                  checked={values.level === "new"}
                  onChange={handleInput}
                />
                <label htmlFor="new" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG  */}</svg>
                  </div>
                  <div className="radio-tile-label small-label">NEW</div>
                </label>
              </div>

              <div className="input-container">
                <input
                  type="radio"
                  id="beginner"
                  name="level"
                  value="beginner"
                  className="radio-button"
                  checked={values.level === "beginner"}
                  onChange={handleInput}
                />
                <label htmlFor="beginner" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG */}</svg>
                  </div>
                  <div className="radio-tile-label">Beginner</div>
                </label>
              </div>

              <div className="input-container">
                <input
                  type="radio"
                  id="intermediate"
                  name="level"
                  value="intermediate"
                  className="radio-button"
                  checked={values.level === "intermediate"}
                  onChange={handleInput}
                />
                <label htmlFor="intermediate" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG  */}</svg>
                  </div>
                  <div className="radio-tile-label">Intermediate</div>
                </label>
              </div>

              <div className="input-container">
                <input
                  type="radio"
                  id="advanced"
                  name="level"
                  value="advanced"
                  className="radio-button"
                  checked={values.level === "advanced"}
                  onChange={handleInput}
                />
                <label htmlFor="advanced" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG  */}</svg>
                  </div>
                  <div className="radio-tile-label">Advanced</div>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn mt-10 bg-[#7FA650]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
