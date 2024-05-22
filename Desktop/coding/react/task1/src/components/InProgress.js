import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import SideNavBar from './SideNavBar';

const InProgress = (props) => {

    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = localStorage.getItem('blogs');
    setBlogs(blogs ? JSON.parse(blogs) : []);
  }, []);

  const handleStatusChange = (blogIndex) => {
    const _blogs = blogs.map((blog, index) => {
      if (index === blogIndex) {
        return { ...blog, status: 'complete' };
      }
      return blog;
    });
    setBlogs(_blogs);
    localStorage.setItem('blogs', JSON.stringify(_blogs));
  };

  return (
    <div className={`bg-${props.mode} w-full h-screen`}>
            <div className={`text-${props.mode==='white'?'black':'white'}`}>
                <h1 className='text-2xl font-bold m-5'>In-Progress Tasks</h1>
                <div className='flex flex-wrap justify-around'>
                {
        blogs && blogs.length > 0 ?
          blogs.filter(blog => blog.status === 'in-progress').map((blog, blogIndex) => (
            <div key={blogIndex} className='w-56 h-56 p-2 border rounded-md border-3 bg-black text-white m-5'>
              <div className='my-5 mx-2'>
                <p><span className='font-bold text-red-700'>Title : </span>{blog?.title}</p>
                <p><span className='font-bold text-red-700'>Description : </span>{blog?.description}</p>
                <p><span className='font-bold text-red-700'>Date : </span>{blog?.date}</p>
              </div>
              <div className='flex justify-around'>
                <img className='w-8 h-8' onClick={() => handleStatusChange(blogIndex)} src="images/tick1.png" alt="tick" />
              </div>
            </div>
          )) 
        :  <p className='m-5'>No Data found</p>
      }
                </div>
     
            </div>
        </div>
    
  )
}

export default InProgress
