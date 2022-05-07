import Hotel from "./Hotel";
import { StyledList } from "./StyledBrowse";

export default ({ hotelsList }) => {
  return (
    <StyledList>
      {hotelsList.map((hotel) => (
        <Hotel key={hotel._id} hotel={hotel} />
      ))}
    </StyledList>
  );
};
