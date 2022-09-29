import React, { useState } from 'react'
import "../Header/Header.css"
import logo from '../../assets/fb-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';import MenuIcon from '@mui/icons-material/Menu';
import { Avatar,IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SidebarState_Change } from '../../Redux/actions/Action';

const Header = () => {
  const [ActiveMenu, setActiveMenu] = useState(false)
  const dispatch =useDispatch();
  return (
    <div className='Header'>

    <div className="header__left">
      <Link to="/">
      <img src= {logo} alt="fb-logo" style={{height: "40px"}}/>
      </Link>
        
        <div className="header__search">
        <SearchIcon/>
        <input type="text" placeholder='Search Facebook'/>
        </div>
    </div>

    <div className="header__middle">
   <div className="header__option header__option__active">
    <HomeIcon fontSize = "large"/>
   </div>
   <div className="header__option">
    <OndemandVideoIcon fontSize = "large" />
   </div>
   <div className="header__option">
    <StoreIcon fontSize = "large"/>
   </div>
   <div className="header__option">
    <GroupsIcon fontSize = "large" />
   </div>

    {ActiveMenu ? 
      <div className="header__option" 
      onClick={()=> {setActiveMenu(!ActiveMenu); dispatch(SidebarState_Change(ActiveMenu))}}>
   <Link to="/"> <MenuIcon fontSize = "large"/></Link>
   </div>
     
   :
   <div className="header__option" onClick={()=> {setActiveMenu(!ActiveMenu); dispatch(SidebarState_Change(ActiveMenu))}}>
    <Link to="/sidebar"> <MenuIcon fontSize = "large"/></Link>
   </div>
    }
    </div>
    <div className="header__right">
    <IconButton >
    <ForumIcon  />
  </IconButton>
    <IconButton>
    <NotificationsIcon   />
  </IconButton>
    <div className="header__info">
    <Avatar/>
    <h4>Arshan Nawaz</h4>
   </div>
    </div>
    </div>
  )
}

export default Header