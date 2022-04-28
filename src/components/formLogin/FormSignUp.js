import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accepted, createAccount } from "../../API";
import { StyledContainer, StyledForm, StyledContent } from "./StyledFormAuth";

export default ({ setLogedIn }) => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/home");
  const gotToLoginPage = () => navigate("/login");

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
      } else {
        console.log(match);
        if (match) {
          errorMsg[serial].innerHTML = message2;
          id.style.border = "2px solid red";

          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";
        } else {
          errorMsg[serial].innerHTML = "";
          id.style.border = "2px solid green";

          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";
        }
      }
    };

    const login = async (e) => {
      e.preventDefault();
      const username = id("username"),
        email = id("email"),
        password = id("password");

      const isSignUp = await accepted(
        username.value,
        email.value,
        password.value
      );
      console.log(isSignUp.message);

      const usernameExist =
        isSignUp.message == "Username already exist" ? true : false;
      const emailExist =
        isSignUp.message == "Email already exist" ? true : false;

      engine(
        username,
        0,
        "Username cannot be blank",
        usernameExist,
        isSignUp.message
      );
      engine(email, 1, "Email cannot be blank", emailExist, isSignUp.message);
      engine(password, 2, "Password cannot be blank", false, "");

      if (isSignUp.message == "accepted") {
        await createAccount(username.value, email.value, password.value);
        window.sessionStorage.setItem("username", username.value);
        setLogedIn(true);
        goToHome();
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
      <button className="exit" onClick={goToHome}>
        <i className="fas fa-times"></i>
      </button>
      <StyledContent>
        <div className="logo">
          <img src="https://svgshare.com/i/_go.svg" alt="" />
        </div>
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
            Already Have an Account?
            <br />
            <span onClick={gotToLoginPage}>Sing In</span>
          </div>
          <div className="btn">
            <div className="btn-1">
              <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
              Sign Up
            </div>
            <div className="btn-2">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" />
              Sign Up
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
          Submit
        </button>
      </StyledForm>
    </StyledContainer>
  );
};
