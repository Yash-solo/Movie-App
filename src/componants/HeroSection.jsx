import "./style.css"
import Navbar from "./Navbar"
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative w-full bg-[url('./photos/herosection.png')] bg-repeat-round md:bg-no-repeat bg-cover md:bg-contain h-80 md:h-[42vh] lg:bg-cover lg:h-screen">
      <div className="h-full absolute w-full bg-[rgba(0,0,0,0.3)]"></div>
      <Navbar/>
      <div className="md:h-100 h-50 flex flex-col gap-1 md:gap-2 items-start justify-end py-10 md:px-0 px-5 w-100 md:w-120 absolute bottom-0 md:left-25">
        <h1 className="font-semibold  text-lg md:text-5xl text-gray-100 font-serif tracking-[25px] md:tracking-[55px]">KALKI</h1>
        <p className="font-semibold text-[8px] md:text-lg text-gray-100 font-serif tracking-[10px]">== 2898 AD ==</p>
        <ul className="flex text-white md:text-lg text-[8px] items-center justify-start gap-10">
            <li>⭐8.1/10   |</li>
            <li>2024   |</li>
            <li> Sci-Fi </li>
            <li className="list-disc">Action </li>
            <li className="list-disc"> Adventure</li>
        </ul>
        <p className="md:w-full text-[10px] w-1/2 text-gray-200">atque qui quas maxime, expedita dolorum quisquam, voluptate sapiente velit dolor tempora consectetur nihil ipsum.</p>
        <div className="flex item-center justify-start gap-3 ">
            <button className="p-2 md:px-15 rounded-[10px] bg-yellow-200 ">Watch Now</button>
            <button className="p-2 text-white bg-[rgba(0,0,0,0.2)] md:px-15 rounded-[10px] border border-[#ddd]">Add Watch Later</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
