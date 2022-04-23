import { useEffect } from "react";
import { StyledHeader, StyledLogo } from "./StyledHeader";

export default ({ logedIn }) => {
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
        {logedIn && <i className="fas fa-user"></i>}
        {!logedIn && (
          <div className="logButtns">
            <button>
              <i className="fas fa-user-plus"></i>
              <span> Sign Up</span>
            </button>
            <button>
              <i class="fas fa-sign-in-alt"></i>
              <span> Sign In</span>
            </button>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
