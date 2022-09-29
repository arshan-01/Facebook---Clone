import * as action from "./actionType";
export const SidebarState_Change = (payload)=>{
        return {
            type : action.Sidebar_Menu,
            payload : payload,
        }
}
