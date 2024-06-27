import React from 'react';
import Router from './routers/Router';
import { FavoriteProvider } from './pages/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <Router />
    </FavoriteProvider>
  );
}

export default App;
