import { useEffect, useState } from "react";

const DataCie105 = () => {
  const [cie105, setCie105] = useState([]);
  const urlApi = "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/cie10";

  const fetchData = async (url) => {
    
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setCie105(jsonData.cie105);
    } catch (error) {
      console.error("Error fetching data product:", error);
    }
  };

  useEffect(() => {
    fetchData(urlApi);
  }, []);

  return { cie105, urlApi, fetchData };
};

export default DataCie105;
