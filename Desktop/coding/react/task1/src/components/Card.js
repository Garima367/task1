import React from 'react'

const Card = () => {
  return (
    <div className='w-44 h-44 p-2 border rounded-md border-3 bg-black text-white m-5'>
      <div className='my-5'>
      <p>Title:</p>
      <p>Description:</p>
      <p>Date:</p>
      </div>
      <div className='flex justify-around' >
        <img className='w-8 h-8' src="images/delete.png" alt="" />
        <img className='w-8 h-8' src="images/edit.png" alt="" />
        <img className='w-8 h-8' src="images/tick1.png" alt="" />
      </div>
    </div>
  )
}

export default Card
