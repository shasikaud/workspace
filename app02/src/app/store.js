import { configureStore } from "@reduxjs/toolkit";
import allTasksReducer from '../features/allTasks/allTasksSlice';

export default configureStore({
  reducer: {
    allTasks: allTasksReducer,
  }
});