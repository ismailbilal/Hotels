import React, { useEffect, useState } from "react";
import { deleteReviewFromDB, getReviews } from "../../API";
import { StyledReview, StyledReviewList } from "./StyledHotel";
import { RenderIf } from "../../utilities/RenderIf";
import { useNavigate } from "react-router-dom";

export default ({ hotelId }) => {
  const navigate = useNavigate();
  const [list, setList] = useState(null);

  const reloadPage = () => navigate(0);

  const deleteReview = async (e, reviewId) => {
    console.log(reviewId);
    const res = await deleteReviewFromDB(reviewId);
    if (res) {
      reloadPage();
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      const fetchedList = await getReviews(hotelId);
      console.log(fetchedList);
      setList([...fetchedList]);
    };

    fetchList().catch(console.error);
  }, [hotelId]);

  return (
    <StyledReviewList>
      {list?.map((review, index) => (
        <StyledReview key={index}>
          <div className="review">
            <h4>
              <i className="fas fa-user-circle"></i>
              {review?.username}
            </h4>
            <div className="dateRating">
              <em>
                <i className="fas fa-star"></i> {review?.rating.low}
              </em>
              <em>{`${review?.date?.day.low}/${review?.date?.month.low}/${review?.date?.year.low}`}</em>
            </div>
            <p>{review?.comment}</p>
          </div>
          <RenderIf isTrue={window.sessionStorage.getItem("email")}>
            <button onClick={(e) => deleteReview(e, review?._id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </RenderIf>
        </StyledReview>
      ))}
    </StyledReviewList>
  );
};
