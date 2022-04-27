import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormAdmin from "./components/formLogin/formAdmin";
import FormSignIn from "./components/formLogin/FormSignIn";
import FormSignUp from "./components/formLogin/FormSignUp";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

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
        <Header logedIn={logedIn} sessionType={sessionType} />
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
