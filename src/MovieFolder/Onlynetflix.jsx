import React from 'react'

const Onlynetflix = (props) => {
  return (
    <img key={props.id} onClick = {()=>{
        alert("This movie is only available on netflix")
    }} className="cursor-pointer h-50 rounded-2xl shrink-0" src={props.picture} alt="Movie" />
  )
}

export default Onlynetflix
