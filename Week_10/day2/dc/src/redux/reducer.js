import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from "./actions";

const InitialState = {
    tasks: [],
}

export const taskReducer = (state = InitialState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            const newTasks = [...state.tasks]
            newTasks.push(action.payload)
            return { ...state, tasks: newTasks }
        case REMOVE_TASK:
            const newTasks2 = [...state.tasks]
            newTasks2.splice(action.payload, 1)
            return { ...state, tasks: newTasks2 }
            case COMPLETE_TASK:
                const newTasks3 = state.tasks.map((task, index) => {
                    if (index === action.payload) {
                        return { ...task, isCompleted: !task.isCompleted };
                    }
                    return task;
                });
                return { ...state, tasks: newTasks3 };
            
    
        default:
            return state
    }
}