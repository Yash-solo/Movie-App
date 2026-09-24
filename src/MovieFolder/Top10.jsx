import { nanoid } from 'nanoid';
import { useEffect, useState, useRef } from 'react'
//main top function 
import MovieCard from '../componants/MovieCard';
const Top10 = (props) => {
    //open section or not?
    const [isopen, setopen] = useState(false);

    //open close section
    function handleChange() {
        setopen(!isopen);
    }
    //template that will show the pic only of the movie
    const realTemplate = [(
        <div key={props.id + 1} onClick={() => handleChange()} className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>{props.id + 1}</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src={props.picture} alt={props.MovieName} />
        </div>
    )]
    //return which template
    return (
        <>
            {isopen ? <MovieCard setopen={setopen} MovieName = {props.MovieName} path={props.path} category={props.category} picture={props.picture}/>: realTemplate}
        </>
    )
}

export default Top10
