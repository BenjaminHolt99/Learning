// App.js
import React from 'react';
import BusinessList from './Components/BusinessList';
import businesses from './Data/businesses';
import SearchBar from './Components/SearchBar';
import './App.css';


function App() {
  const handleSearch = (term, location) => {
      console.log(`Searching for ${term} in ${location}`);
      // Call the Yelp API or handle search logic here
  };

  return (
      <div className="App">
          <h1>Ravenous</h1>
          <SearchBar onSearch={handleSearch} />
          <BusinessList businesses={businesses} />
      </div>
  );
}

export default App;

