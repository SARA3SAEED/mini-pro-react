import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchFavorites = async () => {
      if (userId) {
        try {
          const response = await axios.get(`https://667c98cf3c30891b865d188b.mockapi.io/books/${userId}`);
          const userFavorites = response.data.favorite || [];
          setFavorites(Array.isArray(userFavorites) ? userFavorites : []);
        } catch (error) {
          console.error('Failed to fetch favorites', error);
        }
      }
    };
    fetchFavorites();
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

  const value = {
    favorites,
    addFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
