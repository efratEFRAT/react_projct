import { ADD_TODO, REMOVE_FOREVER, REMOVE_TODO, RESTORE } from './actionTyps';
const initalstate = { taskBin:[] };

 const reducerBin = (state = initalstate, action) => {
    switch (action.type) {
        case REMOVE_TODO://הוספה לסל המחזור
            return { ...state,taskBin:[...state.taskBin, action.payload], };
            case REMOVE_FOREVER:
       return { ...state, taskBin: state.taskBin.filter(task => task.id !== action.payload.id) };
       case RESTORE:
       return { ...state, taskBin: state.taskBin.filter(task => task.id !== action.payload.id) };
        default:
            return state;
    }
};
export default reducerBin; 