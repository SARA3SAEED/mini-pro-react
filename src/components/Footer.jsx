import React from 'react';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
          <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
                <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
            </a>
            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <img src="https://cdn-icons-png.flaticon.com/128/16777/16777433.png" alt="New Icon" className="w-5 h-5 mx-1" />
                <Link className="text-gray-700 dark:text-gray-200 lg:px-2 dark:hover:text-blue-400 hover:text-blue-500" to="/favorite">Favorite</Link>
            </button>
                <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <Link className="text-gray-700 text-white dark:text-gray-200 lg:px-2 " to="/dashboard">Dashboard</Link></button>
            </div>
            <p className=" p-5 mt-5 text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>
        </div>
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
    </div>
</footer>

    </>
  )
}
