import React, { useState, useRef, useEffect } from "react";
import { StyledMap } from "./StyledClosest";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getBounds } from "geolib";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default ({ list, userLocation }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(14.5);

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
    setTimeout(() => {
      document.querySelector(".mapboxgl-ctrl-geolocate")?.click();
    }, 2000);
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
    const markers = [];
    if (list) {
      list.map((location) => {
        let marker = new mapboxgl.Marker()
          .setLngLat([location.lon, location.lat])
          .addTo(map.current);
        markers.push(marker);
      });
      // const bound = getBounds([
      //   ...list?.map((location) => {
      //     let obj = {
      //       ...location,
      //       latitude: location.lat,
      //       longitude: location.lon,
      //     };
      //     return obj;
      //   }),
      //   {
      //     latitude: userLocation.lat,
      //     longitude: userLocation.lon,
      //   },
      // ]);
      // console.log(bound);
    }
    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [list]);

  return (
    <StyledMap>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </StyledMap>
  );
};
