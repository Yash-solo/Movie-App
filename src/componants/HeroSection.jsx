import "./style.css"
const HeroSection = (props) => {
  return (
    <>
      <div className="relative w-full md:mask-[linear-gradient(to_right,transparent_0%,black_5%_95%,transparent_100%)]  md:relative md:-top-25 md:p-0 md:py-0 p-3  py-5 flex items-center justify-around">
        <div className="h-full w-full bg-[rgba(0,0,0,0.2)] md:bg-[rgba(0,0,0,0.3)] absolute"></div>
        
        {/* For dekstop Devices */}
        <div className="text-white hidden  absolute lg:gap-3 lg:bottom-20 bottom-5 gap-1 md:flex flex-col px-25">  
          <h1 className="text-5xl font-semibold lg:text-7xl lg:tracking-[40px] tracking-[30px]">{props.MovieName}</h1>
          <p className="tracking-[10px]">== 2898 AD ==</p>
          <ul className="text-sm flex gap-5">
            <li>⭐8.1/10   |</li>
            <li>2024   |</li>
            <li> Sci-Fi </li>
            <li className="list-disc">Action </li>
            <li className="list-disc"> Adventure</li>
          </ul>
          <p className="text-[#ddd] font-serif lg:w-1/2">The story follows a modern avatar of Vishnu, inspired by Hindu mythology, who arrives on Earth to protect the world from evil forces</p>
          <div className="flex gap-7">
            <button className="p-2 px-7 cursor-pointer bg-red-500">Watch Now</button>
            <button className="p-2 px-7 border cursor-pointer border-[#ddd]">Add Watch Later</button>
          </div>
        </div>

        {/* For Mobile devices */}
        <div className="bg-[rgba(255,255,255,0.1)] md:rounded-none shadow-[0px_5px_10px_rgba(255,255,255,0.1)] border border-[#727171] rounded-3xl overflow-hidden flex itmes-center gap-1 justify-around flex-col">
          <img className="object-cover " src={props.heroMovie} alt="" />
          <div className="px-7 p-2 md:hidden">
            <h1 className="text-3xl w-full z-30 text-center md:text-5xl text-white  tracking-[10px] font-serif">{props.MovieName}</h1>
            <p className=" text-[#ddd] text-[12px] text-center">== 2898 AD ==</p>
            
            <ul className="flex text-white z-30 md:text-lg text-[8px] items-center justify-start gap-10">
              <li>⭐8.1/10   |</li>
              <li>2024   |</li>
              <li> Sci-Fi </li>
              <li className="list-disc">Action </li>
              <li className="list-disc"> Adventure</li>
            </ul>

            <div className="flex p-2 gap-2 items-center justify-around">
              <button className="font-bold z-30 text-[15px] md:px-7 cursor-pointer md:text-lg rounded-2xl px-4 p-2 text-gray-900 bg-amber-200 ">&#9655; Watch Now</button>
              <button className="font-bold z-30 rounded-2xl md:px-7 cursor-pointer md:text-lg  border border-[#ddd] px-3 text-[15px] p-2 text-[#ddd] bg-none">+ Add to my List</button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
