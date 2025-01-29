import { REMOVE_TODO ,ADD_TODO,REMOVE_FOREVER,RESTORE} from './actionTyps';

export const add_todo=(task) =>({
   type:ADD_TODO,
      payload:task,
});
export const remove_todo=(task) =>({
    type:REMOVE_TODO, 
    payload:task,   
});
export const remove_forever=(task) =>({
    type:REMOVE_FOREVER, 
    payload:task,   
});
export const restore=(task) =>({
    type:RESTORE, 
    payload:task,   
});

 
   
