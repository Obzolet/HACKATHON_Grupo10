import { useEffect, useState } from "react";

const DataDiccionarios = () => {
  const [diccionarios, setDiccionarios] = useState([]);
  const urlApi = "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/diccionario";

  const fetchData = async (url) => {
    
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setDiccionarios(jsonData.diccionarios);
    } catch (error) {
      console.error("Error fetching data product:", error);
    }
  };

  useEffect(() => {
    fetchData(urlApi);
  }, []);

  return { diccionarios, urlApi, fetchData };
};

export default DataDiccionarios;
