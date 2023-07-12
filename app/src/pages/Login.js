import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from '../components/LoginValidation';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';


function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [username, setUsername] = useState("username");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { setUser } = useContext(UserContext);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };


  const getUserData = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8081/login-json/${email}`);
  
      const userData = response.data;
      const username = userData[0].name; 
      console.log('Kullanıcı adı:', username);
  
      return username; 
    } catch (error) {
      console.log("Kullanıcı verilerini alırken bir hata oluştu");
      console.log(error);
    }
  };


  const handleLogin = async () => {
    console.log('handleLogin called');
    const username = await getUserData(values.email); 
    console.log('Kullanıcı adı:', username, isLoggedIn);
    setUsername(username);
    getUserData(values.email);
    setUser((prevUser) => ({
      ...prevUser,
      name: username,
      isLoggedIn: true,
    }));

    setIsLoggedIn(true); 
  
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    try {
      const response = await axios.post('http://localhost:8081/login', values);
      if (response.data === "Success") {
        console.log('Giriş yapılıyor:', values.email, values.password);
        console.log("Giriş başarılı");
        handleLogin();
      
        window.localStorage.setItem("isLoggedIn", true);
        const username = await getUserData(values.email);
  
        window.localStorage.setItem("email", values.email);
   
     
        
       // console.log(setIsLoggedIn);
        navigate('/');
        
      } else {
        alert("Kullanıcı adı veya şifre hatalı");
        console.log("Giriş başarısız");
        console.log("Kullanıcı adı veya şifre hatalı");
      }
    } catch (error) {
      console.log("Bir hata oluştu");
      console.log(error);
    }
  };
/*
const handleSubmit = async (event) => {
  event.preventDefault();
  setErrors(Validation(values));
  try {
    const response = await axios.post('http://localhost:8081/login', values);
    if (response.data === "Success") {
      console.log('Giriş yapılıyor:', values.email, values.password);
      console.log("Giriş başarılı");


      try {
        const userResponse = await axios.get('http://localhost:8081/login-json', {
          params: {
            email: values.email
          }
        });

        const user = userResponse.data;
        console.log('Kullanıcı adı:', user.name);


        setUser((prevUser) => ({
          ...prevUser,
          name: user.name,
          isLoggedIn: true,
        }));

        navigate('/');
      } catch (error) {
        console.log("Kullanıcı adını alırken bir hata oluştu");
        console.log(error);
      }
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
      console.log("Giriş başarısız");
      console.log("Kullanıcı adı veya şifre hatalı");
    }
  } catch (error) {
    console.log("Bir hata oluştu");
    console.log(error);
  }
};
*/
  return (
    <div className="flex justify-center items-center h-screen">
      <form action="" className="form-control center" onSubmit={handleSubmit}>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-white-900">
          Sign in to your account
        </h2>

        <label htmlFor="email" className="label">
          <span className="label-text">
            <strong>Email</strong>
          </span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInput}
          className="input input-bordered"
          maxLength={30}
          minLength={2}
          required
        />
        {errors.email && <span className="text-red">{errors.email}</span>}

        <label htmlFor="password" className="label">
          <span className="label-text">
            <strong>Password</strong>
          </span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleInput}
          className="input input-bordered"
          minLength={3}
          required
        />
        {errors.password && <span className="text-red">{errors.password}</span>}

        <button type="submit" className="btn w-100 bg-[#7FA650] mt-8">
          Login
        </button>

        <p>or</p>
        <Link to="/register" className="btn btn-default border w-100">
          Create Account
        </Link>
      </form>
     
    </div>
  );
}

export default Login;
