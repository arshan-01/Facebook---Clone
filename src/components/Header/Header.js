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
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SidebarState_Change } from '../../Redux/actions/Action';

const Header = () => {
  const [ActiveMenu, setActiveMenu] = useState(false)
  const dispatch =useDispatch();
  return (
    <div className='Header'>

    <div className="header__left">
      <Link to="/" className='headerLeft__img'>
      <img src= {logo} alt="fb-logo"/>
      </Link>
        
        <div className="header__search">
        <SearchIcon/>
        <input type="text" placeholder='Search Facebook'/>
        </div>
        
    {ActiveMenu ? 
      <div className="header__leftoption" 
      onClick={()=> {setActiveMenu(!ActiveMenu); dispatch(SidebarState_Change(!ActiveMenu))}}>
   <Link to="/" className='headerleft__menu'> <MenuIcon fontSize = "large"/></Link>
   </div>
     
   :
   <div className="header__leftoption" onClick={()=> {setActiveMenu(!ActiveMenu); dispatch(SidebarState_Change(!ActiveMenu))}}>
    <Link to="/sidebar" className='headerleft__menu'> <MenuIcon fontSize = "large"/></Link>
   </div>
    }
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

    </div>
    <div className="header__right">
    <IconButton>
    <Badge badgeContent={3} color="primary">
      <ForumIcon />
    </Badge>
  </IconButton>
    <IconButton>
    <Badge badgeContent={4} color="primary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
    <div className="header__info">
    <Avatar style={{ height: '35px', width: '35px' }}/>
    {/* <h4>Arshan Nawaz</h4> */}
   </div>
    </div>
    </div>
  )
}

export default Header