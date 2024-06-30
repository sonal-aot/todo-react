import React from 'react';
import SearchIcon from '../assets/search-icon.svg';
import DropDown from './DropDown';
import '../styles/searchContainer.css';
import InputType from './InputType';

function SearchContainer({ searchQuery, setSearchQuery, sortOption, setSortOption }) {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='searchSortContainer'>
            <div className="searchBar">
                <InputType
                    className={"searchInput"}
                    placeholder={"Search by task name"}
                    type={"search"}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <img src={SearchIcon} alt="Search" />
            </div>
            <DropDown sortOption={sortOption} setSortOption={setSortOption} />
        </div>
    );
}

export default SearchContainer;
