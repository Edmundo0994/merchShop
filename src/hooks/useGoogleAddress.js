import { useEffect, useState } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MERCH_APP_APIKEY}`;
  useEffect(async () => {
    const response = await axios(API);
    console.log(response.data.results[0].geometry.location);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
