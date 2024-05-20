import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './store/tasksSlice';
import categoryReducer from './store/categorySlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoryReducer,
  },
});