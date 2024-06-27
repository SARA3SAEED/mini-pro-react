import React from 'react';
import { useFavorites } from '../pages/FavoriteContext';

export default function Card({ book }) {
  const { favorites, addFavorite } = useFavorites();

  const isFavorite = favorites.some(fav => fav.primary_isbn13 === book.primary_isbn13);

  return (
    <div className="card bg-base-100 w-72 shadow-xl m-4">
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
          <button
            onClick={() => addFavorite(book)}
            style={{border: " 1px solid"}}
            className={`btn s ${isFavorite ? 'bg-blue-200 h-[50px]text-white' : ''}`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/11052/11052170.png"
              alt="Favorite Icon"
              className="w-9 h-9 mx-2 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
