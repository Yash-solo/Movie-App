import "./style.css";
import React from 'react'
import filmImage from "/hanuman ansh.jpg";
const Latest = () => {
  return (
    <>
        <div className="relative w-full p-6 flex flex-col gap-2 items-start justify-around md:px-25 ">
            <ul className="text-white font-bold list-disc">
                <li>Latest Movies</li>
            </ul>

            <div className="w-full [&::-webkit-scrollbar]:hidden overflow-x-auto  p-2 flex items-center justify-around gap-3">
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImage} alt="" /></div>
                <div className="h-45 shrink-0 w-30"><img className="w-30 h-45 rounded-2xl object-cover" src={filmImgae} alt="" /></div>
            </div>
            {/* Right button */}
            <button className="bg-white rounded-2xl absolute top-[50%] hidden md:flex right-25 p-1">
                <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
            </button>
            {/* Left btn */}
            <button className="bg-white rounded-2xl absolute top-[50%] left-25 md:flex hidden p-1">
                <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H5"/>
                    <path d="m12 19-7-7 7-7"/>
                </svg>
            </button>
        </div>
    </>
  )
}

export default Latest
