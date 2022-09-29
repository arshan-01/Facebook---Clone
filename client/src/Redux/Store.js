import { createStore } from 'redux'
import AllReducers from './reducers/Index';


const store = createStore(
        AllReducers
);

export default store;