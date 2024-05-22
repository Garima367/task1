import React, { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import Add from './Add.js'
import Navbar from './Navbar.js'
import Tasks from './Tasks.js'
import SideNavBar from './SideNavBar.js'
import GoogleAuth from './GoogleAuth.js'


const LandingPage = (props) => {
  
  return (
    <>
    <div className={`bg-${props.mode} w-full h-screen`}>
    
      <div>
        <Tasks searchTerm={props.searchTerm} filter={props.filter}/>
      </div>
    
   </div>
    </>
  )
}

export default LandingPage
