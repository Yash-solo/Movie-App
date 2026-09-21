import "./style.css"
import Navbar from "./Navbar.jsx"
const HeroSection = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full p-3 md:p-10 md:px-25 py-5 flex items-center justify-around">
        <div className="bg-[rgba(255,255,255,0.1)] shadow-[0px_5px_10px_rgba(255,255,255,0.1)] border border-[#727171] rounded-3xl overflow-hidden flex itmes-center gap-1 justify-around flex-col">
          <img className="object-cover" src="./photos/herosection.png" alt="" />
          <div className="px-7 p-2 ">
            <h1 className="text-3xl w-full text-center md:text-5xl text-white  tracking-[10px] font-serif">Kalki</h1>
            <p className=" text-[#ddd] text-[12px] text-center">== 2898 AD ==</p>
            
            <ul className="flex text-white md:text-lg text-[8px] items-center justify-start gap-10">
              <li>⭐8.1/10   |</li>
              <li>2024   |</li>
              <li> Sci-Fi </li>
              <li className="list-disc">Action </li>
              <li className="list-disc"> Adventure</li>
            </ul>

            <div className="flex p-2 gap-2 items-center justify-around">
              <button className="font-bold text-[15px] md:px-7 cursor-pointer md:text-lg rounded-2xl px-4 p-2 text-gray-900 bg-amber-200 ">&#9655; Watch Now</button>
              <button className="font-bold rounded-2xl md:px-7 cursor-pointer md:text-lg  border border-[#ddd] px-3 text-[15px] p-2 text-[#ddd] bg-none">+ Add to my List</button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
