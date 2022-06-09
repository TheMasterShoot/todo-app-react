import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li
        key = {todo.id}
        className = "list-group-item"
    >
        <label for='' className='list-item'>
          <input type={'checkbox'} name='todoItem'/>
          <span className='checkmark'></span>
        <span 
            className={`${todo.done && 'complete'}`}
            onClick={() => handleToggle(todo.id)}
        > {index + 1}. {todo.desc}</span>
        </label>
        <button
            className='btn btn-danger'
            onClick={() => handleDelete(todo.id)}
        >
                Borrar
            </button>
    </li>
  )
}
