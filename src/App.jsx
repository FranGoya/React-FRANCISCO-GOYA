import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from './components/ItemList'
import ItemDetail from "./components/ItemDetail";
import Home from './components/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
        <Route exact path="/cart" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>






    </>
  );
};

export default App;