
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://667c98cf3c30891b865d188b.mockapi.io/books/${userId}`);
        const userFavorites = response.data.favorite || [];
        setFavorites(Array.isArray(userFavorites) ? userFavorites : []);
      } catch (error) {
        console.error('Failed to fetch favorites', error);
      }

      try {
        const response = await axios.get(`https://667c98cf3c30891b865d188b.mockapi.io/books/${userId}`);
        const userReadBooks = response.data.read || [];
        setReadBooks(Array.isArray(userReadBooks) ? userReadBooks : []);
      } catch (error) {
        console.error('Failed to fetch read books', error);
      }
    };

    if (userId) {
      fetchBooks();
    }
  }, [userId]);

  const addFavorite = async (book) => {
    // Check if the book is already in favorites
    if (favorites.some(fav => fav.primary_isbn13 === book.primary_isbn13)) {
      console.log('Book already in favorites');
      return; // Exit function early if book is already favorited
    }

    const updatedFavorites = [...favorites, book];
    setFavorites(updatedFavorites);

    if (userId) {
      try {
        await axios.put(`https://667c98cf3c30891b865d188b.mockapi.io/books/${userId}`, { favorite: updatedFavorites });
      } catch (error) {
        console.error('Failed to update favorites', error);
      }
    }
  };

  const markAsRead = async (book) => {
    if (readBooks.some(read => read.primary_isbn13 === book.primary_isbn13)) {
      console.log('Book already marked as read');
      return; 
    }

    const updatedReadBooks = [...readBooks, book];
    setReadBooks(updatedReadBooks);

    if (userId) {
      try {
        await axios.put(`https://667c98cf3c30891b865d188b.mockapi.io/books/${userId}`, { read: updatedReadBooks });
      } catch (error) {
        console.error('Failed to update read books', error);
      }
    }
  };

  const value = {
    favorites,
    addFavorite,
    readBooks,
    markAsRead,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
