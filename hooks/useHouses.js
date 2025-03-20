import { useEffect, useState } from "react";
import loadingStatus from "../components/helpers/loadingStatus.js"
import useGetRequest from "./useGetRequest";

const useHouses = () => {ç
  const [houses, setHouses] = useState([]);
  const { get, loadingState } = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
