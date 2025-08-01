import React from 'react'
import Todo from './Todo'
import '../css/todo.css'

function TodoList({todos, onRemoveTodo}) {
  return (
    <div className='todo-list-div'>
        {
          todos && todos.map((todo)=>(  // eğerki todo varsa herbirini map ile todo olarak dön 
            <Todo key={todo.id} todo = {todo} onRemoveTodo={onRemoveTodo}/>
          ))
        }
    </div>
  )
}

export default TodoList