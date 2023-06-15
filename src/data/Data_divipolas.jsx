import { useEffect, useState } from "react";

const DataDivipolas = () => {
  const [divipolas, setDivipolas] = useState([]);
  const urlApi = "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/divipola";

  const fetchData = async (url) => {
    
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setDivipolas(jsonData.divipolas);
    } catch (error) {
      console.error("Error fetching data product:", error);
    }
  };

  useEffect(() => {
    fetchData(urlApi);
  }, []);

  return { divipolas, urlApi, fetchData };
};

export default DataDivipolas;
