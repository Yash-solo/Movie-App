import "./style.css"
import { useEffect , useReducer, useRef, useState } from "react"
import { nanoid } from "nanoid";
const ContinueWatch = () => {
    const [watchingLIST,setWathingList] = useState([]);
    const [iswatched,setWathed] = useState(false);
    const ref = useRef(null);
    let leftBtn = useRef(null);
    let rightBtn = useRef(null);

    if(watchingLIST.length<8&&watchingLIST.length!==0){
        leftBtn.current.style.display = "none";
        rightBtn.current.style.display = "none";
    }


    const scroll = (scrollByNum)=>{
        if(ref.current){
            ref.current.scrollBy({
                left:scrollByNum,
                behavior:'smooth',
            })
        }
    }

    try{
        
        useEffect(()=>{
            const getKey = JSON.parse(localStorage.getItem("watching"));
            if(getKey===null){
                console.log("getKey is null");
            }else{
                setWathed(true);
                //reduce the usablitily
                const watchingId = [];
                getKey.map((id)=>{
                    if(!watchingId.includes(id)){
                        watchingId.push(id);
                    }
                })
                
                //fetch data and filter items that contains that id
                async function getWatch(){
                    const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
                    const data = await response.json();
        
                    const filtered_list = data.filter((movie)=>{
                        return watchingId.includes(movie.id);
                    })
                    //make movies pictures
                    const watchingList = filtered_list.map((movie)=>{
                        return <img onClick={()=>{
                            const getKey = JSON.parse(localStorage.getItem("watching"));
                            localStorage.setItem("categories",JSON.stringify(movie.category));
                            //open link where you can see your movie in 0 payment
                            if(movie.path!=="xyz"){
                                if(getKey!==null){
                                    localStorage.setItem("watching",JSON.stringify([...getKey,movie.id]));
                                }else{
                                    localStorage.setItem("watching",JSON.stringify([movie.id]));
                                }
                                window.open(movie.path,"_blank")
                                
                            }else{
                                alert("Movie not found");
                            }
                        }
                        } key = {nanoid()} className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={movie.picture} alt="MoviePic" />
                    })
                    setWathingList(watchingList)
                }
                getWatch();
            }
                
        },[])
    } catch (error) {
        console.log("error is commig ",error.messege);
    }
    const fakeTemplate = ("")

    const realTemplate = (
        <div className="relative w-full p-3 md:px-25 flex items-center justify-around">
        <div className=" p-2 w-full flex items-center justify-around flex-col gap-2">
            <ul className="px-3 md:text-2xl w-full text-start text-white font-bold list-disc"><li>Continue watching</li></ul>
            <div ref={ref} className="mask-[linear-gradient(to_right,transparent_0%,black_5%_95%,transparent_100%)] [&::-webkit-scrollbar]:hidden w-full flex items-center  flex-row gap-2 p-2 overflow-x-auto ">
                {...watchingLIST}
            </div>
            {/* Left button which will scroll left after clicking */}
            <div ref={leftBtn} onClick={()=>{
                scroll(-150)
            }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </div>
            {/* Right button to scroll right */}
            <button ref={rightBtn}  onClick={()=>{
                scroll(150);

            }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
                <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    </div>
    )

  return (
   <>
    {iswatched?realTemplate:fakeTemplate}
   </>
  )
}

export default ContinueWatch
