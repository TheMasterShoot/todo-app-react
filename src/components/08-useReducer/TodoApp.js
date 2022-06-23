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

    const changeTheme = () => {
        
        const theme = document.getElementById('theme');

        theme.addEventListener('click', () => {
        document.querySelector('body').classList = ( theme.checked ? 'theme-light' : 'theme-dark' );
        }); 
    }


  return (
    <>
        <header className='flex-row'>
            <h1>TODO</h1>
            <div className="theme-block">
                <input type="checkbox" name="theme" id="theme" onClick={ changeTheme } />
                <label htmlFor="theme"></label>
            </div>
        </header>

        <main>
            
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />
            

            <section className='content'>
                <TodoList
                    todos = {todos}
                    handleDelete = {handleDelete}
                    handleToggle = {handleToggle}
                />
            

                <div className='bottom-item flex-row'>
                    <div className='item-left'>
                        <span>{todos.length} items left</span>
                    </div>
                    <div className='filter flex-row'>
                        <label>
                            <input type={'radio'} name="filter" id='all' defaultChecked/>
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
            </section>
        </main>           
    </>
  )
}
