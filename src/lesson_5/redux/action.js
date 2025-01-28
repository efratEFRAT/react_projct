import { REMOVE_TODO ,ADD_TODO} from './actionTyps';

export const add_todo=(task) =>({
   type:ADD_TODO,
      payload:task,
});
export const remove_todo=(taskId) =>({
    type:REMOVE_TODO, 
    payload:taskId,   
});



 
   
