
import { useRef , useState , useEffect} from 'react'

const ActionxAdv = () => {
    //movie list that stores fetched data
    const [moviesList,setMoviesList] = useState([]);
    const ref = useRef(null);
    //scroll template
    const scroll =(scrollByNum)=>{
        if(ref.current){
            ref.current.scrollBy({
                left:scrollByNum,
                behavior:"smooth"
            })
        }
    }
    useEffect(()=>{
        //get action advanture movies
        async function getMovie(){
            const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
            const data = await response.json();
            setMoviesList(data);
        }
        getMovie();
    },[])
    
    //filtering movies from the data 
    let updateList = moviesList.filter((movie)=>{
        return movie.category.includes("action") || movie.category.includes("adventure");
    })
    //select only 10 movies
    updateList = updateList.reverse().slice(0,10);
    //choosing only movies that should rander
    const renderUpdate = updateList.map((movie)=>{
        return <img onClick = {()=>{
                    const getKey = JSON.parse(localStorage.getItem("watching"));
                    localStorage.setItem("categories",JSON.stringify(movie.category));
                    //open link where you can see your movie in 0 payment
                    if(movie.path!=="xyz"){
                        if(getKey!==null){
                            localStorage.setItem("watching",JSON.stringify([...getKey,movie.MovieName]));
                        }else{
                            localStorage.setItem("watching",JSON.stringify([movie.MovieName]));
                        }
                        window.open(movie.path,"_blank")
                        
                    }else{
                        alert("Movie not found");
                    }
                }} className="cursor-pointer h-50 rounded-2xl shrink-0" src={movie.picture} alt="Movie" />
        })

  return (
    <>
        <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Action & Adventure Movies</h1>
                <div ref={ref} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden mask-[linear-gradient(to_right,transparent_0%,black_10%_90%,transparent_100%)] flex flex-row gap-7 items-center justify-around'>
                    {renderUpdate}
                </div>


                {/* left button to scroll left */}
                <button  onClick={()=>{
                    scroll(-550)
                }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
                    <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {/* Right button to scroll right */}
                <button   onClick={()=>{
                    scroll(550);

                }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
                    <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    </>
  )
}

export default ActionxAdv
