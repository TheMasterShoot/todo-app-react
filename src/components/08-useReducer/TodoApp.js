import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

  return (
    <>
        <h1>T O D O</h1>
        <div class="theme-block">
            <input type="checkbox" name="theme" id="theme"/>
            <label for="theme"></label>
        </div>
        <hr/>

            <div className='add-new-item'>
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />
            </div>

            <div className='content'>
                <TodoList
                    todos = {todos}
                    handleDelete = {handleDelete}
                    handleToggle = {handleToggle}
                />
            </div>

            <div className='bottom-item flex-row'>
                <div className='item-left'>
                    <span>{todos.length}</span> items left
                </div>
                <div className='filter flex-row'>
                    <label>
                        <input type={'radio'} name="filter" id='all' checked/>
                        <span>All</span>
                    </label>
                    <label>
                        <input type={'radio'} name="filter" id='active'/>
                        <span>Active</span>
                    </label>
                    <label>
                        <input type={'radio'} name="filter" id='complete'/>
                        <span>Completed</span>
                    </label>
                </div>
                <span className='clear'>Clear Completed</span>
            </div>
            
            
    </>
  )
}
