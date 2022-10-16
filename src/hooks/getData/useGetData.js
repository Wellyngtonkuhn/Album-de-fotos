import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const BASE_URL = "https://api.pexels.com/v1/curated";

const fetchData = async () => {
  const request = await axios.get(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  }).then(res => res.json())
  
  return request;
};

const useGetData = () => {

  const data = useQuery(["data"], fetchData());
  return data;

};

export default useGetData;
