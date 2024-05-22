import React from 'react'

const Filter = ({onFilterChange}) => {

    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
      };
  return (
    <div className='w-20 h-8 bg-white text-black rounded-md'>
      <select name="" id="" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  )
}

export default Filter
