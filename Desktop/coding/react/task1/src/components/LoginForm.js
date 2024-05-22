import React, { useState } from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({mode,buttonColor}) => {
    const navigate=useNavigate();

    const [loginData,setLoginData]=useState({
        'email':'',
        'password':''
    })

    const [error,setError]=useState({
        'email':'',
          'password':'',
          
      })

      
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))

        if (name === 'password') {
            setError((prevError) => ({
              ...prevError,
              password: '' // Clear the error message for 'password'
            }));
          }
    }
    const validate=()=>{
        let valid=true;
        const currentDate=new Date();
        
        if(!loginData.email.trim()){
           setError((prevData)=>({
            ...prevData,
            'email':'Please enter email',
            
           }))
           valid=false
        }
       
        if(!loginData.password.trim()){
            setError((prevData)=>({
             ...prevData,
             'password':'Please enter password',
             
            }))
            valid=false
         }
         else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(loginData.password)){
            setError((prevData)=>({
                ...prevData,
                'password':'password should have minimum 8 characters and alphanumeric and one special character',
                
               }))
            valid=false
         }
       
         
  
        return valid;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
   
     if(validate()){
        console.log(loginData);
        localStorage.setItem('loginData',JSON.stringify(loginData));
        alert('Login submitted');
        navigate("/")
     }
  
    }
    const handleClick=()=>{
      navigate("/");
    }


  return (
    // <div className={`w-full h-screen bg-${props.mode}`}>
    
    //   <div className='flex justify-center items-center'>
    //     <div className='m-10 p-5 w-4/5 h-80 bg-black rounded-xl border-2'>
    //         <h1 className='text-white font-bold text-2xl text-center '>Login</h1>
    //        <form action="" onSubmit={handleSubmit}>
    //        <div>
    //             <label className='text-white font-bold m-1' htmlFor="">Email</label> <br />
    //             <input className='rounded-md m-1 p-1 w-72' type="email" name='email' value={loginData.email} placeholder='Enter email here..' id="email" onChange={handleChange} /> <br />
    //             {error.email && <span className='text-red-700 font-bold'>{error.email}</span>} <br />
    //             <label className='text-white font-bold' htmlFor="">Password</label> <br />
    //             <input className='w-72 rounded-md m-1 p-1' type="password" name='password' value={loginData.password} placeholder='Enter password here..' id="password" onChange={handleChange} /> <br />
    //             {error.password && <span className='text-red-700 font-bold'>{error.password}</span>}

    //            <div className='my-2 mx-24' style={{ backgroundColor: buttonColor }}>
    //            <Button  value="Submit"/>
    //            </div>
    //         </div>
    //        </form>
    //     </div>

    //   </div>
    // </div>
    <div className={`w-full h-screen bg-${mode}`}>
      <div className='flex justify-center items-center'>
        <div className='m-4 md:m-10 p-5 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 h-84 bg-black rounded-xl border-2'>
         <div className='flex justify-between'>
         <h1 className='text-white font-bold text-2xl text-center mb-4'>Login</h1>
          <img src="images/cross.png" onClick={handleClick} className='w-4 h-4 cursor-pointer' alt="" />
         </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='text-white font-bold' htmlFor="">Email</label> <br />
              <input className='rounded-md m-1 p-1 w-full' type="email" name='email' value={loginData.email} placeholder='Enter email here..' id="email" onChange={handleChange} /> <br />
              {error.email && <span className='text-red-700 font-bold'>{error.email}</span>} <br />
              <label className='text-white font-bold' htmlFor="">Password</label> <br />
              <input className='w-full rounded-md m-1 p-1' type="password" name='password' value={loginData.password} placeholder='Enter password here..' id="password" onChange={handleChange} /> <br />
              {error.password && <span className='text-red-700 font-bold'>{error.password}</span>}
            </div>
            <div className='my-2 text-center font-bold mx-auto md:mx-24'>
              <Button value="Submit" buttonColor={buttonColor} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
