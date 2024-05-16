import {useState} from 'react';
import {Tasks, AddTask} from './components/Tasks.jsx';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";


export default function App() {
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

    const dateHandler = date => {
        setCurrentDate(date.toISOString().split('T')[0]);
    };

    return (
        <div>
            <h1>Planner</h1>
            <div><DatePicker
                inline
                selected={new Date(currentDate)}
                onChange={dateHandler}
            /></div>

            <Tasks selectedDate={currentDate}/>
            <AddTask selectedDate={currentDate}/>
        </div>
    );
}

