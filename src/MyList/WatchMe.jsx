import { useState } from "react"
import MovieCard from "../componants/MovieCard";

const WatchMe = (props) => {
    const [isopen,setopen] = useState(false);
    const realTemplate = (
        <div onClick={()=>{
            setopen(true)
        }}className='flex hover:scale-110 hover:z-100 z-0 rounded-2xl hover:shadow-[0px_0px_10px_rgba(0,0,0)] transform transition-all duration-150 ease-in-out flex-col items-center justify-around'>
            <img className="h-50 rounded-2xl border border-gray-400"src={props.picture} alt="MovieName" />
            <h1 className='p-1 font-bold text-white text-lg'>{props.movieName}</h1>
        </div>
    )
  return (
    <>
        {isopen?<MovieCard setopen={setopen} inList={true} MovieName = {props.movieName} path={props.path} category={props.category} picture={props.picture}/>:realTemplate}
    </>
  )
}

export default WatchMe
