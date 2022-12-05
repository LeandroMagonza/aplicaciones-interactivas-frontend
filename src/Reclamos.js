import './App.css';
import React, { useState, useEffect } from "react";
import ModalGenerarReclamo from './ModalGenerarReclamo';
import CardReclamo from './CardReclamo';
import Button from "react-bootstrap/Button";

import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  useCreateReclamoMutation,
  useDeleteEdificioMutation,
  useEdificiosQuery,
  useEditEdificioMutation,
} from "./utils/api";
import { baseUrl, httpClient } from "./utils/httpClient";

function Reclamos({ usuarioLogueado, edificio }) {
  const createMutation = useCreateReclamoMutation();
  const deleteMutation = useDeleteEdificioMutation();
  const editMutation = useEditEdificioMutation();
  const [reclamos, setReclamos] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    fetch(baseUrl + "reclamo/edificio/" + edificio)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setReclamos(data);
      });



  }, []);



  return (
    <div>

      <div className='d-flex justify-content-around'>
        <h2 className='pageTitle'>Reclamos</h2>
        <Button variant="primary" onClick={() => setCreateOpen(true)}>
          Generar Reclamo
        </Button>
        <ModalGenerarReclamo open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={async (values) => {
          await createMutation.mutate(values);
          setCreateOpen(false);
        }}
        edificio={edificio}
      />
      </div>
      <hr></hr>
      <div className='container'>

      {(reclamos.length == 0)?"No Hay Reclamos para el edificio "+edificio:
        reclamos.map((reclamo) => {
          return (
            <CardReclamo reclamo={reclamo} key={reclamo.numero}></CardReclamo>
          );
        })
        }

      </div>
    </div>
  );
}

export default Reclamos;