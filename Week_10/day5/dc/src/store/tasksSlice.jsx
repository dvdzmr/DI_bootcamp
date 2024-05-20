import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const createTaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, newTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index >= 0) {
        state.tasks[index] = newTask;
      }
    },
    updateTask: (state, action) => {
      const { id, progress } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.progress = progress;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask, updateTask} = createTaskSlice.actions;
export default createTaskSlice.reducer;