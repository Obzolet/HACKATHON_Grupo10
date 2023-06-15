
import { useEffect, useState } from "react";

import DataRutina2019 from "../../data/Data_rutina2019";


const Informacion_rutina2019 = () => {

  const { rutina2019 } = DataRutina2019();
  const [rutina2019Datos, setRutina2019Datos] = useState([]);

  useEffect(() => {
    setRutina2019Datos(rutina2019);
  }, [rutina2019]);


  if (rutina2019Datos.length === 0) {
    return <h1>NO HAY DATOS</h1>;
  }

  return (
    <article id="contenedor_producto">
      <ul id="evento">
        {rutina2019Datos.map((dato) => (
          <li key={dato.id}>
            <h2>{dato.ndepProce}</h2>
            <h3>{dato.codDptoO}</h3>
            <h3>{dato.codEve}</h3>
            <p className="nombreEvento">{dato.nomEve}</p>
            <span className="semana">{dato.semana01}</span>
            <h3>{dato.grandTotal}</h3>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Informacion_rutina2019;
