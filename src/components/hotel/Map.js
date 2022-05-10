import React, { useState, useRef, useEffect } from "react";
import { StyledMap } from "./StyledHotel";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default ({ lati, long }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    })
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        })
      )
      .addControl(new mapboxgl.NavigationControl());
  });
  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  useEffect(() => {
    if (lati && long) {
      map.current.flyTo({
        center: [long, lati],
        essential: true,
      });

      const marker = new mapboxgl.Marker()
        .setLngLat([long, lati])
        .addTo(map.current);
    }
  }, [lati, long]);

  return (
    <StyledMap>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </StyledMap>
  );
};
