import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

function LocationMarker({ position, message }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, map.getZoom());
  }, [position, map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>{message}</Popup>
    </Marker>
  );
}

const Map = ({ position, zoom, scroll, styles, popupMessage }) => {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={scroll} style={styles}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} message={popupMessage} />
    </MapContainer>
  );
};

export default Map;
