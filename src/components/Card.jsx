import React from 'react';
import { useFavorites } from '../pages/FavoriteContext'; 

export default function Card({ book }) {
  const { favorites, addFavorite, removeFavorite, markAsRead, removeReadBook, readBooks } = useFavorites();

  const isFavorite = favorites.some(fav => fav.primary_isbn13 === book.primary_isbn13);
  const isRead = readBooks.some(read => read.primary_isbn13 === book.primary_isbn13);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(book);
    } else {
      addFavorite(book);
    }
  };

  const handleReadClick = () => {
    if (isRead) {
      removeReadBook(book);
    } else {
      markAsRead(book);
    }
  };

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
            onDoubleClick={handleFavoriteClick}
            className={`btn btn-outline ${isFavorite ? 'bg-blue-300 text-white' : ''}`}
            style={{width: '60px', height: '40px', border: '1px solid'}}
          >
            Favorite
          </button>
          <button
            onDoubleClick={handleReadClick}
            className={`btn btn-outline ${isRead ? 'bg-[#3b82f6] text-white' : ''}`}
            style={{width: '60px', height: '40px'}}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
