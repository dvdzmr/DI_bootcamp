export const ADD_TASK = 'add_task'
export const REMOVE_TASK = 'remove_task'
export const COMPLETE_TASK = 'complete_task'

export const addNewTask = (value) =>{
    return{
        type: ADD_TASK, payload: value
    }
}

export const removeTask = (value) =>{
    return{
        type: REMOVE_TASK, payload: value
    }
}

export const finishTask = (value) =>{
    return{
        type: COMPLETE_TASK, payload: value
    }
}