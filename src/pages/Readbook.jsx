// Readbooks.js

import React from 'react';
import Logout from '../components/Logout';
import Footer from '../components/Footer';
import { useFavorites } from './FavoriteContext';

export default function Readbooks() {
  const { readBooks } = useFavorites();

  return (
    <>
      <Logout />
      <main className="py-12 md:px-20 sm:px-14 px-6 shadow-inner bg-decoration-slate-900 rounded">
        <div className="flex flex-wrap my-2">
          {readBooks.length > 0 ? (
            readBooks.map((book, index) => (
              <div key={index} className="card bg-base-100 w-72 shadow-xl m-4">
                <figure>
                  <img src={book.book_image} alt={book.title} style={{ width: '55%', height: '270px', margin: "7px", borderRadius: "4px" }} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p>{book.author}</p>
                  <div className="card-actions justify-end">
                    <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No books marked as read yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
