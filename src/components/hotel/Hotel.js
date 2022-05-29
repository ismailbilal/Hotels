import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteHotel, deleteLocation, getLocation } from "../../API";
import Detail from "./Detail";
import Map from "./Map";
import ReviewList from "./ReviewList";
import { StyledHotel } from "./StyledHotel";
import { useNavigate } from "react-router-dom";
import { RenderIf } from "../../utilities/RenderIf";

export default ({ sessionType }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  const goToPrevPage = () => navigate(-1);

  const deleteThisHotel = async () => {
    const location = await getLocation(id);
    if (location) {
      const res = await deleteHotel(id);
      if (res) {
        const res2 = await deleteLocation(location._id);
        if (res2) {
          goToPrevPage();
        }
      }
    }
  };
  useEffect(() => {
    const fetchHotel = async () => {
      const fetchedLocation = await getLocation(id);
      setLocation(fetchedLocation);
    };
    fetchHotel().catch(console.error);
  }, [id, sessionType]);

  return (
    <StyledHotel>
      <div className="mapDetail">
        <Detail hotelId={id} hotelLocation={location} />
        <Map lati={location?.lat} long={location?.lon} />
      </div>
      <ReviewList hotelId={id} />
      <RenderIf isTrue={sessionType === "admin"}>
        <button onClick={deleteThisHotel} className="deleteBtn">
          Delete this hotel
        </button>
      </RenderIf>
    </StyledHotel>
  );
};
