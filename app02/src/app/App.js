import React from 'react';
import { Routes, Route, Link } from "react-router-dom"

import { AllTasks } from '../features/allTasks/AllTasks.js';
import { SingleTaskPage } from '../features/Task.js/SingleTaskPage.js';

export function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <h4>This is home page</h4>
      <Link to="tasks">Tasks</Link>
      <Routes>
        <Route path="tasks" element={ <AllTasks/> } />
      </Routes>
      {/* <AllTasks/> */}
    </div>
  )
}