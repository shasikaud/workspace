import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
};

export const allTasksSlice = createSlice({
    name: 'allTasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        markTask: (state, action) => {
            state.tasks.map(task => task.id === action.payload.id ? task.isSelected = !task.isSelected : task);
        },
        deleteTask: (state, action) => {
            console.log('deleting')
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    }
})

export const { addTask, markTask, deleteTask } = allTasksSlice.actions;

export const selectAllTasks = (state) => state.allTasks.tasks;
export const selectTask = (state, id) => state.allTasks.tasks.find(task => task.id === id);

export default allTasksSlice.reducer;