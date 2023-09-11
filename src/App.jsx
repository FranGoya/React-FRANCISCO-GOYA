import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemList from './components/ItemList'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
       
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>






    </>
  );
};

export default App;