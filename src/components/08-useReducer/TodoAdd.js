import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

  return (
    <>
                <form onSubmit={handleSubmit}>
                <div className='add-new-item flex-row'>
                    <span></span>
                    <input 
                        type='text'
                        name='description'
                        id='addItem'
                        // className='form-control'
                        placeholder='Create a new todo...'
                        autoComplete='off'
                        value={description}
                        onChange={handleInputChange}/>
                    {/* <button 
                        type='submit'
                        className='btn btn-outline-primary mt-1 w-100'
                        >
                        Agregar
                    </button> */}
                    </div>
                </form>
    </>
  )
}
