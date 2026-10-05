
const Onlynetflix = (props) => {
  return (
    <img key={props.id} onClick = {()=>{
        alert("This movie is only available on netflix")
    }} className="cursor-pointer hover:shadow-[0px_0px_10px_rgba(0,0,0)] h-50 hover:scale-110 transition-all duration-150 ease-in-out rounded-2xl shrink-0" src={props.picture} alt="Movie" />
  )
}

export default Onlynetflix
