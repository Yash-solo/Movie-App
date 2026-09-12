import React from 'react'
import "./style.css"
const Navbar = () => {
  return (
    <div className='w-full p-3 md:px-25 flex items-center justify-around gap-4 text-white'>
      <div className='flex items-center justify-around gap-2'>
        <img className="h-7"src="src/photos/video-camera (1).png" alt="" />
        <p className='text-2xl font-bold'>Daily.Movies</p>
      </div>
      <div className='sidebar -right-full fixed h-screen w-3/4 z-50 top-0 backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)]'>
        <ul className='flex  flex-col items-center justify-around gap-10 '>
            <img className="h-7 " src="src/photos/logout-svgrepo-com.png" alt="" />
            <li>Faviorate</li>
            <li>Saved</li>
            <li>History</li>
        </ul>
      </div>
      <ul className='items-center flex justify-around gap-10 '>
        <img className="h-7 md:hidden flex "src="src/photos/burger-menu-right-svgrepo-com.png" alt="" />
        <li className='md:flex hidden'>Faviorate</li>
        <li className='md:flex hidden'>Saved</li>
        <li className='md:flex hidden'>History</li>
      </ul>
    </div>
  )
}

export default Navbar
