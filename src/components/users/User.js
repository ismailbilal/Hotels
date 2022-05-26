import React, { useState } from "react";
import { StyledUser } from "./StyledUsers";
import { RenderIf } from "../../utilities/RenderIf";
import { addAdmin, deleteUserFromDB, deleteAdminFromDB } from "../../API";
import { useNavigate } from "react-router-dom";

export default ({ userInfo, isAdmin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const reloadPage = () => navigate(0);

  const deleteUser = async (e, userId) => {
    setIsLoading(true);
    const res = await deleteUserFromDB(userId);
    if (res) {
      reloadPage();
    }
  };

  const deleteAdmin = async (e, adminId) => {
    setIsLoading(true);
    const res = await deleteAdminFromDB(adminId);
    if (res) {
      reloadPage();
    }
  };

  const setAddmin = async (e, userId, email, password) => {
    setIsLoading(true);
    const res = await addAdmin(email, password);
    if (res) {
      const res2 = await deleteUserFromDB(userId);
      if (res2) {
        reloadPage();
      }
    }
  };

  return (
    <StyledUser>
      <div className="userInfo">
        <div className="img">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="info">
          <RenderIf isTrue={!isAdmin}>
            <em className="username">{userInfo?.username}</em>
          </RenderIf>
          <p>{userInfo?.email}</p>
        </div>
      </div>
      <RenderIf isTrue={!isLoading}>
        <RenderIf isTrue={!isAdmin}>
          <div className="btns">
            <button
              onClick={(e) =>
                setAddmin(e, userInfo?._id, userInfo?.email, userInfo?.password)
              }
            >
              setAdmin
            </button>
            <button
              className="delete"
              onClick={(e) => deleteUser(e, userInfo?._id)}
            >
              Delete
            </button>
          </div>
        </RenderIf>
        <RenderIf
          isTrue={
            isAdmin && window.sessionStorage.getItem("email") != userInfo?.email
          }
        >
          <div className="btns">
            <button
              className="delete"
              onClick={(e) => deleteAdmin(e, userInfo?._id)}
            >
              Delete
            </button>
          </div>
        </RenderIf>
      </RenderIf>
      <RenderIf isTrue={isLoading}>Loading ...</RenderIf>
    </StyledUser>
  );
};
