import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Browse from "./components/browse/Browse";
import Closest from "./components/closest/Closest";
import FormAddHotel from "./components/formAddHotel/FormAddHotel";
import FormAdmin from "./components/formLogin/formAdmin";
import FormSignIn from "./components/formLogin/FormSignIn";
import FormSignUp from "./components/formLogin/FormSignUp";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Hotel from "./components/hotel/Hotel";
import Users from "./components/users/Users";
import Visited from "./components/viseted/Visited";

export default () => {
  const [logedIn, setLogedIn] = useState(
    window.sessionStorage.getItem("email") ||
      window.sessionStorage.getItem("username")
      ? true
      : false
  );

  const sessionType = window.sessionStorage.getItem("email")
    ? "admin"
    : window.sessionStorage.getItem("username")
    ? "user"
    : "none";

  return (
    <div className="App">
      <Router>
        <Header
          logedIn={logedIn}
          sessionType={sessionType}
          setLogedIn={setLogedIn}
        />
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<FormSignIn setLogedIn={setLogedIn} />}
          />
          <Route
            path="/signup"
            element={<FormSignUp setLogedIn={setLogedIn} />}
          />
          <Route
            path="/admin/login"
            element={<FormAdmin setLogedIn={setLogedIn} />}
          />
          <Route path="/browse" element={<Browse />} />
          <Route
            path="/browse/hotel/:id"
            element={<Hotel sessionType={sessionType} />}
          />
          <Route
            path="/admin/addhotel"
            element={
              sessionType == "admin" ? <FormAddHotel /> : <Navigate to="/" />
            }
          />
          <Route path="/closest" element={<Closest />} />
          <Route
            path="/admin/users"
            element={sessionType == "admin" ? <Users /> : <Navigate to="/" />}
          />
          <Route path="/user/visited/:userId" element={<Visited />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
