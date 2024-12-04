import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        if (term && location) {
            onSearch(term, location);
        } else {
            alert('Please enter both search terms and location.');
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search businesses"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
