import React from 'react';
import { useQuery } from 'react-query';
import { getTodos } from '../../api/todos';
import './TodoContainer.css';
import TodoItem from '../TodoItem';
import { parseISO } from 'date-fns';
import type { APITodoItem } from '../../types/APITodoItem';

function TodoContainer() {

   const query = useQuery('todos', () => {

      return getTodos();

   });
   
   const todoItems = query.data as APITodoItem[];

   return (
      <div className='todo-container'>
         { 
            query.isError
               ? (
                  <h3 className='query-state-title'>
                     <i className='fa-solid fa-xmark'></i>
                     An error has occured.
                  </h3>
               )
               : query.isLoading
                  ? (
                     <h3 className='query-state-title'>
                        <i className='fa-solid fa-circle-notch'></i>
                        Loading...
                     </h3>
                  )
                  : todoItems.map((todoItem) => {
                     return <TodoItem description={ todoItem.description } dueDate={ parseISO(todoItem.dueDate) } priority={ todoItem.priority } key={ todoItem.id } />
                  })
         }
      </div>
   )

}

export default TodoContainer;