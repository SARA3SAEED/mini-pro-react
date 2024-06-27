import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Logout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId'); 
  };

  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center rounded">
      <div className="flex items-center justify-between rounded">
        <div>
          <Link
            to="#"
            className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
          >
            <img
              src="https://merakiui.com/images/full-logo.svg"
              style={{ width: '120px', height: '50px', borderRadius: '20px' }}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
        
          <Link
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            to="/favorite"
          >
            Favorite
          </Link>
          <Link
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            to="/readbook"
          >
            Readbook
          </Link>
          <Link
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            to="/login"
            onClick={handleLogout} // Handle logout action
          >
            Log out
          </Link>
        </div>
      </div>

      <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0 hidden lg:flex">
      
        <Link
          className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
          to="/favorite"
        >
          Favorite
        </Link>
        <Link
          className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
          to="/readbook"
        >
          Readbook
        </Link>
        <Link
          className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
          to="/login"
          onClick={handleLogout} // Handle logout action
        >
          Log out
        </Link>
      </div>
    </nav>
  );
}
