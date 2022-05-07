import { useState, useEffect } from "react";
import { getLocation } from "../../API";
import { StyledImage, StyledItem } from "./StyledBrowse";

export default ({ hotel }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLocation = await getLocation(hotel._id);
      setLocation({ ...fetchedLocation });
    };
    fetchData().catch(console.error);
    return () => {};
  }, []);

  return (
    <StyledItem>
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
        {location.address && <p>{location.address}</p>}
      </div>
    </StyledItem>
  );
};
