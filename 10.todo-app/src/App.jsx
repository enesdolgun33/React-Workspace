import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo)=>{
    setTodos([...todos, newTodo]);
    // ... -> Spread Operator : bir dizi, nesne ya da ifadenin elemanlarını ayrı ayrı yaymak için kullanılır

  }      

  const removeTodo =(todoId)=>{
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (newTodo)=>{
    const updatedTodos = todos.map((todo)=>{
      if( todo.id!==newTodo.id){
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos]);
  }

  console.log(todos);

  return (
   <div className='App'>
    <div className='main'>
      <TodoCreate onCreateTodo= {createTodo}/>
      {/* 
        createTodo fonksiyonuna TodoCreate componenti erişemeyeceği için createTodo fonksiyonunu onCreateTodo propsu ile componente geçirdik,
        buradaki onCreateTodo propsu ile TodoCreate.jsx deki fonksiyon parametresindeki props birbirini mapledi (Object destructuring) ve böylece
        createTodo fonksiyonu TodoCreate.jsxdeki onCreateTodo'ya setlenmiş oldu

        burada child'den parents'e props geçmiş olduk tersten giderek
      */}

      <TodoList todos = {todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo}/>
    </div>
   </div>
  )
}

export default App
