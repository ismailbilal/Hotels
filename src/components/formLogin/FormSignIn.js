import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../API";
import Logo from "../header/Logo";
import { StyledContainer, StyledContent, StyledForm } from "./StyledFormAuth";

export default ({ setLogedIn }) => {
  const navigate = useNavigate();

  const gotToAdminLogin = () => navigate("/admin/login", { replace: true });
  const goToPrevPage = () => navigate(-1);
  const goToSignUpPage = () => navigate("/signup", { replace: true });

  const id = (id) => document.getElementById(id);
  const classes = (classes) => document.getElementsByClassName(classes);

  useEffect(async () => {
    const engine = (id, serial, message1, match, message2) => {
      const errorMsg = classes("error"),
        successIcon = classes("success-icon"),
        failureIcon = classes("failure-icon");
      if (id.value.trim() == "") {
        errorMsg[serial].innerHTML = message1;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
        return false;
      } else {
        console.log(match);
        if (match) {
          errorMsg[serial].innerHTML = message2;
          id.style.border = "2px solid red";

          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";
          return false;
        } else {
          errorMsg[serial].innerHTML = "";
          id.style.border = "2px solid green";

          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";
          return true;
        }
      }
    };

    const login = async (e) => {
      e.preventDefault();
      const username = id("username"),
        password = id("password");

      const isLogin = await getUserLogin(username.value, password.value);
      console.log(isLogin.message);

      const usernameIsIncorrect =
        isLogin.message == "username incorrect" ? true : false;
      const passwordIsIncorrect =
        isLogin.message == "password incorrect" ? true : false;

      if (
        engine(
          username,
          0,
          "username cannot be blank",
          usernameIsIncorrect,
          "username is incorrect"
        )
      ) {
        engine(
          password,
          1,
          "Password cannot be blank",
          passwordIsIncorrect,
          "password incorrect"
        );
      } else {
        password.value = "";
      }

      if (!usernameIsIncorrect && !passwordIsIncorrect) {
        window.sessionStorage.setItem("username", username.value);
        setLogedIn(true);
        goToPrevPage();
      }
    };

    const form = id("form");
    form.addEventListener("submit", login);
    return () => {
      form.removeEventListener("submit", login);
    };
  }, []);

  return (
    <StyledContainer>
      <button className="exit" onClick={goToPrevPage}>
        <i className="fas fa-times"></i>
      </button>
      <StyledContent>
        <Logo />
        <div className="image"></div>
        <div className="text">
          Start for free & get <br />
          attractive offers today !
        </div>
      </StyledContent>
      <StyledForm id="form">
        <div className="social">
          <div className="title">Get Started</div>
          <div className="question">
            Don't Have an Account?
            <br />
            <span onClick={goToSignUpPage}>Sing Up</span>
          </div>
          <div className="btn">
            <div className="btn-1">
              <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
              Sign In
            </div>
            <div className="btn-2">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" />
              Sign In
            </div>
          </div>
          <div className="or">Or</div>
        </div>
        <div>
          <label htmlFor="username">User Name</label>
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Joy Shaheb"
          />
          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle success-icon"></i>
          <div className="error"></div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password here"
          />
          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle success-icon"></i>
          <div className="error"></div>
        </div>
        <button id="btn" type="submit">
          Sign In
        </button>
        <div className="admin">
          Sign In as
          <span onClick={gotToAdminLogin}> Admin</span>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};
