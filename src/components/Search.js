import React from "react";
import '../styles/Search.css';

function Search () {
    return (
        <div className = "container">
        <input className="search" type="search" placeholder="Search.." aria-label="Search"></input>
        </div>

    )
}
export default Search;