import React from 'react';

function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.updateUsername.value;
    const email = e.target.updateEmail.value;
    const password = e.target.updatePassword.value;

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Account settings</h2>

        <form className="form-control mt-4" onSubmit={handleSubmit}>
          <label className="label" htmlFor="updateUsername">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            pattern="[A-Za-z0-9]+"
            title="Alphanumeric characters only"
            id="updateUsername"
            name="updateUsername"
            placeholder="Username"
            defaultValue={undefined}
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
            minLength={4}
          />
          <label className="label" htmlFor="updatePassword">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            id="updatePassword"
            name="updatePassword"
            placeholder="New password (optional)"
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
