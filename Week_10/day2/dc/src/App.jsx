import { useRef } from 'react'
import { addNewTask, removeTask, finishTask} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'


function App() {
  const todos = useSelector((state) => state.taskReducer.tasks)
  const inputRef = useRef()

  const dispatcher = useDispatch()
  const dispatchTask = () =>{
    dispatcher(addNewTask({name: inputRef.current.value, isCompleted: false}))
    inputRef.current.value = null
  }

  return (
    <div>
    <h1>ToDo's</h1>
    <input placeholder='Add new task' ref={inputRef}/>
    <button onClick={dispatchTask}>Add</button>
    {todos.map((item,i)=>{
      return(
        <div key={i}>
          <span>
            {item.isCompleted ? <p style={{ textDecoration: 'line-through' }}>{item.name}</p> :<p>{item.name}</p>}
            <button onClick={() => dispatcher(finishTask(i))}>Finished</button> 
            <button onClick={() => dispatcher(removeTask(i))}>Delete</button>
          </span>
        </div>
      )
    })}
    </div>
  )
}

export default App