import "./style.css"
import React, { useEffect,useRef, useState } from 'react'
import { nanoid } from "nanoid";
import MovieCard from "../componants/MovieCard";

const Recommanded = (props) => {
    const [isopen ,setopen ] = useState(false);
    const realTemplate= [(
       <img key={nanoid()} onClick = {()=>{
            setopen(true);
            const getKey = JSON.parse(localStorage.getItem("watching"));
            localStorage.setItem("categories",JSON.stringify(props.category));

        }} className="cursor-pointer h-50 rounded-2xl shrink-0" src={props.picture} alt="Movie" />
    )]
    //actual rendering
  return (
    <>
        {isopen?<MovieCard setopen={setopen} MovieName = {props.MovieName} path={props.path} category={props.category} picture={props.picture}/>:realTemplate}
    </>
  )
}

export default Recommanded
