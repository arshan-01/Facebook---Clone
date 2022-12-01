import * as actions from "../actions/actionType"

const InitialState = {
    Menu_State : null,
    user : null
}
export const MenuState_Reducer = (state = InitialState, action)=>{
    switch (action.type) {
        case actions.Sidebar_Menu:
            return {
           Menu_State : action.payload
            }
        case actions.Show_User:
            return {
           user : action.payload
            }
        default:
            return state;
    }
};