import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice.jsx';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;
