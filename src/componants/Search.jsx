import "./style.css"
import React, { useEffect } from 'react'
import { useState , useRef } from "react"
import { nanoid } from "nanoid"
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

  const newList = SearchList.map((movie)=>{
    return <img onClick = {()=>{
      //open link where you can see your movie in 0 payment
      if(movie.path!=="xyz"){
    
          const getKey = JSON.parse(localStorage.getItem("watching"))
          if(getKey!==null){
              localStorage.setItem("watching",JSON.stringify([...getKey,movie.id]));
          }else{
              localStorage.setItem("watching",JSON.stringify([movie.id]));
          }
          window.open(movie.path,"_blank")
          }else{
            alert("Movie not found");
          }
      }} key = {nanoid()} className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={`${movie.picture}`} alt="MoviePic" />
  })

  
  //debounce function that delays the function exicution of the handleChange 
  const handleChange = Debounce((e)=>{
    setSearchMovie(e.target.value);
  },500)
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

  const fakeSearch=(
    <>
      <div className="p-3 px-25">
        <h1 className="w-full text-center text-2xl font-bold text-white">Not Found</h1>
      </div>
    </>
  )
  const realSearch=(
    <>
      <div className="w-full md:px-25 p-2 flex items-center justify-around">
        <div className="h-full w-full rounded-3xl border px-10 border-[#9b9b9b] p-3 grid-cols-2 grid md:grid-cols-4 lg:grid-cols-7 gap-3 bg-[rgba(255,255,255,0.1)]">
            {newList}
        </div>
      </div>
    </>
  )

  return (
    <>
    {/* Search from here */}
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

      {/* Search Movies will render here */}
      {newList.length!==0?realSearch:fakeSearch}
    </>
  )
}

export default SearchBar
