import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledContent, StyledForm } from "./StyledFormAuth";

export default () => {
  const navigate = useNavigate();

  const goToLoginPage = () => navigate("/login");

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
