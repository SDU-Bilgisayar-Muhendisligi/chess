import React from 'react'

function Login() {
  return (
    
    <div className="flex justify-center items-center h-screen">
      
    <div className="form-control center">
      
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-white-900">
            Sign in to your account
          </h2>
          
      <label htmlFor="loginName" className="label">
        <span className="label-text">Username or email</span>
      </label>
      <input
        type="text"
        pattern="[A-Za-z0-9]+"
        title="Alphanumeric characters only"
        id="loginName"
        name="loginName"
        placeholder="username"
        className="input input-bordered"
        maxLength={16}
        minLength={2}
        required
      />
      <label htmlFor="loginPassword" className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="password"
        id="loginPassword"
        name="loginPassword"
        placeholder="password"
        className="input input-bordered"
        minLength={3}
        required
      />
      <button type="submit" className="btn bg-[#7FA650] mt-8">
        Login
      </button>
    </div>
  </div>
  )
}

export default Login