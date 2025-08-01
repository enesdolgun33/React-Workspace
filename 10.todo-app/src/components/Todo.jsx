import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/todo.css'

function Todo({todo}) {
  
  const {id, content} = todo; // Object destructuring

  return (
    <div className='todo-div'>
        <div>
            {content}
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons'/>
            <FaEdit className='todo-icons'/>
        </div>
        
    </div>
  )
}

export default Todo