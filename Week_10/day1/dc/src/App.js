// import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './components/TaskContext';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}
