import  React,  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom"

import { 
  addTask, 
  markTask,
  deleteTask,
  selectAllTasks 
} from './allTasksSlice';
import { Task } from '../Task.js/Task';

export const AllTasks = () => {

    const tasks = useSelector(selectAllTasks);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('enter text here!');

    console.log('rendering AllTasks');

    const markTaskHandler = (task) => {
      dispatch(markTask(task));
    }

    const deleteTaskHandler = (task) => {
      dispatch(deleteTask(task));
    }

    return (
        <div>
          <Link to="/">Home</Link>
          <div>
            {tasks.map( task => (
                  <Task 
                       key={task.id} 
                       task={task} 
                       markTaskHandler={markTaskHandler}
                       deleteTaskHandler={deleteTaskHandler}
                  />
            ))}
          </div>

          <input value={inputValue}
                  onChange={ e => setInputValue(e.target.value) }
          />

          <button onClick={ 
            () => { 
              dispatch(addTask({ id: Date.now(), data: inputValue, isSelected: false }))
              setInputValue('')
           } }>ADD</button>

        </div>
    );
}