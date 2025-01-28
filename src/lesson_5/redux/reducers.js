
import { ADD_TODO, REMOVE_TODO } from './actionTyps';
const stateTaskList = { todes: [], };

export const manegerTasks = (state = stateTaskList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state,todes: [...state.todes, action.payload], };
        case REMOVE_TODO:
            const newArr=stateTaskList.todes.filter( task=>{
                return task.id!==action.payload.id
                console.log("task.id"+task.id+"action.payload.id"+action.payload.id);
                });
            return { ...state,todes:newArr};
        default:
            return state;
    }
};


