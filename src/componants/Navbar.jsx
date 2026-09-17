import "./style.css"
import React from 'react'
import { useState } from "react"
import videoCam from "/photos/video-camera (1).png"
const Navbar = () => {
    const [isOpen ,setOpen] = useState(false);
  return (
    <>
        <div className=" w-full p-3 md:px-25 flex items-center justify-center">
            <div className="text-white flex items-center justify-around rounded-2xl w-full p-2 border border-[#ddd]">
                <div className="flex items-center justify-around gap-1 ">
                    <img className="h-5 md:h-7"src={videoCam} alt="" />
                    <h1 className="md:text-2xl text-[20px] font-bold">Daily.Movies</h1>
                </div>
                <div>
                    <div onClick={()=>{
                        setOpen(!isOpen);
                        
                    }
                    } className="flex md:hidden flex-col p-2 rounded-[5px] bg-[rgba(255,255,255,0.2)] items-center justify-around gap-1">
                        <span className={`h-0.5 transform tranistion-all duration-150 ease-in-out w-5 border ${isOpen?"rotate-45 translate-y-1 ":""} border-white`}></span>
                        <span className={`h-0.5 w-5 border ${isOpen?"hidden":"flex"} border-white`}></span>
                        <span className={`h-0.5 w-5 transform tranistion-all duration-150 ease-in-out border ${isOpen?"-rotate-45 -translate-y-0.5":""} border-white`}></span>
                    </div>
                    <ul className="hidden md:flex items-center justify-around gap-5">
                        <li>Faviorate</li>
                        <li>Saved</li>
                        <li>History</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div className={`sidebar  md:hidden w-full p-5 h-1/2 backdrop-blur-[5px] absolute bg-[rgba(0,0,0,0.4)] ${isOpen?"flex items-end justify-end flex-col":"hidden"} z-30 top-15 `}>
                    <ul className="w-full flex flex-col items-center justify-around gap-5">
                        
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2">Faviorate</li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2">Saved</li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2">History</li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2">Service</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
