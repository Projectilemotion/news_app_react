import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AllNews from './Pages/AllNews';
import Top_Headlines from './Pages/Top_Headlines';
import Search from './Pages/Search';

function App() {
  const [filter,setFilter]=useState({'country':'','language':'','sort_by':'publishedAt'})
  return (
    <>
      <Router>
        <Navbar filter={{'filter':filter,'setFilter':setFilter}}/>
        <Routes>
          <Route path="/" element={<AllNews filter={{'filter':filter,'setFilter':setFilter}} />} />
          <Route path="/Top-Headline" element={<Top_Headlines filter={{'filter':filter,'setFilter':setFilter}}/>}/>
          <Route path="/search/:query" element={<Search filter={{'filter':filter,'setFilter':setFilter}}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
