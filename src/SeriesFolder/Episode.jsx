import React from 'react'

function Episode(props) {
  return (
    <div className='flex items-center cursor-pointer justify-start p-1 gap-2'>
        <div className='h-15 px-5 md:px-4  md:h-15 rounded-lg border border-[#212121] p-2 flex items-center justify-around  bg-[rgba(255,255,255,0.2)]'>
            <h1>Episode:{props.ep}</h1>
        </div>
    </div>
  )
}

export default Episode
