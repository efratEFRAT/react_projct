
import { createStore } from 'redux';
import  manegerTasks from './reducers'
import { applyMiddleware } from 'redux';
import customMidlewere from './MiddlewereRedux';
import { combineReducers } from 'redux';
import  reducerBin  from './reducerBin';
console.log("reduseBin"+reducerBin);
console.log("manegerTasks"+manegerTasks);



const rootrRedux = combineReducers({
    todos:manegerTasks ,
    taskBin:reducerBin,
    });

const store = createStore(rootrRedux, applyMiddleware(customMidlewere));
console.log("store   "+store.getState());
export default store;