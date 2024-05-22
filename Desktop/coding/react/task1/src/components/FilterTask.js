import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const FilterTask = ({ mode }) => {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('blogs');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
      setFilteredTasks(filterTasks(parsedTasks, filter));
    }
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTasks(tasks); // Reset to show all tasks
    } else {
      setFilteredTasks(filterTasks(tasks, filter));
    }
  }, [filter, tasks]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filterTasks = (tasks, filter) => {
    return tasks.filter(task => task.priority === filter);
  };

  return (
    <div className={` w-full h-screen`}>
      <Filter onFilterChange={handleFilterChange} />
      <div className={`text-${mode === 'white' ? 'black' : 'white'}`}>
        <h1 className='text-2xl font-bold m-5'>Filtered Tasks</h1>
        <div className='flex flex-wrap justify-around'>
        {filteredTasks && filteredTasks.length > 0 ? (
          filteredTasks.map((task, taskIndex) => (
            <div key={taskIndex} className='w-56 h-56 p-2 border rounded-md border-3 bg-black text-white m-5'>
              <div className='my-5 mx-2'>
                <p><span className='font-bold text-red-700'>Title: </span>{task?.title}</p>
                <p><span className='font-bold text-red-700'>Description: </span>{task?.description}</p>
                <p><span className='font-bold text-red-700'>Date: </span>{task?.date}</p>
                <p><span className='font-bold text-red-700'>Priority: </span>{task?.priority}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='m-5'>No Data found</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default FilterTask;
