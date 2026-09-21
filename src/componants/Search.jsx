import "./style.css"
import React, { useEffect } from 'react'
import { useState , useRef } from "react"
const SearchBar = () => {
  //make variable using destructuring
  const [searchMovie,setSearchMovie] = useState(null);//variable that store search value
  const [SearchList,setSearchList] = useState([]);//variable that stores searchMovies

  //please set a new search list that contains the movies that will come after search 
  useEffect(()=>{
    if(searchMovie === ""){
      console.log("No Search");
    }else{
      async function getSearch(){
        const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
        
        if(response.ok){
          const data = await response.json();
          const newSearchList = data.filter((movie)=>{
            return movie.MovieName.toLowerCase().includes(searchMovie);
          })
          
          setSearchList(newSearchList);
        }
      }
      getSearch();
    }
  },[searchMovie])


  //debounce function that delays the function exicution of the handleChange 
  const handleChange = Debounce((e)=>{
    setSearchMovie(e.target.value);
  },2000)
  //debouce function blueprint
  function Debounce(fn,delay){
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }


  return (
    <div className="w-full p-2 items-center justify-around flex">
      <div className="flex text-white gap-4 border border-[#c2c2c2] bg-gray-950 px-7 p-2">
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input className="focus:outline-0 w-full" onChange={(e)=>{
          handleChange(e);
        }} type="text" placeholder="Search movie..."/>
      </div>
    </div>
  )
}

export default SearchBar
