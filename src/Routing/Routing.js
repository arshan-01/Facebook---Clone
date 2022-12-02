import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import MainBody from "../components/MainBody/MainBody";
import SidebarLeft from "../components/MainBody/SidebarLeft";
import Login from "../firebase/login";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged  } from "firebase/auth";
import { Show_User } from "../Redux/actions/Action";
import { auth } from "../firebase/firebase";
function Routing() {
  const dispatch = useDispatch();
  let Current_user = useSelector((state) => state.MenuState_Reducer.user);
  console.log(Current_user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(Show_User(user));
        console.log(user)
       } else {
       
        console.log("User is signed out")
      }});
  }, [])


  return (
    <BrowserRouter>
      <div>
      {/* Header will show only if we have a logged user */}
        {Current_user && <Header />}
        <Routes>
        {/* if we have not any user will go to login page other wise to main page or home page */}
          <Route path="/" element={!Current_user ? <Login /> : <MainBody />} />
          {/* if user is not logged and he is trying to access the homepage or main page he will redirected to login page */}
          <Route
            path="/login"
            element={Current_user && <Navigate to="/" replace={true} />}
          />
          <Route path="/sidebar" element={<SidebarLeft />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
