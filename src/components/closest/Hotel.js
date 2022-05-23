import { useEffect, useState } from "react";
import { getHotelByLocation } from "../../API";
import { StyledHotel } from "./StyledClosest";
import { getDistance } from "geolib";

export default ({ location, userLocation }) => {
  const [hotel, setHotel] = useState(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const fetchHotel = async () => {
      const fetchedHotel = await getHotelByLocation(location._id);
      setHotel(fetchedHotel);
    };
    fetchHotel().catch(console.error);
  }, [location]);

  useEffect(() => {
    const dist = getDistance(
      {
        longitude: userLocation.lon,
        latitude: userLocation.lat,
      },
      {
        longitude: location.lon,
        latitude: location.lat,
      }
    );
    setDistance(dist);
  }, [location, userLocation]);

  return (
    <StyledHotel>
      <img src={hotel?.imageUrl} alt="" />
      <div className="info">
        <h4>{hotel?.name}</h4>
        <div className="ratingDist">
          <em>
            <i className="fas fa-star"></i>
            {hotel?.rating || 0}
          </em>
          <em>
            <i className="fas fa-road"></i>
            {distance / 1000} Km
          </em>
        </div>
      </div>
    </StyledHotel>
  );
};
