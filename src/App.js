import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Sidebar'
import Home from '../src/Pages/Home'
import Doctor from './Pages/Doctor';


function App() {
  return (
    <div className='flex'>
      <Router>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
