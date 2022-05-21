import { StyledRating } from "./StyledHotel";

export default () => {
  return (
    <StyledRating>
      <div className="wrapper">
        <input name="rating" type="radio" id="st1" value="5" />
        <label htmlFor="st1"></label>
        <input name="rating" type="radio" id="st2" value="4" />
        <label htmlFor="st2"></label>
        <input name="rating" type="radio" id="st3" value="3" />
        <label htmlFor="st3"></label>
        <input name="rating" type="radio" id="st4" value="2" />
        <label htmlFor="st4"></label>
        <input name="rating" type="radio" id="st5" value="1" />
        <label htmlFor="st5"></label>
      </div>
    </StyledRating>
  );
};
