import React from 'react'

const SeriesCard = (props) => {
    const categoryDis = props.category.map((cate)=>{
        return <li >{cate}</li>
    })
  return (
    <>
        <div className='w-full flex items-center justify-around fixed z-1000 top-0 left-0 h-screen bg-[rgba(17,17,17,0.3)] backdrop-blur-[5px] p-4'>
            <div className=' w-9/10 md:w-1/2 rounded-2xl border border-[#646464]  bg-[rgba(17,17,17)] p-3 text-white'>
                <button onClick={() => props.setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                <div className='flex flex-row gap-3 '>
                    <img className="h-50 rounded-2xl" src={props.picture} alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>{props.SeriesName}</h1>
                        <ul className='flex text-[#ddd] px-4 flex-col list-decimal'>
                            {categoryDis}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SeriesCard
