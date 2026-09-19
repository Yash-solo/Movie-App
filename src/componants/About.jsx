import "./style.css";
import React from 'react'
import videoCam from "/photos/video-camera (1).png"
const About = () => {
  return (
    <>
        <div className="w-full border border-b-0 border-t-gray-600 p-5  grid grid-cols-2 gap-6 md:items-center md:flex md:justify-around ">
            <div className="flex flex-col items-center justify-around">
                <div className="flex h-full items-center justify-around gap-2 ">
                    <img className="h-5 md:h-7"src={videoCam} alt="" />
                    <h1 className="md:text-2xl text-white text-[20px] font-bold">Daily.Movies</h1>
                </div>
                <p className="hidden md:flex text-sm text-gray-400">Watch your faviorate movies</p>
            </div>
            <div className="flex flex-col items-center justify-around gap-2">
                <h1 className="text-sm text-bold text-gray-50">Navigate</h1>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">About</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Services</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Blog</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Contact</a>
            </div>
            <div className="flex flex-col items-center justify-around gap-2">
                <h1 className="text-sm text-bold text-gray-50">Explore</h1>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Home</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Faviorate</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Saved</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Movie search</a>
            </div>
            <div className="flex flex-col items-center justify-around gap-2">
                <h1 className="text-sm text-bold text-gray-50">Help & Account</h1>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Help Center</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">FAQ</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Contact Us</a>
                <a className="md:text-sm text-[12px] text-bold text-gray-400" href="#">Privacy Terms Cookies</a>
            </div>
        </div>
        <p className="w-full text-center text-sm text-[#DDD] font-serif">@2026 All rights reserved.</p>
    </>
  )
}

export default About
