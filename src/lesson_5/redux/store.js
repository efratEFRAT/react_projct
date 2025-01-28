
import { createStore } from 'redux';
import { manegerTasks } from './reducers'

export const store =createStore(manegerTasks);
export default store;