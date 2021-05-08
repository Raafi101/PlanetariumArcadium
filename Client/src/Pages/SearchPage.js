import React from 'react';
import './SearchPage.css';
import Navbar from './components/NavBarBack.js';
import Search from './components/Search.js';

function SearchPage() {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
}

export default SearchPage;