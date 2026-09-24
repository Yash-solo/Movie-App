import "./style.css"
import React, { useEffect , useState , useRef} from 'react'
import { nanoid } from 'nanoid'//import for generating random keys
import MovieCard from "../componants/MovieCard"

const Latest = (props) => {
    //add variable to an element
    let ref = useRef(null);
    const [isopen,setopen] = useState(false);
    const realTemplate= [(
       <img key={props.id} onClick = {()=>{
            setopen(true);
            const getKey = JSON.parse(localStorage.getItem("watching"));
            localStorage.setItem("categories",JSON.stringify(props.category));

        }} className="cursor-pointer h-50 rounded-2xl shrink-0" src={props.picture} alt="Movie" />
    )]

    //main page
  return (
    <>
        {isopen?<MovieCard setopen={setopen} MovieName = {props.MovieName} path={props.path} category={props.category} picture={props.picture}/>:realTemplate}
    </>
  )
}

export default Latest
