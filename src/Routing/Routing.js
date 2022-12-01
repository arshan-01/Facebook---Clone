import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import MainBody from "../components/MainBody/MainBody";
import SidebarLeft from "../components/MainBody/SidebarLeft";
import Login from "../firebase/login";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Show_User } from "../Redux/actions/Action";
function Routing() {
const dispatch = useDispatch();
  let user = useSelector((state)=>state.MenuState_Reducer.user);
console.log(user)

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(Show_User(user))
      console.log(user)
     } else {

      console.log("User is signed out")
    }});
}, [])

  return (
    <BrowserRouter>
      <div>
     
        {user && <Header /> }
        <Routes>
          <Route path="/" element={!user ? <Login /> : <MainBody />} />
          <Route
            path="/login"
            element= {user && (
          <Navigate to="/" replace={true} />
        )}
          />
          <Route path="/sidebar" element={<SidebarLeft />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
