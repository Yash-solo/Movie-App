import "./style.css"
import React from 'react'

const SearchBox = () => {
  return (
    <>
        <div className="w-full p-5 flex items-center justify-around md:px-25">
            <div className="flex rounded-2xl w-3/4 md:w-1/2 items-center  p-2 gap-2 justify-around bg-white">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input className="px-1 focus:outline-0 w-full bg-white" placeholder="Search movie...." type="text" />
            </div>
        </div>
    </>
  )
}

export default SearchBox
