import React, { useEffect, useState } from "react";
import { getReviews } from "../../API";
import { StyledReview, StyledReviewList } from "./StyledHotel";

export default ({ hotelId }) => {
  const [list, setList] = useState(null);

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
        </StyledReview>
      ))}
    </StyledReviewList>
  );
};
