import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLocation } from "../../API";
import Detail from "./Detail";
import Map from "./Map";
import { StyledHotel } from "./StyledHotel";

export default ({ logedIn }) => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const fetchedLocation = await getLocation(id);
      setLocation(fetchedLocation);
    };
    fetchHotel().catch(console.error);
  }, [id]);

  return (
    <StyledHotel>
      <Detail hotelId={id} hotelLocation={location} />
      <Map lati={location?.lat} long={location?.lon} />
    </StyledHotel>
  );
};
