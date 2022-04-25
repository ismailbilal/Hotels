import React from "react";
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
  return (
    <div className="App">
      <Router>
        <Header logedIn={false} />
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<FormSignIn />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/admin/login" element={<FormAdmin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
