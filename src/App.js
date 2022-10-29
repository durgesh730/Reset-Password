import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import User from './component/User';
import BottomNav from './component/BottomNav';
// import Changed from './component/Changed';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <User/>
         {/* <Changed/> */}
         <BottomNav/>
    </div>
  );
}

export default App;
