import { useState } from 'react';
import SeriesCard from "./SeriesCard.jsx"
const Series_pic = (props) => {
    const [isopen , setopen ] = useState(false);
      const realTemplate = (
        <>
            <div onClick={()=>{
              setopen(!isopen);
            }} className='shrink-0 cursor-pointer'>
              <img className='h-50 hover:shadow-[0px_0px_10px_rgba(0,0,0)] hover:scale-110 transform transition-all duration-150 ease-in-out  rounded-2xl' src={props.picture} alt="" />
            </div>
        </>
      )
  return (
    <>
      {isopen?<SeriesCard content = {props.content} category={props.category} SeriesName={props.SeriesName}picture={props.picture} setopen={setopen}/>:realTemplate}
    </>
  )
}

export default Series_pic
