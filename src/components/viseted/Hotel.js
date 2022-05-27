import { StyledHotel, StyledImage } from "./Styledisited";
import { useNavigate } from "react-router-dom";

export default ({ hotel }) => {
  const navigate = useNavigate();

  const goToHotelPage = () => navigate(`/browse/hotel/${hotel?._id}`);

  return (
    <StyledHotel onClick={goToHotelPage}>
      <StyledImage bg={hotel?.imageUrl} />
      <div className="info">
        <h4>{hotel?.name}</h4>
        <p>{`visited in : ${hotel?.date.day.low}/${hotel?.date.month.low}/${hotel?.date.year.low}`}</p>
      </div>
    </StyledHotel>
  );
};
