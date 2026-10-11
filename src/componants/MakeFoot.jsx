

const MakeFoot = (props) => {

  return (
    <div className="lg:w-50 w-40 h-30 cursor-pointer overflow-hidden lg:h-40 shrink-0 rounded-2xl bg-[rgba(0,0,0,0.1)] backdrop-blur-2xl">
      <img className="w-full transform transition-all duration-150 hover:scale-110 h-full object-cover" src={props.image} alt="" />
    </div>
  )
}

export default MakeFoot
