import React, { useEffect, useState } from "react";
import List from "./List";
import Map from "./Map";
import { StyledClosest } from "./StyledClosest";

export default () => {
  const [closestHotels, setClosestHotels] = useState(null);
  const [userLocation, setUserLocation] = useState({
    lat: 34.0386,
    lon: -4.9993,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <StyledClosest>
      <List
        list={closestHotels}
        setList={setClosestHotels}
        userLocation={userLocation}
      />
      <Map list={closestHotels} userLocation={userLocation} />
    </StyledClosest>
  );
};
