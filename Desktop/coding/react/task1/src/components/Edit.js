// import React, { useState } from 'react'
// import Button from './Button'
// import {useNavigate} from 'react-router-dom'
// import Navbar from './Navbar'


// const Edit = (props) => {
//   const navigate=useNavigate();
//   const handleClick=()=>{
//     navigate('/')
//   }

//     const [taskData,setTaskData]=useState({
//         'title':'',
//         'description':'',
//         'date':''
//     })

//     const [error,setError]=useState({
//       'title':'',
//         'description':'',
//         'date':''
//     })



//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setTaskData((prevData)=>({
//             ...prevData,
//             [name]:value
//         }))
//     }
//     const validate=()=>{
//       let valid=true;
//       const currentDate=new Date();
      
//       if(!taskData.title.trim()){
//          setError((prevData)=>({
//           ...prevData,
//           'title':'Please enter title',
          
//          }))
//          valid=false
//       }
//       if(!taskData.description.trim()){
//           setError((prevData)=>({
//            ...prevData,
//            'description':'Please enter description',
           
//           }))
//           valid=false
//        }
//        if(!taskData.date.trim()){
//         setError((prevData)=>({
//          ...prevData,
//          'date':'Please enter date',
         
//         }))
//         valid=false
//      }
//      else {
//       const inputDate = new Date(taskData.date);
//       if (inputDate < currentDate) {
//         setError((prevData) => ({
//           ...prevData,
//           date: 'Do not enter a past date'
//         }));
//         valid = false;
//       }
//     }
//     const input = new Date(taskData.date);
//     if (input >= currentDate) {
//       setError((prevError) => ({
//         ...prevError,
//         date: '' // Clear the error message for 'date'
//       }));
//     }
       

//       return valid;
//   }

//   const handleEdit=(e)=>{
//     e.preventDefault();
//     if(validate()){
//         console.log({taskData,index:localStorage.getItem('editIndex')})
//     let blogs=localStorage.getItem('taskData') && localStorage.getItem('taskData').length>0?JSON.parse(localStorage.getItem('taskData')):[]

//     const _blogs=blogs.map((blog,blogInIndex)=>{
//         if(blogInIndex==localStorage.getItem('editIndex')){
//             return {taskData}
//         }
//         else{
//             return blog
//         }
//     })

//     localStorage.setItem('taskData',JSON.stringify(taskData));
//       alert('Form submitted');
//       navigate("/")
   
//     }
//   }

    

//   return (
//     <>
//      <div className={`w-full h-screen bg-${props.mode}`}>
//     <Navbar/>
    
   
//     <div className={`flex items-center justify-center m-10`}>
//      <div className='w-80  bg-black   border-2 rounded-2xl'>
//       <div className='flex justify-between m-4'>
//         <h1 className='font-bold text-2xl text-white'>Add Task</h1>
//        <button className='w-6 h-6 bg-orange-500 rounded-md px-1'> <img className='w-4 h-4 cursor-pointer' onClick={handleClick} src="images/cross.png" alt="" /></button>
//       </div>
//       <div className='p-4'>
//         <form action="">
//         <label htmlFor="" className='text-white'>Title</label> <br />
//         <input className='rounded-md p-1' type="text" name='title' onChange={handleChange} placeholder='Enter title here..' value={taskData.title} id="title" /> <br />
//         {error.title && <span className='text-red-700 font-bold'>{error.title}</span>}
//         <br />
//         <label htmlFor="" className='text-white'>Description</label> <br />
//         <input type="text" className='rounded-md p-1' name="description" onChange={handleChange} placeholder='Enter description here..' value={taskData.description} id="description" /> <br />
//         {error.description && <span className='text-red-700 font-bold'>{error.description}</span>} <br />
//         <label htmlFor="" className='text-white'>Date</label> <br />
//         <input type="date" className='rounded-md p-1' name='date'onChange={handleChange}  calue={taskData.date} id="date" /> <br />
//         {error.date && <span className='text-red-700 font-bold'>{error.date}</span>}
//         <br />
//        <div className='my-6 mx-16'>
//        <Button onClick={handleEdit} value="Submit"/>
//        </div>
//         </form>
//       </div>
//     </div>
//    </div>
//     </div>
//     </>
   
//   )
// }

// export default Edit


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Button from './Button';

const Edit = ({mode,buttonColor}) => {
  const navigate = useNavigate();
 const [title,setTitle]=useState('');
 const [description,setDescription]=useState('');
 const [date,setDate]=useState('');
 const [priority, setPriority] = useState('');

const [titleError,setTitleError]=useState('');
const [descriptionError,setDescriptionError]=useState('');
const [dateError,setDateError]=useState('');
const [priorityError, setPriorityError] = useState('');


useEffect(() => {
  const editIndex = localStorage.getItem('editIndex');
  const blogs = JSON.parse(localStorage.getItem('blogs'));
  const blog = blogs[editIndex];

  setTitle(blog.title);
  setDescription(blog.description);
  setDate(blog.date);
  setPriority(blog.priority);
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
  if (e.target.value.trim() !== '') {
    setPriorityError('');
  }
};

 
  const handleClick=()=>{
    navigate('/')
  }

  const validate = () => {
    let valid = true;

    if (title.trim() === '') {
      setTitleError('Title is required');
      valid = false;
    }

    if (description.trim() === '') {
      setDescriptionError('Description is required');
      valid = false;
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
      }
    }

    return valid;
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, description, date,priority, index: localStorage.getItem('editIndex') });
      let blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : [];

      const editIndex = localStorage.getItem('editIndex');
      const _blogs = blogs.map((blog, blogInIndex) => {
        if (blogInIndex == editIndex) {
          return { title, description, date,priority };
        } else {
          return blog;
        }
      });
      console.log(_blogs);
      localStorage.setItem('blogs', JSON.stringify(_blogs));
      navigate('/');
    }
  };

  

  

  
 

  return (
    <>
      {/* <div className={`w-full h-screen bg-${mode}`}>

        <div className={`flex items-center justify-center m-10`}>
          <div className='w-80 bg-black border-2 rounded-2xl'>
            <div className='flex justify-between m-4'>
              <h1 className='font-bold text-2xl text-white'>Edit Task</h1>
              <button className='w-6 h-6 rounded-md px-1' style={{ backgroundColor: buttonColor }}>
                <img className='w-4 h-4 cursor-pointer' onClick={handleClick} src="images/cross.png" alt="close" />
              </button>
            </div>
            <div className='p-4'>
              <form onSubmit={handleEdit}>
                <label htmlFor="title" className='text-white'>Title</label> <br />
                <input className='rounded-md p-1' type="text" name='title' onChange={handleTitleChange} placeholder='Enter title here..' value={title} id="title" /> <br />
                {titleError && <span className='text-red-700 font-bold'>{titleError}</span>}
                <br />
                <label htmlFor="description" className='text-white'>Description</label> <br />
                <input type="text" className='rounded-md p-1' name="description" onChange={handleDescriptionChange} placeholder='Enter description here..' value={description} id="description" /> <br />
                {descriptionError && <span className='text-red-700 font-bold'>{descriptionError}</span>} <br />
                <label htmlFor="date" className='text-white'>Date</label> <br />
                <input type="date" className='rounded-md p-1' name='date' onChange={handleDateChange} value={date} id="date" /> <br />
                {dateError && <span className='text-red-700 font-bold'>{dateError}</span>}
                <br />
                <div className='my-6 mx-16'>
                  <Button buttonColor={buttonColor} onClick={handleEdit} value="Update" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className={`w-full h-screen bg-${mode}`}>
        
        <div className="flex items-center justify-center m-4 md:m-10">
          <div className="w-full max-w-lg bg-black border-2 rounded-2xl p-4 md:p-6">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold text-2xl text-white">Edit Task</h1>
              <button className="w-6 h-6 rounded-md px-1" style={{ backgroundColor: buttonColor }}>
                <img className="w-4 h-4 cursor-pointer" onClick={handleClick} src="images/cross.png" alt="close" />
              </button>
            </div>
            <form onSubmit={handleEdit}>
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
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
              <div className="flex justify-center mt-6">
                <Button buttonColor={buttonColor} onClick={handleEdit} value="Update" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
