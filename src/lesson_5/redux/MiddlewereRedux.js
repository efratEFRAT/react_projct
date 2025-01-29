
 
 const customMidlewere = store => next => action => {
    if(action.payload.name) 
    next(action)
     return; 
}
export default customMidlewere