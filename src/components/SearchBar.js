import React from 'react';
// import {useState} from 'react';

const SearchBar = ({searchedString, setSearchedString}) => {
    return (<div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value={searchedString} onChange={(e) => setSearchedString(e.target.value)} />
      </div>
    )
}

export default SearchBar;