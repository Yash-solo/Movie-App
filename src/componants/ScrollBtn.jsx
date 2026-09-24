import React from 'react'

const ScrollBtn = (props) => {
  return (
    <>
    {/* Left button which will scroll left after clicking */}
      <button  onClick={()=>{
        props.scroll(-550)
      }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
          <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
      </button>
      {/* Right button to scroll right */}
      <button   onClick={()=>{
          props.scroll(550);
      
      }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
          <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
      </button>
    </>
  )
}

export default ScrollBtn
