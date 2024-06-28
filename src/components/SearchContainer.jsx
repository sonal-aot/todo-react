import React from 'react'
import SearchIcon from '../assets/search-icon.svg'
import DropDown from './DropDown'
import '../styles/searchContainer.css'
import InputType from './InputType'


function SearchContainer() {
    return (
        <div className='searchSortContainer'>
            <div className="searchBar">
                <InputType className={"searchInput"} placeholder={"Search by task name"} type={"search"}/>
                <img src={SearchIcon} alt="Search" />
            </div>

        <DropDown/>

        </div>
    )
}

export default SearchContainer