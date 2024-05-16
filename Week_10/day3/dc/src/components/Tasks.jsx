import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {addTask, deleteTask, editTask} from "./TasksSlice.jsx";


const selectTasksForDate = createSelector(
    (state, selectedDate) => state.tasks[selectedDate],
    tasks => tasks || []
);

export function Tasks({selectedDate}) {
    const tasks = useSelector(state => selectTasksForDate(state, selectedDate));
    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <div>
            <h2>My tasks on {selectedDate}</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {editingTaskId === task.id ? (
                            <EditTask selectedDate={selectedDate} task={task} setEditingTaskId={setEditingTaskId}/>
                        ) : (
                            <>
                                {task.text}
                                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                                <DeleteTask selectedDate={selectedDate} taskId={task.id}/>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


function EditTask({selectedDate, task, setEditingTaskId}) {
    const [taskText, setTaskText] = useState(task.text);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        const newTask = {...task, text: taskText};
        dispatch(editTask({date: selectedDate, taskId: task.id, newTask}));
        setEditingTaskId(null);
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleEditTask}>Save</button>
            <button onClick={() => setEditingTaskId(null)}>Cancel</button>
        </div>
    );
}


function DeleteTask({selectedDate, taskId}) {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask({date: selectedDate, taskId}));
    };

    return (
        <button onClick={handleDeleteTask}>Delete</button>
    );
}

export function AddTask({selectedDate}) {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = {id: Date.now(), text: taskText};
        dispatch(addTask({date: selectedDate, task: newTask}));
        setTaskText('');
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}