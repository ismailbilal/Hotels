import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminLogin, getUsers } from "../../API.js";
import Logo from "../header/Logo.js";
import { StyledContainer, StyledContent, StyledForm } from "./StyledFormAuth";

export default ({ setLogedIn }) => {
  const navigate = useNavigate();

  const goToLoginPage = () => navigate("/login", { replace: true });
  const goToPrevPage = () => navigate(-1);

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
      const email = id("email"),
        password = id("password");

      const isLogin = await getAdminLogin(email.value, password.value);
      console.log(isLogin.message);

      const emailIsIncorrect =
        isLogin.message == "email incorrect" ? true : false;
      const passwordIsIncorrect =
        isLogin.message == "password incorrect" ? true : false;

      if (
        engine(
          email,
          0,
          "Email cannot be blank",
          emailIsIncorrect,
          "email is incorrect"
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

      if (!emailIsIncorrect && !passwordIsIncorrect) {
        window.sessionStorage.setItem("email", email.value);
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
        <div className="text">Start for free</div>
      </StyledContent>
      <StyledForm id="form">
        <div>
          <label htmlFor="email">Email</label>
          <i className="far fa-envelope"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
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
          <span onClick={goToLoginPage}> User</span>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};
