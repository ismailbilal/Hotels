import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RenderIf } from "../../utilities/RenderIf";
import Logo from "./Logo";
import { StyledHeader, StyledLogo } from "./StyledHeader";

export default ({ logedIn, sessionType, setLogedIn }) => {
  const navigate = useNavigate();

  const gotToLoginPage = () => navigate("/login");
  const gotToSignupPage = () => navigate("/signup");
  const goToAddForm = () => navigate("/admin/addhotel");
  const goToUsersList = () => navigate("/admin/users");
  const extructUserFromEmail = (email) => (email ? email.split("@")[0] : "");

  const logout = () => {
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("username");
    setLogedIn(false);
  };

  useEffect(() => {
    const changeTheme = () => {
      const elements = document.querySelectorAll(".changeable");
      elements.forEach((ele) => {
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
      <Logo primary />
      <div className="rigthSection">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <div className="ball"></div>
        </label>
        <RenderIf isTrue={logedIn}>
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
                <RenderIf isTrue={sessionType == "admin"}>
                  <li onClick={goToAddForm}>
                    <button>Add Hotel</button>
                  </li>
                  <li onClick={goToUsersList}>
                    <button>Users</button>
                  </li>
                </RenderIf>
                <li onClick={logout}>
                  <button>Log out</button>
                </li>
              </ul>
            </div>
          </div>
        </RenderIf>
        <RenderIf isTrue={!logedIn}>
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
        </RenderIf>
      </div>
    </StyledHeader>
  );
};
