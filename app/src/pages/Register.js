import React, { useState } from 'react';
import '../App.css';
function Register() {

  const [level, setLevel] = useState("new");

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="form-control">
          <h1 className="mt-10 text-center text-4xl font-bold leading-9 text-white-900">
            Join Now

          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-white-900">

            and Start Playing Chess!
          </h2>
          <label htmlFor="registerName" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            pattern="[A-Za-z0-9]+"
            title="Alphanumeric characters only"
            id="registerName"
            name="registerName"
            placeholder="username"
            className="input input-bordered"
            maxLength={16}
            minLength={2}
            required
          />

          <label htmlFor="registerEmail" className="label">
            <span className="label-text">Email (optional)</span>
          </label>
          <input
            type="email"
            id="registerEmail"
            name="registerEmail"
            placeholder="email"
            className="input input-bordered"
            minLength={4}
          />

          <label htmlFor="registerPassword" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            id="registerPassword"
            name="registerPassword"
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
                  checked={level === "new"}
                  onChange={handleChange}
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
                  checked={level === "beginner"}
                  onChange={handleChange}
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
                  checked={level === "intermediate"}
                  onChange={handleChange}
                />
                <label htmlFor="intermediate" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG  */}</svg>
                  </div>
                  <div className="radio-tile-label">intermediate</div>
                </label>
              </div>

              <div className="input-container">
                <input
                  type="radio"
                  id="advanced"
                  name="level"
                  value="advanced"
                  className="radio-button"
                  checked={level === "advanced"}
                  onChange={handleChange}
                />
                <label htmlFor="advanced" className="radio-tile">
                  <div className="icon">
                    <svg>{/* SVG  */}</svg>
                  </div>
                  <div className="radio-tile-label">advanced</div>
                </label>
              </div>
            </div>
          </div>





          <button type="submit" className="btn mt-10 bg-[#7FA650]">
            Sign Up
          </button>
        </div>
      </div>

    </div>





  )
}

export default Register