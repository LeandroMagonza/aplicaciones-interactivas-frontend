import './App.css';
import React, { useState } from "react";
import ModalGenerarReclamo from './ModalGenerarReclamo';
import CardReclamo from './CardReclamo';

function Reclamos() {
    const [reclamos, setReclamos] = useState([
        {
          "usuario": {
            "documento": "CPA3449614",
            "nombre": "BRITEZ, BLAS                  "
          },
          "edificio": {
            "codigo": 1,
            "nombre": "SLS Puerto Madero",
            "direccion": "Mogliani 425"
          },
          "ubicacion": "Techo cocina",
          "descripcion": "Gotera",
          "unidad": {
            "id": 15,
            "piso": "8",
            "numero": "4",
            "habitado": true,
            "edificio": {
              "codigo": 1,
              "nombre": "SLS Puerto Madero",
              "direccion": "Mogliani 425"
            }
          },
          "estado": 0,
          "imagenes": [
    
          ]
        },
        {
          "usuario": {
            "documento": "CPA3786534",
            "nombre": "CONDE, CARLOS                  "
          },
          "edificio": {
            "codigo": 2,
            "nombre": "El Achurero",
            "direccion": "Acervitan 1426"
          },
          "ubicacion": "Toilette",
          "descripcion": "Baldosa Rota",
          "unidad": {
            "id": 16,
            "piso": "3",
            "numero": "1",
            "habitado": true,
            "edificio": {
              "codigo": 2,
              "nombre": "El Achurero",
              "direccion": "Acervitan 1426"
            }
          },
          "estado": 0,
          "imagenes": [
    
          ]
        }
      ]);


  return (
    <div>

      <div className='d-flex justify-content-around'>
        <h2 className='pageTitle'>Reclamos</h2>
        <ModalGenerarReclamo></ModalGenerarReclamo>
      </div>
      <hr></hr>
      <div className='container'>

        {reclamos.map((reclamo) => {
          return (
            <CardReclamo reclamo={reclamo}></CardReclamo>
          );
        })}

      </div>
    </div>
  );
}

export default Reclamos;