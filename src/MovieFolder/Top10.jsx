import { nanoid } from 'nanoid';
import { useEffect,useState,useRef} from 'react'
//main top function 
const Top10 = (props) => {
    const [isopen,setopen] = useState(false);
    
    function handleChange(){
        setopen(!isopen);
    }
    const FakeTemplate = [(
        <>
        <div className='h-full w-full top-0 left-0 z-1000 p-2 backdrop-blur-[10px] bg-[rgba(17,17,17,0.3)] fixed  flex items-center justify-center'>
            <div className='p-3 px-6 shadow-[0px_0px_20px_rgba(255,255,255,0.2)] rounded-2xl border border-[#535252] flex-col w-3/4 bg-[rgba(17,17,17)] fixed  flex items-start justify-start'>
                <button onClick={()=>setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                <div className='flex flex-row gap-5'>
                    <img className="h-50 md:h-70 rounded-2xl" src={props.picture} alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#ddd] font-semibold text-[20px] md:text-4xl'>{props.MovieName}</h1>
                        <h2 className='text-[#ddd] md:text-[25px]'>⭐8.2 rating</h2>
                        <h2 className='text-[#ddd] text-[17px] md:text-[20px]'>Category</h2>
                        <ul className='px-5 text-gray-300  md:text-[20px] list-decimal'>
                            <li>history</li>
                            <li>biography</li>
                            <li>spiritual biopic</li>
                            <li>drama</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full py-2 md:py-5 flex flex-col md:flex-row items-center gap-2 justify-around'>
                    <button className='text-lg bg-red-500 px-3 cursor-pointer p-2 w-full rounded-lg font-bold text-[#ddd]'>Watch Now</button>
                    <button className='text-lg border border-[#ddd] cursor-pointer px-3 p-2 w-full rounded-lg font-bold text-[#ddd]' >Add To Watch Later</button>
                </div>
            </div>
        </div>
        </>
    )]
    const realTemplate = [(
        <>
            <div onClick={()=>handleChange()}key={props.id+1} className='relative shrink-0'>
                <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>{props.id+1}</h1>
                <img className='h-50   rounded-2xl cursor-pointer' src={props.picture} alt={props.MovieName} />
            </div>
        </>
    )]

  return (
    <>
        {isopen?FakeTemplate:realTemplate}
    </>
  )
}

export default Top10
