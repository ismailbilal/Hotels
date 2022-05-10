import React, { useState, useEffect } from "react";
import { getHotel } from "../../API";
import { StyledDetail } from "./StyledHotel";

export default ({ hotelId }) => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotel(hotelId);
      console.log(data);
      setHotel(data);
    };
    fetchHotel().catch(console.error);
  }, [hotelId]);
  return <StyledDetail></StyledDetail>;
};
