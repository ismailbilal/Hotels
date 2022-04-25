import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledContent, StyledForm } from "./StyledFormAuth";

export default () => {
  const navigate = useNavigate();

  const gotToAdminLogin = () => navigate("/admin/login");

  const gotToHome = () => navigate("/home");

  const login = (e) => {
    e.preventDefault();
  };

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <StyledContainer>
      <button className="exit" onClick={gotToHome}>
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
      <StyledForm id="form" onSubmit={login}>
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
