import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import img6 from '../assets/img6.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get('https://667c98cf3c30891b865d188b.mockapi.io/books', {
        params: {
          email,
          password,
        },
      });

      const user = response.data.find((user) => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem('userId', user.id);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <>
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center rounded">
        <div className="flex items-center justify-between rounded">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              <img src="https://merakiui.com/images/full-logo.svg" style={{ width: "120px", height: "50px", borderRadius: "20px" }} alt="Logo" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white relative lg:py-20">
        <div style={{ height: '400px' }} className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img src={img6} className="btn-" style={{ width: "440px", height: "400px" }} alt="Illustration" />
              </div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Log in to Account</p>
                <form className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8" onSubmit={handleSubmit}>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                    <input
                      placeholder="123@ex.com"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                    <input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                    >
                      Submit
                    </button>
                  </div>
                  <small className="mt-2 text-gray-600">Don't have an account? <Link to="/register" className="text-indigo-500 hover:text-indigo-600">Register</Link></small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
