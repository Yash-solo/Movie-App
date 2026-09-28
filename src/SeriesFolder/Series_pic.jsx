import React from 'react'
import { useState } from 'react';
import SeriesCard from "./SeriesCard.jsx"
const Series_pic = (props) => {
    const [isopen , setopen ] = useState(false);
      const realTemplate = (
        <>
            <div onClick={()=>{
              setopen(!isopen);
            }} className='shrink-0 '>
              <img className='h-50  rounded-2xl' src={props.picture} alt="" />
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
