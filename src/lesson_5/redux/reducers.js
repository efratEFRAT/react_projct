
import { ADD_TODO, REMOVE_TODO } from './actionTyps';
const stateTaskList = { todes: [] };

export const manegerTasks = (state = stateTaskList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state,todes: [...state.todes, action.payload], };
        case REMOVE_TODO:
          
            return { ...state, todes: state.todes.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};


