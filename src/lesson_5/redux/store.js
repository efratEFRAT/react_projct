
import { createStore } from 'redux';
import  manegerTasks from './reducers'
import { applyMiddleware } from 'redux';
import customMidlewere from './MiddlewereRedux';
import { combineReducers } from 'redux';
import reducerBin from './reducerBin';
const rootrRedux = combineReducers({
    todos1:manegerTasks ,
    taskBin1:reducerBin
    });

const store = createStore(rootrRedux, applyMiddleware(customMidlewere));
export default store;