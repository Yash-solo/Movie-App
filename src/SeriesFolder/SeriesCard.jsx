import { useState } from 'react';
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
import Episode from './Episode';
const SeriesCard = (props) => {
    //use navigator to reload MyList
    const navigator = useNavigate();
    //open season onclick
    const [openSeason,setseason] = useState(props.content.Season1);
    const [seasonname , setSeasonName] = useState("Season1");
    //render episodes
    const renderEp = openSeason.map((err)=>{
        return <Episode category={props.category}SeriesName={props.SeriesName} season={seasonname} path={err.path} key={err.ep} ep={err.ep}/>
    })
    //render categories
    const categoryDis = props.category.map((cate)=>{
        return <li key={nanoid()}>{cate}</li>
    })
    //get all seasons
    const season = Object.keys(props.content);//get seasons
    //render all seasons
    const renderseason = season.map((season)=>{
        return <li key={nanoid()} onClick={()=>{
            setSeasonName(`${season}`)
            setseason(props.content[season])
        }} className='px-2 border border-[#343434] cursor-pointer p-1 text-[#ddd] bg-[#2b2a2a] rounded-[5px]'>{season}</li>
    })
    //remove btn while editing myList
    const removeBtn = (
        <>
            <button onClick={()=>{
                    //user friendly message
                    alert(`${props.SeriesName} successfully Removed from MyList`)
                    const previousItem = JSON.parse(localStorage.getItem("WatchSeriesLater"));
                    const newList = previousItem.filter((series)=>series!==props.SeriesName)
                    localStorage.setItem("WatchSeriesLater",JSON.stringify(newList))
                    navigator("/MyList")
                }} className='mt-3 p-2 rounded-lg hover:bg-[#ddd] cursor-pointer font-semibold hover:text-black w-full border border-[#ddd]'>Remove From Watchlist</button>
        </>
    )
    //add Btn while adding a list item
    const addBtn = (
        <>
            <button onClick={()=>{
                    //user friendly message
                    alert(`${props.SeriesName} successfully Added to MyList`)
                    const previousItem = JSON.parse(localStorage.getItem("WatchSeriesLater"));
                    if(previousItem!==null){
                        if(previousItem.includes(props.SeriesName)){
                            return 
                        }
                            localStorage.setItem("WatchSeriesLater",JSON.stringify([...previousItem,props.SeriesName]))
                        }else{
                            localStorage.setItem("WatchSeriesLater",JSON.stringify([props.SeriesName]))
                        }
                }} className='mt-3 p-2 rounded-lg hover:bg-[#ddd] cursor-pointer font-semibold hover:text-black w-full border border-[#ddd]'>+ Add To Watch Later</button>
        </>
    )
  return (
    <>
        <div className='w-full flex items-center justify-around fixed z-1000 top-0 left-0 h-screen bg-[rgba(17,17,17,0.3)] backdrop-blur-[5px] p-4'>
            <div className=' w-9/10 md:w-1/2 rounded-2xl border border-[#646464]  bg-[rgba(17,17,17)] p-3 text-white'>
                {/* cut btn */}
                <button onClick={() => props.setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                {/* image and category */}
                <div className='flex flex-row gap-3 '>
                    <img className="h-50 rounded-2xl" src={props.picture} alt="MovieName" />
                    <div>
                        <h1 className='text-lg font-bold'>{props.SeriesName}</h1>
                        <ul className='flex text-[#ddd] px-4 flex-col list-decimal'>
                            {categoryDis}
                        </ul>
                    </div>
                </div>
                {/* render all seasons */}
                <ul className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  p-1 py-3  gap-3 '>
                    {renderseason}
                </ul>
                {/* Show episodes */}
                <div className='w-full p-2 bg-[rgba(40,39,39,0.7)] rounded-2xl border border-[#393939]'>
                    <h1 className='w-full p-1 font-mono text-center'>{seasonname}</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden  md:max-h-42 max-h-40 '>
                        {renderEp}
                    </div>
                </div>
                {/* show btn according usage */}
                {props.inList?removeBtn:addBtn}
            </div>
        </div>
    </>
  )
}

export default SeriesCard
