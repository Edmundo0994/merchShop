import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map({ data }) {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  return (
    <LoadScript googleMapsApiKey={process.env.MERCH_APP_APIKEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={data}>
        <Marker position={data} />
      </GoogleMap>
    </LoadScript>
  );
}
