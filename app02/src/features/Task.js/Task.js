import  React from 'react';

export const Task = ( { task, markTaskHandler, deleteTaskHandler }) => {

  return (
      <div>
        <h4>{task.id} | {task.data} | {task.isSelected ? 'SELECTED' : 'UNSELECTED'} </h4>
        <button onClick={() => markTaskHandler(task)}>+</button>
        <button onClick={() => deleteTaskHandler(task)}>-</button>
      </div>
  );
}