import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/todo.css'

function Todo({todo, onRemoveTodo}) {
  
  const {id, content} = todo; // Object destructuring

  const removeTodo =()=>{
    onRemoveTodo(id);
  }

  return (
    <div className='todo-div'>
        <div>
            {content}
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
            <FaEdit className='todo-icons'/>
        </div>
        
    </div>
  )
}

export default Todo