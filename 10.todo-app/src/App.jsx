import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <div className='app-container'>
      <TodoCreate/>
      <TodoList/>
    </div>
   </div>
  )
}

export default App
