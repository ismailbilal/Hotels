import { Navigate, useNavigate } from "react-router-dom";
import { StyledLogo } from "./StyledHeader";

export default () => {
  const navigate = useNavigate();
  const gotToHome = () => navigate("/home");

  return (
    <StyledLogo onClick={gotToHome}>
      <i className="fas fa-hotel"></i>
      <span> Hotel</span>
    </StyledLogo>
  );
};
