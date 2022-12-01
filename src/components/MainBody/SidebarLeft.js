import React from 'react'
import "../MainBody/MainBody.css"
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
const SidebarLeft = () => {
  let SidebarState = useSelector((state)=>state.MenuState_Reducer.Menu_State)
  let user = useSelector((state)=>state.MenuState_Reducer.user);
  console.log(SidebarState)
  return (
    <div className= {SidebarState? "SidebarLeft__show" :"Main__SidebarLeft"} >
   
    <div className="SidebarLeft_list">
    <Avatar sx={{ height: '25px', width: '25px' }}/>
    <p>{user&& user.displayName}</p>
   </div>
   <div className="SidebarLeft_list">
    <PeopleIcon />
    <p>Friends</p>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>Groups</p>
   </div>
   <div className="SidebarLeft_list">
    <BookmarkIcon />
    <p>Saved</p>
   </div>
   <div className="SidebarLeft_list">
    <EventIcon />
    <p>Events</p>
   </div>
   <div className="SidebarLeft_list">
    <StoreIcon />
    <p>Marketplace</p>
   </div>
   <div className="SidebarLeft_list">
    <KeyboardArrowDownIcon />
    <p>See more</p>
   </div>
   <hr style={{ marginTop:"8px" ,borderTop:"1px solid rgb(210, 211, 212)"}}/>

   <div className="SidebarLeft_shortcuts">
    <h4 style={{color:"gray"}}>Your shortcuts</h4>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>eCommerce</p>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>Apple Community</p>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>Mern Stack</p>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>Firebase Developer</p>
   </div>
   <div className="SidebarLeft_list">
    <GroupsIcon />
    <p>Get Orders On Fiverr</p>
   </div>
   <div className="SidebarLeft_list">
    <KeyboardArrowDownIcon />
    <p>See more</p>
   </div>
   {/* {SidebarState&&
   <div className="SidebarLeft_logout">
    <button>Log out</button>
   </div>
   } */}
   
    </div>
  )
}

export default SidebarLeft