import "./style.css"
import React, { useEffect } from 'react'
import { useState , useRef } from "react"
import { nanoid } from "nanoid"
import Series_pic from "../SeriesFolder/Series_pic"
import ActionxAdv from "../MovieFolder/ActionxAdv"
const SearchBar = () => {
  //make variable using destructuring
  const [searchMovie,setSearchMovie] = useState("");//variable that store search value
  
  const [AllData,setAlldata]  = useState([]);
  //please set a new search list that contains the movies that will come after search 
  
  
  useEffect(()=>{
    if(searchMovie === ""){
      console.log("No Search");
    }else{
      async function getSearch(){
        const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
        const response2 = await fetch(`${import.meta.env.BASE_URL}/data/SeriesData.json`)
        if(response.ok && response2.ok){
          const data = await response.json();
          const data2 = await response2.json(); 

          console.log("Data2 is here",data2);
          setAlldata([...data,...data2]);
        }
      }
      getSearch();
    }
  },[searchMovie])
  const searchList = AllData.filter((item)=>{
    if(item.MovieName===undefined){
      return item.SeriesName.toLowerCase().includes(searchMovie.toLowerCase())
    }else{
      return item.MovieName.toLowerCase().includes(searchMovie.toLowerCase())
    }
  })

  const newList = searchList.map((item)=>{
    if(item.MovieName===undefined){
      return <Series_pic key={nanoid()} content={item.content} category={item.category}SeriesName={item.SeriesName} picture = {item.picture} id={item.id} />
    }else{
      return <ActionxAdv picture={item.picture}key={nanoid()}path={item.path}MovieName={item.MovieName}category={item.category}id={item.id}  />
    }
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
        <h1 className="w-full text-center text-2xl font-bold text-white"></h1>
      </div>
    </>
  )
  const realSearch=(
    <>
      <div className="w-full md:px-25 p-2 flex items-center justify-around">
        <div className="h-full w-full rounded-3xl border md:px-10  border-[#9b9b9b] p-3 px-5 grid-cols-2 grid md:grid-cols-4 lg:grid-cols-7 gap-3 bg-[rgba(255,255,255,0.1)]">
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
          }} type="text" placeholder="Search anything..."/>
        </div>
      </div>

      {/* Search Movies will render here */}
      {searchMovie !== "" && newList.length!==0 ?realSearch:fakeSearch}
    </>
  )
}

export default SearchBar
