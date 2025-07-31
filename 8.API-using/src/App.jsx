import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005";

function App() {

// get istekleri
  const getAllUsers = async()=>{
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async(userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`); // template literal örneği iki farklı şekilde de kullanılabilir (+ yerine)
    console.log(response.data)
  }

// post ile user ekleme
  const createUser = async(newUser)=>{
    // POST : veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`,newUser);
    console.log(response.data);
  }

  useEffect(()=>{
    // getAllUsers();
    // getUserById(1);

    const newUser = {
      "username" : "arda",
      "password" : "0606"
    }
    createUser(newUser)
  },[])
  
  return (
    
    <div>
   </div>
  )
}

export default App
