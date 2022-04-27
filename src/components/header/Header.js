import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledLogo } from "./StyledHeader";

export default ({ logedIn, sessionType, setLogedIn }) => {
  const navigate = useNavigate();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const gotToLoginPage = () => navigate("/login");
  const gotToSignupPage = () => navigate("/signup");
  // const goToHome = () => navigate("/");
  const extructUserFromEmail = (email) => (email ? email.split("@")[0] : "");

  const logout = () => {
    // console.log("hello");
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("username");
    setLogedIn(false);
    // goToHome();
    // forceUpdate();
  };

  useEffect(() => {
    const changeTheme = () => {
      const elements = document.querySelectorAll(".changeable");
      elements.forEach((ele) => {
        console.log(ele);
        ele.classList.toggle("dark");
      });
    };
    document.querySelector(".checkbox").addEventListener("change", changeTheme);
    return () => {
      document
        .querySelector(".checkbox")
        .removeEventListener("change", changeTheme);
    };
  }, []);

  return (
    <StyledHeader className="changeable">
      <StyledLogo>
        <i className="fas fa-hotel"></i>
        <span> Hotel</span>
      </StyledLogo>
      <div className="rigthSection">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <div className="ball"></div>
        </label>
        {logedIn && (
          <div className="sessionButton">
            <button>
              <i className="fas fa-user"></i>
              <span>
                {sessionType == "admin"
                  ? extructUserFromEmail(window.sessionStorage.getItem("email"))
                  : window.sessionStorage.getItem("username")}
              </span>
              <i className="fas fa-caret-down"></i>
            </button>
            <div className="userOptions">
              <ul>
                <li className="logout" onClick={logout}>
                  <button>Log out</button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!logedIn && (
          <div className="logButtns">
            <button onClick={gotToSignupPage}>
              <i className="fas fa-user-plus"></i>
              <span> Sign Up</span>
            </button>
            <button onClick={gotToLoginPage}>
              <i className="fas fa-sign-in-alt"></i>
              <span> Sign In</span>
            </button>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
