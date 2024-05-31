import { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

export default function TaskList() {
    const { tasks, setFilter, filter, addTask, deleteTask, toggleTask, editRef, editTask} = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');

    const editHandler = (task) => {
        editRef.current = task;
        setNewTask(task.text);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (editRef.current) {
            editTask(editRef.current.id, newTask);
            editRef.current = null;
        } else {
            addTask(newTask);
        }
        setNewTask('');
    };

    return (
        <div>
            <h1>Tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Add new task"
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <button onClick={() => setFilter('ALL')}>Show All</button>
                <button onClick={() => setFilter('FINISHED')}>Show Completed</button>
                <button onClick={() => setFilter('UNFINISHED')}>Show Unfinished</button>
            </div>
            <ul>
                {tasks.filter(task => {
                    return filter === 'ALL' ? true : filter === 'FINISHED' ? task.completed : !task.completed;
                }).map(task => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>
                        {task.text}
                        <button onClick={() => editHandler(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}