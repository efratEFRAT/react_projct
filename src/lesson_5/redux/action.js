import { REMOVE_TODO ,ADD_TODO} from './actionTyps';

export const add_todo=(task) =>({
   type:ADD_TODO,
      payload:task,
});
export const remov_todo=(taskId) =>({
    type:REMOVE_TODO, 
    payload:taskId,   
});



 
   
