import "./style.css"
import React, { useEffect , useState , useRef} from 'react'
import { nanoid } from 'nanoid'//import for generating random keys
 
const Latest = () => {
    //add variable to an element
    let ref = useRef(null);
    //scroll that choosen element after a special event
    const scroll = (scrollOffset) => {
        if (ref.current) {
            ref.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth',
            });
        }   
    };
    //movie list to show latest Movies
    const [Movie,setMovie] = useState([]);
    //render movie when rendering the page
    useEffect(()=>{
        async function getMovie(){
            //fetch movies from json 
            const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
            const data = await response.json();//convert data as normal list object
            
            //contains latest movies
            let lMovieList = [];
             
            const movieAdded = 13;
            //show only last 10 movies
            for(let i= data.length-1  ;i > data.length-movieAdded+1;i--){
                lMovieList.push(data[i]);
            };
            //set movies for randering
            setMovie(lMovieList);

        }
        //call the function imidiatly after rendering 
        getMovie();
    },[])

    //create image element for every movie for render on the screen
    const Latest_movies = Movie.map((movie)=>{
        return <img onClick = {()=>{
            const getKey = JSON.parse(localStorage.getItem("watching"));
            localStorage.setItem("categories",JSON.stringify(movie.category));
            //open link where you can see your movie in 0 payment
            if(movie.path!=="xyz"){
                if(getKey!==null){
                    localStorage.setItem("watching",JSON.stringify([...getKey,movie.id]));
                }else{
                    localStorage.setItem("watching",JSON.stringify([movie.id]));
                }
                window.open(movie.path,"_blank")
                
            }else{
                alert("Movie not found");
            }
        }} key = {nanoid()} className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={movie.picture} alt="MoviePic" />
    })

    //main page
  return (
    <div className="fadeInClass w-full p-3 flex items-center justify-around">
      <div className="relative flex flex-col w-full md:px-26 px-3  gap-1 ">
        <ul className="text-white list-disc text-[15px] font-bold md:text-xl"><li>Latest Movies:- </li></ul>
        <div ref = {ref} className="mask-[linear-gradient(to_right,transparent_0%,white_3%_97%,transparent_100%)] w-full  [&::-webkit-scrollbar]:hidden overflow-x-auto flex flex-row gap-2 items-center justify-around p-1">
            {Latest_movies}
        </div>
        {/* Left button which will scroll left after clicking */}
        <div onClick={()=>{
            scroll(-400)
        }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        {/* Right button to scroll right */}
        <button onClick={()=>{
            scroll(400);

        }} className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>

      </div>
    </div>
  )
}

export default Latest
