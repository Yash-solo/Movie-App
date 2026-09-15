import "./style.css"
import React, { useEffect , useState } from 'react'
import {useRef} from 'react'
import { nanoid } from 'nanoid'

const Latest = () => {
    let ref = useRef(null);
    const scroll = (scrollOffset) => {
        if (ref.current) {
            ref.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth',
            });
        }   
    };
    const [Movie,setMovie] = useState([]);
    useEffect(()=>{
        async function getMovie(){
            const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
            const data = await response.json();
            let lMovieList = [];
            const movieAdded = 12;
            //show only last 10 movies
            for(let i= data.length-1  ;i > data.length-movieAdded+1;i--){
                console.log(i);
                lMovieList.push(data[i]);
            };
            console.log(lMovieList);
            setMovie(lMovieList);

        }
        getMovie();
    },[])

    const Latest_movies = Movie.map((movie)=>{
        return <img key = {nanoid()} className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={movie.picture} alt="MoviePic" />
    })
    console.log(Latest_movies)

  return (
    <div className="w-full p-3 flex items-center justify-around">
      <div className="relative flex flex-col w-full md:px-26 px-3  gap-1 ">
        <ul className="text-white list-disc text-[15px] font-bold md:text-xl"><li>Latest Movies:- </li></ul>
        <div ref = {ref} className="mask-[linear-gradient(to_right,transparent_0%,white_3%_97%,transparent_100%)] w-full  [&::-webkit-scrollbar]:hidden overflow-x-auto flex flex-row gap-2 items-center justify-around p-1">
            {Latest_movies}
        </div>
        <div onClick={()=>{
            scroll(-100)
        }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <button onClick={()=>{
            scroll(100);

        }} className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
      </div>
    </div>
  )
}

export default Latest
