import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li
        key = {todo.id}
        className='flex-row'
    >
        <label className='list-item'>
          <input type={'checkbox'} name='todoItem'/>
          <span className='checkmark'></span>
        <span 
            //  className={`${todo.done && 'complete'}`}
            className='text'
            onClick={() => handleToggle(todo.id)}
        > {todo.desc}</span>
        </label>
        <span
            className='remove'
            onClick={() => handleDelete(todo.id)}
        ></span>
    </li>
  )
}
