
const WatchMe = (props) => {
  return (
    <div className='flex flex-col items-center justify-around'>
        <img className="h-50 rounded-2xl border border-gray-400"src={props.picture} alt="MovieName" />
        <h1 className='p-1 font-bold text-white text-lg'>{props.movieName}</h1>
    </div>
  )
}

export default WatchMe
