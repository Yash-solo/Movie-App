import "./style.css"
import React, { useEffect,useRef, useState } from 'react'
import { nanoid } from "nanoid";
const Recommanded = () => {
    //get categories
    const category= JSON.parse(localStorage.getItem("categories"));
    let ref = useRef(null);
    //movies that will going to render
    const [movies,setMovie] = useState([]);
    const [showBtn,setShowBtn] = useState(true);
    let showBtnLeft = useRef();
    let showBtnRight = useRef();
    //return if no recommandations
    if(category===null){
        return 
    }
    
    useEffect(()=>{
        if(movies.length<8){
            showBtnLeft.current.style.display = "none"
            showBtnRight.current.style.display = "none";
        }
    },[])
    //scroll left to right for seeing the movies
    const scroll = (scrollByNum) =>{
        if(ref.current){
            ref.current.scrollBy({
            left : scrollByNum,
            behavior: 'smooth',
            })
        }
    }
    //use this effect when you wants to give recommandations
    useEffect(()=>{
        async function getRecommand(){
            const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
            const data = await response.json();

            const newList = data.filter((movie)=>{
                let cateAgree = 0;
                for(let cate of category){
                    if(movie.category.includes(cate)){
                        cateAgree+=1;
                    }
                    if(cateAgree===2){
                        return true
                    }
                }
            })
            const RecMovieList = newList.map((movie)=>{
                return <img onClick = {()=>{
                            //open link where you can see your movie in 0 payment
                            if(movie.path!=="xyz"){

                                const getKey = JSON.parse(localStorage.getItem("watching"))
                                if(getKey!==null){
                                    localStorage.setItem("watching",JSON.stringify([...getKey,movie.id]));
                                }else{
                                    localStorage.setItem("watching",JSON.stringify([movie.id]));
                                }
                                window.open(movie.path,"_blank")
                            }else{
                                alert("Movie not found");
                            }
                        }} key = {nanoid()} className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={`${movie.picture}`} alt="MoviePic" />
            })
            setMovie(RecMovieList);
        }
        getRecommand();
    },[])
    
    //actual rendering
  return (
    <>
     <div className="fadeInClass relative w-full p-3 md:px-25 flex justify-around items-center ">
        <div className=" w-full p-2 flex flex-col gap-2  ">
            <ul className="text-white px-3 list-disc text-[15px] font-bold md:text-xl"><li>Recommanded for you:- </li></ul>
            <div ref = {ref} className="mask-[linear-gradient(to_right,transparent_0%,black_5%_95%,transparent_100%)] flex [&::-webkit-scrollbar]:hidden overflow-x-auto items-center gap-3">
                {...movies}
            </div>
            {/* Left button which will scroll left after clicking */}
            <div ref={showBtnLeft} onClick={()=>{
                scroll(-150)
            }}  className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
                <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </div>
            {/* Right button to scroll right */}
            <button ref={showBtnRight} onClick={()=>{
                scroll(150);

            }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
                <svg   xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

        </div>

    </div>
    </>
  )
}

export default Recommanded
