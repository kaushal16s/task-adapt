import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactSearch from './pages/ContactSearch'
import Company from './pages/Company';
import MyList from './pages/MyList'
import Integration from './pages/Integration'
import Conceige from './pages/Conceige'


function App() {
  return (
    <>
    <Navbar/>
   
    <div className="App">
     
   <Routes>
   
     <Route path= "/ContactSearch" element={<ContactSearch/>}/>
     <Route path= "/Company" element={<Company/>}/>
     <Route path= "/MyList" element={<MyList/>}/>
     <Route path= "/Integration" element={<Integration/>}/>
     <Route path= "/Conceige" element={<Conceige/>}/>
   </Routes>
   
   
    </div>
    </>
  );
}

export default App;
