import React from 'react';
import './TodoItem.css'
import { format, formatDistance } from 'date-fns';
import type { TodoItemProps } from '../../types/TodoItemProps'

function TodoItem(props: TodoItemProps) {

   return (
      <div className='todo-item' data-priority={ props.priority }>
         <p>{ props.description }</p>
         <div className='divider'></div>
         <div className='todo-details'>
            <span className='due-date'>
               <strong>Due date: </strong>
               { format(props.dueDate, 'MM/dd/yyyy') } — { formatDistance(props.dueDate, new Date(), { addSuffix: true }) }
            </span>
         </div>
      </div>
   ) 

}

export default TodoItem;