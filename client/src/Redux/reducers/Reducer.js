import * as actions from "../actions/actionType"

const InitialState = {
    Menu_State : false
}
export const MenuState_Reducer = (state = InitialState, action)=>{
    switch (action.type) {
        case actions.Sidebar_Menu:
            return {
           Menu_State : action.payload
            }
        default:
            return state;
    }
};