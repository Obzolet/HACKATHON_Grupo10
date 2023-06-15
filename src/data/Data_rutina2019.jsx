import { useEffect, useState } from "react";

const DataRutina2019 = () => {
  const [rutina2019, setRutina2019] = useState([]);
  const urlApi = "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019";

  const fetchData = async (url) => {
    
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setRutina2019(jsonData.rutina2019);
    } catch (error) {
      console.error("Error al cargar los datos de rutina:", error);
    }
  };

  useEffect(() => {
    fetchData(urlApi);
  }, []);

  return { rutina2019, urlApi, fetchData };
};

export default DataRutina2019;
