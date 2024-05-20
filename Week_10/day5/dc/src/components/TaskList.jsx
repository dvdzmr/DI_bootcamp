import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../store/selectors';
import { addTask, editTask, deleteTask, updateTask } from '../store/tasksSlice';


const TaskList = ({ categoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState('');
  const [editTaskName, setEditTaskName] = useState('');
  const [idOrder, setidOrder] = useState(3);
  const [taskIdBeingEdited, setTaskIdBeingEdited] = useState(null);

  const handleAddTask = useCallback(() => {
    if (newTaskName) {
      const newTask = { id: idOrder, name: newTaskName, categoryId, progress: 0 };
      setidOrder(idOrder + 1);
      dispatch(addTask(newTask));
      setNewTaskName('');
    }
  }, [newTaskName, categoryId, dispatch]);

  const handleEdit = useCallback((id, name) => {
    setTaskIdBeingEdited(id);
    setEditTaskName(name);
  }, []);

  const handleSaveEdit = useCallback((id) => {
    dispatch(editTask({ id, newTask: { id, name: editTaskName, categoryId, progress: 0 } }));
    setTaskIdBeingEdited(null);
    setEditTaskName('');
  }, [editTaskName, categoryId, dispatch]);

  const handleCompleted = useCallback((id, completed) => {
    dispatch(updateTask({ id, progress: completed ? 100 : 0 }));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <>
      <h2>Tasks</h2>
      <input
        type="text"
        value={newTaskName}
        onChange={e => setNewTaskName(e.target.value)}
        placeholder="Add Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.progress === 100 ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.progress === 100}
              onChange={e => handleCompleted(task.id, e.target.checked)}
            />
            {taskIdBeingEdited === task.id ? (
              <div>
                <input
                  type="text"
                  value={editTaskName}
                  onChange={e => setEditTaskName(e.target.value)}
                  placeholder="Edit task"
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setTaskIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <span>{task.name}</span>
            )}
            <div>
              <button onClick={() => handleEdit(task.id, task.name)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;