import React, { useState } from 'react'
import SeriesCard from './SeriesCard';
const SeriesPh = (props) => {
  const [isopen , setopen ] = useState(false);
  const realTemplate = (
    <>
        <div onClick={()=>{
          setopen(!isopen);
        }} className='relative shrink-0  '>
          <h1 className='absolute top-1/2 -left-4 text-8xl [-webkit-text-stroke:1px_#ddd] text-[rgb(17,17,17)] font-bold'>{props.id}</h1>
          <img className='h-50  rounded-2xl' src={props.picture} alt="" />
        </div>
    </>
  )
  return (
    <>
      {isopen?<SeriesCard category={props.category} SeriesName={props.SeriesName}picture={props.picture} setopen={setopen}/>:realTemplate}
    </>
  )
}

export default SeriesPh
