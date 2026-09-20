import "./style.css"
import React from 'react'
import { useState } from "react"
import videoCam from "/photos/video-camera (1).png"
import { Link } from "react-router-dom"
const Navbar = () => {
    const [isOpen ,setOpen] = useState(false);
  return (
    <>
        <div className=" w-ful p-3 md:static sticky top-2 z-1000 md:px-25 flex items-center justify-center">
            <div className="text-white z-50 md:bg-[rgba(0,0,0,0)] bg-[rgba(0,0,0,0.3)] md:border-none border border-[#ddd] flex items-center justify-between rounded-2xl  w-full p-2 ">
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Fav">TV Series</Link></li>
                        <li><Link to="/Saved">Movies</Link></li>
                        <li><Link to="/History">History</Link></li>
                    </ul>
                </div>
                <div className={`sidebar rounded-4xl  md:hidden transform transition-all duration-300 w-full p-3 h-1/2 flex items-center flex-col justify-around backdrop-blur-[5px] fixed bg-[rgba(0,0,0,0.4)] ${isOpen?"left-0":"-left-full"} top-18   `}>
                    <ul className="w-full flex flex-col items-center justify-around gap-5">

                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2"><Link to="/">Home</Link></li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2"><Link to="/Fav">TV Series</Link></li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2"><Link to="/Saved">Movies</Link></li>
                        <li className="w-full rounded-2xl hover:bg-[rgba(255,255,255,0.1)] text-center p-2"><Link to="/History">History</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
