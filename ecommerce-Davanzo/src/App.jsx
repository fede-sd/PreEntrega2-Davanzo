import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navbar } from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>    
    <Route path="/" element={ <ItemListContainer />}/>
    <Route path="categories/:categoryId" element={<ItemListContainer />}/>
    <Route path="product/:productId" element={<ItemDetailContainer />}/>      
    </Routes>
    </BrowserRouter>
  );
}

export default App;