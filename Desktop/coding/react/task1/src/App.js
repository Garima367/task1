
// import './App.css';
// import LandingPage from './components/LandingPage.js';
// import ColorPalette from './components/ColorPalette.js';
// import { useEffect, useState } from 'react';
// import Card from './components/Card.js';
// import Add from './components/Add.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginForm from './components/LoginForm.js';
// import Edit from './components/Edit.js';
// import InProgress from './components/InProgress.js';
// import CompletedTasks from './components/CompletedTasks.js';
// import Tasks from './components/Tasks.js';
// import Navbar from './components/Navbar.js';
// import SideNavBar from './components/SideNavBar.js';
// import FilterTask from './components/FilterTask.js';


// function App() {


//   const [mode,setMode]=useState('white')

//   const [buttonColor, setButtonColor] = useState('#FFFFFF'); // Initial button color

//   const handleColorChange = (color) => {
//     setButtonColor(color);
//   };


//   const toggleMode=()=>{
//     if(mode==='white'){
//       setMode('black')
//       document.body.style.backgroundColor='black';
//       document.body.style.color='white'
//     }
//     else{
//       setMode('white')
//       document.body.style.backgroundColor='black';
//       document.body.style.color='black'
// }
//   }

//   const [filter, setFilter] = useState('all');
//   const [user, setUser] = useState(null);
//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };
  
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };
//   return (
//     <>
//     <Router>
//       <div className="app">
//         <Navbar buttonColor={buttonColor} onSelectColor={handleColorChange} user={user} onSearch={handleSearch} onFilterChange={handleFilterChange} toggleMode={toggleMode} />
//         <div className='flex'>
//         <div >
//           <SideNavBar buttonColor={buttonColor} />
//           </div>
//           <div className='w-full h-screen'>
//             <Routes>
//               <Route path="/" element={<LandingPage setUser={setUser} mode={mode} searchTerm={searchTerm} filter={filter} />} />
//               <Route path="/add" element={<Add buttonColor={buttonColor} searchTerm={searchTerm} mode={mode} />} />
//               <Route path="/login" element={<LoginForm buttonColor={buttonColor} mode={mode} />} />
//               <Route path="/edit" element={<Edit buttonColor={buttonColor} mode={mode} />} />
//               <Route path="/task" element={<Tasks mode={mode} />} />
//               <Route path="/progress" element={<InProgress mode={mode} />} />
//               <Route path="/completed" element={<CompletedTasks mode={mode} />} />
//               <Route path="/filtertask" element={<FilterTask  mode={mode}/>} />
//             </Routes>
          
//         </div>
//         </div>
//       </div>
//     </Router>
//    </>
//   );
// }

// export default App;


import './App.css';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNavBar from './components/SideNavBar';
import LandingPage from './components/LandingPage';
import Add from './components/Add';
import LoginForm from './components/LoginForm';
import Edit from './components/Edit';
import InProgress from './components/InProgress';
import CompletedTasks from './components/CompletedTasks';
import Tasks from './components/Tasks';
import FilterTask from './components/FilterTask';

function App() {
  const [mode, setMode] = useState('white');
  const [buttonColor, setButtonColor] = useState('#f56816');

  const handleColorChange = (color) => {
    setButtonColor(color);
  };

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  const [filter, setFilter] = useState('all');
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Router>
        <div className="app">
          <Navbar
            buttonColor={buttonColor} onSearch={handleSearch}
            
          />
          <div className="flex">
            <div>
              <SideNavBar buttonColor={buttonColor} onSelectColor={handleColorChange}
            user={user}
            
            onFilterChange={handleFilterChange}
            toggleMode={toggleMode}/>
            </div>
            <div className="w-full h-screen">
              <Routes>
                <Route path="/" element={<LandingPage setUser={setUser} mode={mode} searchTerm={searchTerm} filter={filter} />} />
                <Route path="/add" element={<Add buttonColor={buttonColor} searchTerm={searchTerm} mode={mode} />} />
                <Route path="/login" element={<LoginForm buttonColor={buttonColor} mode={mode} />} />
                <Route path="/edit" element={<Edit buttonColor={buttonColor} mode={mode} />} />
                <Route path="/task" element={<Tasks mode={mode} />} />
                <Route path="/progress" element={<InProgress mode={mode} />} />
                <Route path="/completed" element={<CompletedTasks mode={mode} />} />
                <Route path="/filtertask" element={<FilterTask mode={mode} />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;