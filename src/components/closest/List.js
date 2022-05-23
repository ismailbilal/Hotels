import React, { useEffect } from "react";
import { getLocations } from "../../API";
import { orderByDistance } from "geolib";
import { StyledList } from "./StyledClosest";
import Hotel from "./Hotel";

export default ({ list, setList, userLocation }) => {
  useEffect(() => {
    const fetchLocations = async () => {
      const fetchedLocations = await getLocations();
      const sortedArray = orderByDistance(
        { latitude: userLocation.lat, longitude: userLocation.lon },
        fetchedLocations.map((location) => {
          const obj = {
            ...location,
            latitude: location.lat,
            longitude: location.lon,
          };
          return obj;
        })
      );
      const slicedList = sortedArray.slice(0, 5);
      setList([...slicedList]);
    };
    fetchLocations().catch(console.error);
  }, [userLocation]);

  return (
    <StyledList>
      {list?.map((location) => (
        <Hotel
          userLocation={userLocation}
          location={location}
          key={location._id}
        />
      ))}
    </StyledList>
  );
};
