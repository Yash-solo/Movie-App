import { useState } from "react"
import SeriesCard from '../SeriesFolder/SeriesCard';
const WatchSiri = (props) => {
    const [isopen,setopen] = useState(false);
        const realTemplate = (
            <div onClick={()=>{
                setopen(true)
            }}className='flex hover:scale-110 rounded-2xl hover:shadow-[0px_0px_10px_rgba(0,0,0)] transform transition-all duration-150 ease-in-out flex-col items-center justify-around'>
                <img className="h-50 rounded-2xl border border-gray-400"src={props.picture} alt="MovieName" />
                <h1 className='p-1 font-bold text-white text-lg'>{props.SeriesName}</h1>
            </div>
        )
  return (
    <>
        {isopen?<SeriesCard content = {props.content}inList={true} category={props.category} SeriesName={props.SeriesName}picture={props.picture} setopen={setopen}/>:realTemplate}
    </>
  )
}

export default WatchSiri
