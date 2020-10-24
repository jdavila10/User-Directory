import React from 'react';
import "../styles/search.css";

function Search({searchTerm, handleInputChange}) {
    return (
        <div className="search">
            <input 
            onChange={handleInputChange}
            value={searchTerm}
            name="search"
            aria-label="Search"
            type="text"
            placeholder="Search"
            
            />
        </div>

        
    );
};

export default Search;