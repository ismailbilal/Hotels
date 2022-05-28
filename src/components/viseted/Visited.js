import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelsVisited } from "../../API";
import Hotel from "./Hotel";
import { StyledVisited } from "./Styledisited";

export default () => {
  const { userId } = useParams();
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      const fetchedHotels = await getHotelsVisited(userId);
      setHotels([...fetchedHotels]);
    };

    fetchHotels().catch(console.error);
  }, [userId]);

  return (
    <StyledVisited>
      {hotels?.map((hotel) => (
        <Hotel key={hotel?._id} hotel={hotel} />
      ))}
    </StyledVisited>
  );
};
