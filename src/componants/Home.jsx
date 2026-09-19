import React from 'react'
import SearchBar from "./Search.jsx"
import Latest from './Latest.jsx'
import Recommanded from './Recommanded.jsx'
import ContinueWatch from './ContinueWatch.jsx'
import About from './About.jsx'
const Home = () => {
  return (
    <>
    <h1 className='text-2xl text-white font-bold font-serif w-full text-center'>HomePage</h1>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
      <ContinueWatch/>
      <About/>
    </>
  )
}

export default Home
