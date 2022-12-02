import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Show_User } from "../Redux/actions/Action";
import { Button } from "@mui/material";
import logo from "../assets/fb-logo.png";

function Login() {
  const dispatch = useDispatch();
  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(Show_User(auth.currentUser));
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div className="signin">
     <div className="signin_logo">
      <img
        style={{ width: "100px", marginTop: "50px" }}
        src={logo}
        alt="fb-logo"
      />
      <img
        style={{ width: "200px", marginTop: "10px" }}
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="fb-logo"
      />
      </div>
      <Button
        sx={{ width: "30%", marginTop: "230px" }}
        onClick={login}
        variant="contained"
      >
        Sign in Google
      </Button>
    </div>
  );
}

export default Login;
