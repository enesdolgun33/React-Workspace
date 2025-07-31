import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005";

function App() {

// get istekleri
  const getAllUsers = async ()=>{
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`); // template literal örneği iki farklı şekilde de kullanılabilir (+ yerine) [ALT GR + ,, kısayolu ile]
    console.log(response.data)
  }

// post ile user ekleme
  const createUser = async (newUser)=>{
    // POST : veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`,newUser);
    console.log(response.data);
  }

// put ile user güncelleme
  const updateUser = async (userId , updatedUser)=>{
    // PUT : veri guncellemek ıcın  kullanılır
    const response = await axios.put(`${BASE_URL}/users/${userId}`,updatedUser);
  }

// delete ile user silme
  const deleteUserById = async (userId)=>{
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  }






// Burası async - await çalışma prensibini daha güzel anlamak için :
// kodu çalıştırmak için promise beklenir bu şekilde de uygulmamız hata vermez 
// (senkronize çalışırlar)

  const getUserBYId = async (userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostById = async (postId)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  }

  const getPost = async ()=>{
    const postId = await getUserBYId(1);
    const postData = await getPostById(postId);
    console.log(postData);
  }



  useEffect(()=>{
    // getAllUsers();
    
    // getUserById(1);


    // const newUser = {
    //   "username" : "arda",
    //   "password" : "0606"
    // }
    // createUser(newUser)

    // updateUser("0e16",{
    //   "username" : "ardackr",
    //   "password" : "ardackr1907"
    // })

    // deleteUserById("0e16")

    getPost();
  },[])
  
  return (
    
    <div>
   </div>
  )
}

export default App
