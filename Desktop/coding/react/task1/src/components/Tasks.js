import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect,useMemo } from 'react'

const Tasks = ({filter,mode,searchTerm}) => {

  const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogs = localStorage.getItem('blogs')
        setBlogs(JSON.parse(blogs))
    }, [blogs])

    const handleDelete = (blogOutIndex) => {
        const _blogs = blogs.filter((blog, blogInIndex) => {
            if (blogInIndex !== blogOutIndex) {
                return blog
            }
        })
        console.log(_blogs)
        setBlogs(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
    }

    const handleEdit = (blogIndex) => {
        localStorage.setItem('editIndex', blogIndex)
        navigate('/edit')
    }

    const handleStatusChange = (blogIndex) => {
      const _blogs = blogs.map((blog, index) => {
        if (index === blogIndex) {
          return { ...blog, status: 'in-progress' };
        }
        return blog;
      });
      setBlogs(_blogs);
      localStorage.setItem('blogs', JSON.stringify(_blogs));
    };

    const filteredBlogs = useMemo(() => {
      if (searchTerm) {
        return blogs.filter(blog => 
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return blogs;
    }, [blogs, searchTerm]);

    const getPriorityClass = (priority) => {
      switch (priority) {
        case 'High':
          return 'bg-red-800';
        case 'Medium':
          return 'bg-orange-500';
        case 'Low':
          return 'bg-green-800';
        default:
          return 'bg-gray-500';
      }
    };


  return (
    <div>
      <h1 className={`text-2xl font-bold m-5 `}>Tasks</h1>
      <div className='flex flex-wrap justify-around'>
      {filteredBlogs && filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, blogIndex) => (
          
            <div key={blogIndex} className={`w-56 h-56 p-2 border rounded-md border-3  ${getPriorityClass(blog.priority)} text-white m-5`}>
            <div className='my-5 mx-2'>
              <p><span className='font-bold text-black'>Title : </span>{blog?.title}</p>
              <p><span className='font-bold text-black'>Description : </span>{blog?.description}</p>
              <p><span className='font-bold text-black'>Date : </span>{blog?.date}</p>
              <p><span className='font-bold text-black'>Priority : </span>{blog?.priority}</p>
            </div>
            <div className='flex justify-around'>
              <img className='w-8 h-8' onClick={() => handleDelete(blogIndex)} src="images/delete.png" alt="delete" />
              <img className='w-8 h-8' onClick={() => handleEdit(blogIndex)} src="images/edit.png" alt="edit" />
              <img className='w-8 h-8' onClick={() => handleStatusChange(blogIndex)} src="images/tick1.png" alt="tick" />
            </div>
          </div>
           
        ))
      ) : (
        <p className='m-5'>No Data found</p>
      )}
       </div>
    </div>
  )
}

export default Tasks
