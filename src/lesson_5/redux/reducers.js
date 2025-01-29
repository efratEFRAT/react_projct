
import { ADD_TODO, REMOVE_TODO,RESTORE } from './actionTyps';
const stateTaskList = { todos: [] };

const manegerTasks = (state = stateTaskList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload], };
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(task => task.id !== action.payload.id) };
        case RESTORE:
            return { ...state, todos: [...state.todos, action.payload], };
        default:
            return state;
    }
};


export default manegerTasks