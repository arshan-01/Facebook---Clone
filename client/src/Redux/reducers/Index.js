import {combineReducers} from 'redux'
import { MenuState_Reducer } from './Reducer'


const AllReducers = combineReducers({
    MenuState_Reducer : MenuState_Reducer,
})
export default AllReducers;