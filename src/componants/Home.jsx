import React, { useEffect, useState } from 'react'
import SearchBar from "./Search.jsx"
import Latest from './Latest.jsx'
import Recommanded from './Recommanded.jsx'
import ContinueWatch from './ContinueWatch.jsx'
import About from './About.jsx'
const Home = () => {
  const [isLoder,setLoder] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoder(false);
    },300);
  },[])
  const ReloderTemplate = (
    <>
      <div className='h-screen w-full flex items-center justify-around '>
        <div className='rotate h-15 w-15 rounded-[50%] border-5 border-collapse border-t-gray-500 border-gray-300'></div>
      </div>
    </>
  )
  const RealTemplate = (
    <>
    <h1 className='text-2xl text-white font-bold font-serif w-full text-center'>HomePage</h1>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
      <ContinueWatch/>
      <About/>
    </>
  )
  return (
    <>
      {isLoder?ReloderTemplate:RealTemplate}
    </>
  )
}

export default Home
