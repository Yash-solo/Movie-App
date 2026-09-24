import "./style.css"
import {useState } from "react"
import MovieCard from "../componants/MovieCard";
const ContinueWatch = (props) => {
    const [isopen,setopen] = useState(false);

    const realTemplate= [(
       <img key={props.id} onClick = {()=>{
            setopen(true);
            const getKey = JSON.parse(localStorage.getItem("watching"));
            localStorage.setItem("categories",JSON.stringify(props.category));

        }} className="cursor-pointer h-50 rounded-2xl shrink-0" src={props.picture} alt="Movie" />
    )]

  return (
   <>
    {isopen?<MovieCard setopen={setopen} MovieName = {props.MovieName} path={props.path} category={props.category} picture={props.picture}/>:realTemplate}
   </>
  )
}

export default ContinueWatch
