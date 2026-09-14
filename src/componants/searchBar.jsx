import "./style.css"
import React from 'react'

const searchBar = () => {
  return (
    <div className="w-full flex items-center justify-center p-3 ">
      <div>
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" placeholder="Search Movies........."/>
      </div>
    </div>
  )
}

export default searchBar
