import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Logout from '../components/Logout';
import { useFavorites } from './FavoriteContext';
import Card from '../components/Card';

export default function Favorite() {
  const { favorites } = useFavorites();

  return (
    <>
      <Logout />
      <main className="py-12 md:px-20 sm:px-14 px-6 shadow-inner bg-decoration-slate-900 rounded">
        <div className="flex flex-wrap my-2">
          {favorites.length > 0 ? (
            favorites.map((book, index) => (
              <Card key={index} book={book} />
            ))
          ) : (
            <p>No favorite books yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
