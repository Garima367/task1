// import React from 'react';
// import SearchBar from './SearchBar';
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';
// import ColorPalette from './ColorPalette';

// const Navbar = ({ user, onSearch, toggleMode,onSelectColor,buttonColor }) => {
//     const navigate = useNavigate();
//     const handleClick = () => {
//         navigate("/add");
//     };
//     return (
//         <div>
//             <div className={`w-full flex justify-between h-14 px-7 bg-black items-center`}>
//                 <div>
//                     <SearchBar onSearch={onSearch} />
//                 </div>
//                 <div>
//                     <ColorPalette onSelectColor={onSelectColor}/>
//                 </div>
//                 <div className='flex gap-2'>
//                     <div className='w-8 h-8 rounded-full p-1 bg-orange-500' onClick={handleClick}>
//                         <img className='w-8 h-6' src="images/add.png" alt="" />
//                     </div>
//                     <div onClick={toggleMode} className='w-9 h-9 rounded-full p-1 bg-orange-500'>
//                         <img src="images/theme.png" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import SearchBar from './SearchBar';

// import { Link, useNavigate } from 'react-router-dom';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import Button from './Button';

// const Navbar = ({ buttonColor,onSearch }) => {
//   const navigate = useNavigate();

//   const handleClick = (path) => {
//     navigate(path);
//   };
//   let [open,setOpen]=useState(false);
  
//   return (

//     <div className='shadow-md w-full fixed top-0 left-0 z-50'>
//       <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
//         <div>
//           <SearchBar onSearch={onSearch}/>
//         </div>
//         <div className='absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
//           <img className='w-4 h-4' src={open?'images/cross.png':'images/hamburger1.png'} alt="" />
//         </div>
        
//           <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100 md:top-0'}`}>
//             <li className={`md:ml-8 text-xl md:my-0 my-7`}><Link to="/task" style={{color:buttonColor}}>Tasks</Link></li>
//             <li className='md:ml-8 text-xl md:my-0 my-7'><Link to="/progress" style={{color:buttonColor}}>In Progress</Link></li>
//             <li className='md:ml-8 text-xl md:my-0 my-7'><Link to="/completed" style={{color:buttonColor}}>Completed</Link></li>
//             <li className='md:ml-8 text-xl md:my-0 my-7'><Link to="/filtertask" style={{color:buttonColor}}>Filter</Link></li>
//           </ul>
       
//       </div>

//     </div>
//   );
// };

// export default Navbar;

import React, { Component } from 'react';
import { Link, withRouter,useNavigate } from 'react-router-dom';
import Button from './Button';
import SearchBar from './SearchBar';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    handleNavClick = () => {
      this.props.history.push('/login');
  };

    render() {
        const { clicked } = this.state;
        const { onSearch, buttonColor } = this.props;

       
        return (
            <div className='bg-black'>
                <nav className='nav p-3'>
                    <SearchBar onSearch={onSearch}/>
                    <div>
                        
                        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
                            <li>
                                <Link to="/task" className="active" style={{color:buttonColor}}>Tasks</Link>
                            </li>
                            <li>
                                <Link to="/progress" style={{color:buttonColor}}>Progress</Link>
                            </li>
                            <li>
                                <Link to="/completed" style={{color:buttonColor}}>Completed</Link>
                            </li>
                            <li>
                                <Link to="/filtertask" style={{color:buttonColor}}>Filter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-button">
                        <Link to="/login" className='md:px-4 md:py-2 px-2 py-2 rounded-md text-white text-center' style={{backgroundColor:buttonColor}}>Login</Link>
                        {/* <Button value="Signup" height="2.5rem" width="6rem" /> */}
                    </div>
                   
                    <div className="hamburger" onClick={this.handleClick}>
                        <img className="ham-icon" id="cross-icon" src={clicked ? 'images/cross.png' : 'images/hamburger1.png'} alt="Hamburger" />
                    </div>

                </nav>
            </div>
        );
    }
}

export default Navbar;
