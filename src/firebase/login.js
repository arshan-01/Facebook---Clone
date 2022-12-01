import React from 'react'
import {auth,provider} from './firebase'
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { Show_User } from '../Redux/actions/Action';
import { Button } from '@mui/material';
import logo from '../assets/fb-logo.png'

function Login() {
const dispatch = useDispatch();
function login() {
  signInWithPopup(auth, provider)
    .then((result)=>{
      dispatch(Show_User(auth.currentUser))
      console.log(auth.currentUser);
    })
    .catch((error)=>{
      console.log(error.message);
    })
   }
  return (
    <div className='signin'>
    <img style={{ width: '150px' ,marginTop:"50px"}} src= {logo} alt="fb-logo"/>
    <Button sx={{ width: '30%',marginTop:"300px" }} onClick={login} variant="contained">Sign in Google</Button>
   </div>
  )
}

export default Login

