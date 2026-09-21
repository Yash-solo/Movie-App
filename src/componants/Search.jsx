import "./style.css"
import React from 'react'

const SearchBar = () => {
  return (
    <div className=" w-full flex items-center justify-center p-3 ">
      <div className="flex flex-row rounded-2xl md:w-1/3 w-3/4 p-1 items-center justify-around gap-2 bg-white">
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input className="w-full p-1 focus:outline-0" type="text" placeholder="Search Movies........."/>
      </div>
    </div>
  )
}

export default SearchBar
