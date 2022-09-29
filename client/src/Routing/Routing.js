import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from '../components/Header/Header';
import MainBody from '../components/MainBody/MainBody';
import SidebarLeft from '../components/MainBody/SidebarLeft';

function Routing() {
  return (
      <BrowserRouter>
    <div> 
    <Header/>
    <Routes>
      <Route path="/" element={<MainBody/>} />
      <Route path="/sidebar" element={<SidebarLeft/>} />
    </Routes>
  </div>
  </BrowserRouter>
    
  )
}

export default Routing