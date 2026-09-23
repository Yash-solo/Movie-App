import { useEffect,useState,useRef} from 'react'
//main top function 
const Top10 = () => {

    //store only top 10 movies
    const [topMovies,setTopMovies] = useState([]);
    const ref = useRef(null);
    //scroll template
    const scroll = (scrollNum)=>{
        if(ref.current){
            ref.current.scrollBy({
                left:scrollNum,
                behavior:"smooth"
            })
        }
    }

    useEffect(()=>{
        async function getTopMovies(){
            //fetch data from anywhere
            const response = await fetch(`${import.meta.env.BASE_URL}/data/TopMovies.json`)
            const data = await response.json();
            //top rendering 
            const TopMovies = data.map((movie)=>{
                return (
                    
                    <div key={movie.id} className='relative shrink-0'>
                        <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>{movie.id+1}</h1>
                        <img onClick = {()=>{
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
                        }} className='h-50   rounded-2xl cursor-pointer' src={movie.picture} alt="MovieName" />
                    </div>
                    
                )
            })
            setTopMovies(TopMovies);
        }
        getTopMovies();
    },[])



  return (
    <div className='relative w-full flex-col  md:px-25 p-3 flex  '>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Top 10 Movies on Netflix</h1>
      <div ref={ref} className='relative [&::-webkit-scrollbar]:hidden overflow-x-auto flex mask-[linear-gradient(to_right,transparent_0%,black_10%_90%,transparent_100%)] flex-row items-center gap-10 w-full   p-5'>
        {topMovies}
      </div>
            {/* Left button which will scroll left after clicking */}
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
  )
}

export default Top10
