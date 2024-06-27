import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from '../components/Logout';
import Card from '../components/Card';
import Footer from '../components/Footer';
import oops from '../assets/oops.jpg';

export default function Dashboard() {
  const [bestSellers, setBestSellers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    async function fetchBestSellers() {
      const apiKey = 'sDeM4gttV5dQwJ1BIQsECm1bAeMjQtFi';
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?date=current&api-key=${apiKey}`);
      console.log('API Response:', response.data);
      
      const books = response.data.results.lists.flatMap(list => list.books);
      
      setBestSellers(books);
      setSearchResults(books);
    }

    fetchBestSellers();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) { 
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setSearchResults(bestSellers);
      return;
    }

    const filteredResults = bestSellers.filter(book =>
      book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    console.log('Filtered Results:', filteredResults);
    setSearchResults(filteredResults);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Logout />
      <main className="py-12 md:px-20 sm:px-14 px-6 shadow-inner bg-decoration-slate-900 rounded">
        <div className="max-w-2xl mx-auto mb-14">
          <form onSubmit={handleSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>



              
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-wrap">
          {searchResults.length === 0 ? (
            <div className="w-full text-center">
              <img src={oops} alt="Oops" className="mx-auto mb-4" />
              <p className="text-white">Oops! The book you searched for was not found.</p>
            </div>
          ) : (
            searchResults.map((book, index) => (
              <div key={`${book.primary_isbn13}-${index}`} className="flex flex-wrap m-2 p-2">
                <Card key={book.primary_isbn13} book={book} />
              </div>
            ))
          )}
        </div>

        {showScrollButton && (
          <button
            style={{
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              padding: '20px',
              position: 'fixed',
              bottom: '10px',
              right: '10px',
            }}
            onClick={scrollToTop}
          >
            <img src="https://cdn-icons-png.flaticon.com/128/3272/3272638.png" style={{ width: "50px" }} />
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}
