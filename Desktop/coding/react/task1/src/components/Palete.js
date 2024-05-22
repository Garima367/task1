import React from 'react'

const Palete = ({colors,setColors}) => {
   
    
  return (
    <div onClick={setColors} className={`w-6 h-6 rounded-full bg-${colors}-500` } ></div>
  )
}

export default Palete;
