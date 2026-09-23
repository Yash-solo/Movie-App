import { nanoid } from 'nanoid';
import { useEffect,useState,useRef} from 'react'
//main top function 
const Top10 = () => {
    const [isopen,setopen] = useState(false);
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
                        <img  onClick = {()=>{
                            setopen(true);
                            // const getKey = JSON.parse(localStorage.getItem("watching"));
                            // localStorage.setItem("categories",JSON.stringify(movie.category));
                            // //open link where you can see your movie in 0 payment
                            // if(movie.path!=="xyz"){
                            //     if(getKey!==null){
                            //         localStorage.setItem("watching",JSON.stringify([...getKey,movie.MovieName]));
                            //     }else{
                            //         localStorage.setItem("watching",JSON.stringify([movie.MovieName]));
                            //     }
                            //     window.open(movie.path,"_blank")
                                
                            // }else{
                            //     alert("Movie not found");
                            // }
                        }} className='h-50   rounded-2xl cursor-pointer' src={movie.picture} alt="MovieName" />
                    </div>
                    
                )
            })
            setTopMovies(TopMovies);
        }
        getTopMovies();
    },[])
    
    const FakeTemplate = [(
        <>
        <div className='h-full w-full top-0 z-1000 p-2 backdrop-blur-[10px] bg-[rgba(17,17,17,0.3)] fixed  flex items-center justify-center'>
            <div className='p-3 px-6 shadow-[0px_0px_20px_rgba(255,255,255,0.2)] rounded-2xl border border-[#535252] flex-col w-3/4 bg-[rgba(17,17,17)] fixed  flex items-start justify-start'>
                <button onClick={()=>setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                <div className='flex flex-row gap-7'>
                    <img className="h-50 md:h-70 rounded-2xl" src="./photos/hanuman ansh.jpg" alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#ddd] font-semibold text-[20px] md:text-4xl'>Hanuman ansh</h1>
                        <h2 className='text-[#ddd] md:text-[25px]'>⭐8.2 rating</h2>
                        <h2 className='text-[#ddd] text-[17px] md:text-[20px]'>Category</h2>
                        <ul className='px-5 text-gray-300  md:text-[20px] list-decimal'>
                            <li>history</li>
                            <li>biography</li>
                            <li>spiritual biopic</li>
                            <li>drama</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full py-2 md:py-5 flex flex-col md:flex-row items-center gap-2 justify-around'>
                    <button className='text-lg bg-red-500 px-3 p-2 w-full rounded-lg font-bold text-[#ddd]'>Watch Now</button>
                    <button className='text-lg border border-[#ddd] px-3 p-2 w-full rounded-lg font-bold text-[#ddd]' >Add To Watch Later</button>
                </div>
            </div>
        </div>
        </>
    )]
    const realTemplate = [(
        <div key={nanoid()} className='relative w-full flex-col  md:px-25 p-3 flex  '>
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
    )]

  return (
    <>
        {isopen?FakeTemplate:realTemplate}
    </>
  )
}

export default Top10
