import React, { useState } from 'react'
import '../App.css';

function TodoCreate({onCreateTodo}) {

  const [newTodo, setNewTodo] = useState('');

  const clearInput = ()=>{
    setNewTodo('');
    // her yeni todo girildiğinde inputu temizler
  }

  const createTodo = () => {
    if(!newTodo) return;
    // ekranda değer girilmemişse ekleme yapmaz

    const request = {
      id : Math.floor(Math.random() * 9999999999), //ekranda değer girilmişse bir id oluşturur
      content : newTodo // contente de ekrandan girilmiş olan değeri koyar
    }
    onCreateTodo(request) // ve bu fonksıyonu calıştırır bu da App.jsxdeki createTodo fonksiyonudur
    clearInput();
  }

  return (
    <div className='todo-create'>
        <input 
        spellCheck='false'
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        //ekrandan girilen herhangi bir input değeri setNewTodo ile newTodoya koyduk -> line:6

        className='todo-input' type="text" placeholder='To Do giriniz' />
        <button onClick={createTodo} className='todo-create-button'>To Do Oluştur</button>
    </div>
  )
}

export default TodoCreate