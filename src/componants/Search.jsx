import "./style.css"
import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-full p-2 items-center justify-around flex">
      <div className="flex text-white gap-4 border border-[#c2c2c2] bg-gray-950 px-7 p-2">
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input className="focus:outline-0 w-full" type="text" placeholder="Search movie..."/>
      </div>
    </div>
  )
}

export default SearchBar
