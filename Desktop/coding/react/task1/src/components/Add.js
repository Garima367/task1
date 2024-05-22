import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Button from './Button';

const Add = ({ mode, searchTerm, buttonColor }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [dateError, setDateError] = useState('');

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : [];
    setTasks(storedTasks);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim() !== '') {
      setTitleError('');
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    if (e.target.value.trim() !== '') {
      setDescriptionError('');
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (e.target.value !== '') {
      const selectedDate = new Date(e.target.value);
      const currentDate = new Date();
      if (selectedDate >= currentDate.setHours(0, 0, 0, 0)) {
        setDateError('');
      }
    }
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleClick = () => {
    navigate('/');
  };

  const validate = () => {
    let valid = true;

    if (title.trim() === '') {
      setTitleError('Title is required');
      valid = false;
    } else {
      setTitleError('');
    }

    if (description.trim() === '') {
      setDescriptionError('Description is required');
      valid = false;
    } else {
      setDescriptionError('');
    }

    if (date === '') {
      setDateError('Date is required');
      valid = false;
    } else {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
        setDateError('Date cannot be in the past');
        valid = false;
      } else {
        setDateError('');
      }
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newTask = { title, description, date, priority };

      const storedTasks = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : [];
      storedTasks.push(newTask);
      localStorage.setItem('blogs', JSON.stringify(storedTasks));
      setTasks(storedTasks);

      navigate('/');
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
  }, [tasks, searchTerm]);

  return (
    <>
      <div className={`w-full h-screen bg-${mode}`}>
        <div className="flex items-center justify-center m-10">
          <div className="w-full max-w-lg bg-black border-2 rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold text-2xl text-white">Add Task</h1>
              <button className="w-6 h-6 rounded-md px-1" style={{ backgroundColor: buttonColor }}>
                <img className="w-4 h-4 cursor-pointer" onClick={handleClick} src="images/cross.png" alt="close" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="text-white">Title</label>
                <input className="w-full rounded-md p-2 mt-1" type="text" name="title" onChange={handleTitleChange} placeholder="Enter title here..." value={title} id="title" />
                {titleError && <span className="text-red-700 font-bold">{titleError}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="text-white">Description</label>
                <input className="w-full rounded-md p-2 mt-1" type="text" name="description" onChange={handleDescriptionChange} placeholder="Enter description here..." value={description} id="description" />
                {descriptionError && <span className="text-red-700 font-bold">{descriptionError}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="text-white">Date</label>
                <input className="w-full rounded-md p-2 mt-1" type="date" name="date" onChange={handleDateChange} value={date} id="date" />
                {dateError && <span className="text-red-700 font-bold">{dateError}</span>}
              </div>
              <div className="mb-4">
                <label className="text-white" htmlFor="priority">Priority</label>
                <select className="w-full rounded-md p-2 mt-1" name="priority" id="priority" onChange={handlePriorityChange} value={priority}>
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="flex justify-center mt-6">
                <Button buttonColor={buttonColor} value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
