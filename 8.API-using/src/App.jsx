import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async()=>{
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async(userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`); // template literal örneği iki farklı şekilde de kullanılabilir (+ yerine)
    console.log(response.data)
  }

  useEffect(()=>{
    // getAllUsers();
    getUserById(1);
  },[])
  
  return (
    
    <div>
      enes
   </div>
  )
}

export default App
