import { nanoid } from "nanoid";
import { useState } from "react";
const MovieCard = (props) => {
    const [inlist,setinlist] = useState(false);
    const removeBtn = (
        <button onClick={()=>{
            alert(`deleted ${props.MovieName}`)
            let previousItem = JSON.parse(localStorage.getItem("WatchLater"));
            console.log("Later",previousItem);
            console.log("props:-",props.MovieName)
            const afterMovie = previousItem.filter((movie)=>{
                return movie!==props.MovieName
            })
            console.log(afterMovie)
            localStorage.setItem("WatchLater",JSON.stringify([...afterMovie]))
            
            window.location.reload();
            }} className='text-lg border border-[#ddd] cursor-pointer px-3 p-2 w-full rounded-lg font-bold text-[#ddd]' >
            Remove Watch Later</button>
    )
    const addbtn = (
        <>
        <button onClick={()=>{
            const previousItem = JSON.parse(localStorage.getItem("WatchLater"));
            if(previousItem!==null){
                if(previousItem.includes(props.MovieName)){
                    return 
                }
                    localStorage.setItem("WatchLater",JSON.stringify([...previousItem,props.MovieName]))
                }else{
                    localStorage.setItem("WatchLater",JSON.stringify([props.MovieName]))
                }
            }} className='text-lg border border-[#ddd] cursor-pointer px-3 p-2 w-full rounded-lg font-bold text-[#ddd]' >
            + Add To Watch Later</button>
        </>
    )
  return (
    <>
        <div key={props.id + 1} className='h-full w-full top-0 left-0 z-1000 p-2 backdrop-blur-[10px] bg-[rgba(17,17,17,0.3)] fixed  flex items-center justify-center'>
            <div className='p-3 px-6 shadow-[0px_0px_20px_rgba(255,255,255,0.2)] rounded-2xl border border-[#535252] flex-col w-9/10 md:w-9/10 lg:w-1/2 bg-[rgba(17,17,17)] fixed  flex items-start justify-start'>
                <button onClick={() => props.setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                <div className='flex flex-row gap-5 md:gap-7'>
                    <img className="h-50 md:h-70 rounded-2xl" src={props.picture} alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#ddd] font-semibold text-[20px] md:text-4xl'>{props.MovieName}</h1>
                        <h2 className='text-[#ddd] md:text-[25px]'>⭐8.2 rating</h2>
                        <h2 className='text-[#ddd] text-[17px] md:text-[20px]'>Category</h2>
                        <ul className='px-5 text-gray-300  md:text-[20px] list-decimal'>
                            {props.category.slice(0, 5).map((cate) => <li key={nanoid()}>{cate}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='w-full py-2 md:py-5 flex flex-col md:flex-row items-center gap-2 justify-around'>
                    <button onClick={() => {
                        if (props.path !== "xyz") {
                            const getKey = JSON.parse(localStorage.getItem("watching"))
                            //set categories of the movie you selected
                            localStorage.setItem("categories", JSON.stringify(props.category));
                            if (getKey !== null) {
                                localStorage.setItem("watching", JSON.stringify([...getKey, props.MovieName]));
                            } else {
                                localStorage.setItem("watching", JSON.stringify([props.MovieName]));
                            }
                            window.open(props.path, "_blank")
                        } else {
                            alert("Movie Not Found")
                        }
                    }} className='text-lg bg-red-500 px-3 cursor-pointer p-2 w-full rounded-lg font-bold text-[#ddd]'>&#9655;Watch Now</button>
                    {props.inList?removeBtn:addbtn}
                </div>
            </div>
        </div>
    </>
  )
}

export default MovieCard
