import React from 'react'

const SeriesPh = (props) => {
  return (
    <>
        <div className='relative shrink-0  '>
          <h1 className='absolute top-1/2 -left-4 text-8xl [-webkit-text-stroke:1px_#ddd] text-[rgb(17,17,17)] font-bold'>{props.id}</h1>
          <img className='h-50  rounded-2xl' src={props.picture} alt="" />
        </div>
    </>
  )
}

export default SeriesPh
