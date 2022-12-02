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
import { Avatar,Button,IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Show_User, SidebarState_Change } from '../../Redux/actions/Action';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const Header = () => {
  const [ActiveMenu, setActiveMenu] = useState(false)
  let user = useSelector((state)=>state.MenuState_Reducer.user);
  const dispatch =useDispatch();
  let navigate = useNavigate();
 // Sign-out

 function LogoutHandle() {
  signOut(auth);
  dispatch(Show_User(null))
  navigate('/');
}


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
    <Button onClick={LogoutHandle} style={{ marginLeft: '10px' }} size="small" variant="outlined">Logout</Button>
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
    <Avatar style={{ height: '35px', width: '35px' }} src={user.photoURL}/>
    <h5 style={{ marginLeft: '10px' }}>{user.displayName}     
   </h5>

   </div>
    </div>
    </div>
  )
}

export default Header