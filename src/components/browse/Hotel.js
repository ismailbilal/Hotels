import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocation } from "../../API";
import { StyledImage, StyledItem } from "./StyledBrowse";

export default ({ hotel }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});

  const goToHotelDetail = () => navigate(`/browse/hotel/${hotel._id}`);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLocation = await getLocation(hotel._id);
      setLocation({ ...fetchedLocation });
    };
    fetchData().catch(console.error);
    return () => {};
  }, [hotel]);

  return (
    <StyledItem onClick={goToHotelDetail}>
      <div className="image">
        <StyledImage imageUrl={hotel.imageUrl} />
      </div>
      <div className="info">
        <h4>{hotel.name}</h4>
        {hotel.rating && (
          <em>
            <i className="fas fa-star"></i>
            {hotel.rating}({hotel.reviewCount})
          </em>
        )}
        <br />
        {hotel.phoneNumber && (
          <em>
            <i className="fas fa-phone"></i>
            {hotel.phoneNumber}
          </em>
        )}
        {hotel.webSite && (
          <p>
            <i className="fas fa-link"></i>
            <a href={`http://${hotel.webSite}`} target="_blank">
              {hotel.webSite}
            </a>
          </p>
        )}
        <p>{location?.address}</p>
      </div>
    </StyledItem>
  );
};
