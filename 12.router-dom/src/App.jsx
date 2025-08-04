import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


// Routes Route

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>

    </div>
  )
}
import { formToJSON } from 'axios'
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

export default App
