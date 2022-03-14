import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: -2.032,
    lng: -79.954,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.MERCH_APP_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
