import * as action from "./actionType";
export const SidebarState_Change = (payload)=>{
        return {
            type : action.Sidebar_Menu,
            payload : payload,
        }
}
export const Show_User = (payload)=>{
        return {
            type : action.Show_User,
            payload : payload,
        }
}
