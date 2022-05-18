import React, { useState, useEffect, useRef } from "react";
import { getHotel, getUserId, sendReview } from "../../API";
import RatingInput from "./RatingInput";
import { StyledDetail, StyledImage } from "./StyledHotel";
import { useNavigate } from "react-router-dom";

export default ({ hotelId, hotelLocation }) => {
  const navigate = useNavigate();
  const errMsg = useRef(null);
  const succMsg = useRef(null);
  const [hotel, setHotel] = useState(null);
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });

  const goToLoginPage = () => navigate("/login");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = window.sessionStorage.getItem("username");
    if (!username) {
      errMsg.current.classList.add("msgVisible");
      succMsg.current.classList.remove("msgVisible");
    } else {
      errMsg.current.classList.remove("msgVisible");
      succMsg.current.classList.add("msgVisible");
      const userId = await getUserId(username);
      await sendReview(userId, hotelId, review.rating, review.comment);
    }
  };

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotel(hotelId);
      console.log(data);
      console.log(hotelLocation);
      setHotel(data);
    };
    fetchHotel().catch(console.error);
  }, [hotelId, hotelLocation]);

  return (
    <StyledDetail>
      <StyledImage bg={hotel?.imageUrl} />
      <div className="info">
        <a href={`http://${hotel?.webSite}`}>
          <h3>
            {hotel?.name} <i className="fas fa-link"></i>
          </h3>
        </a>
        <form onSubmit={handleSubmit} onChange={handleChanges}>
          <RatingInput />
          <textarea
            name="comment"
            id="comment"
            cols="10"
            rows="5"
            placeholder="Add comment"
          ></textarea>
          <span ref={errMsg} className="errMsg">
            Login is required for this action, Please{" "}
            <strong onClick={goToLoginPage}>Login</strong> as user to continue{" "}
            <i className="fas fa-exclamation-circle failure-icon"></i>
          </span>
          <span ref={succMsg} className="succMsg">
            seved <i className="far fa-check-circle success-icon"></i>
          </span>
          <button type="submit">send review</button>
        </form>
      </div>
    </StyledDetail>
  );
};
