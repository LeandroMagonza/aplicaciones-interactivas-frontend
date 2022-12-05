import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Departamentos from "./Departamentos";
import ModalFormEdificio from "./ModalFormEdificio";
import {
  useCreateEdificioMutation,
  useDeleteEdificioMutation,
  useEdificiosQuery,
  useEditEdificioMutation,
} from "./utils/api";

function Edificios({setPage, setParam}) {
  const edificiosQuery = useEdificiosQuery();

  const [createOpen, setCreateOpen] = useState(false);
  const [editing, setEditing] = useState(undefined);
  const [edificioSeleccionado, setEdificioSeleccionado] = useState(undefined);
  const createMutation = useCreateEdificioMutation();
  const deleteMutation = useDeleteEdificioMutation();
  const editMutation = useEditEdificioMutation();

  console.log("edificios", edificiosQuery.data)

  if (edificiosQuery.data === undefined) {
    return <p>Cargando...</p>;
  }

  function verReclamos(codigo) {
    setPage("reclamos");
    setParam(codigo);
}

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h2 className="pageTitle">Edificios</h2>
        <Button variant="primary" onClick={() => setCreateOpen(true)}>
          Agregar edificio
        </Button>
      </div>
      <hr></hr>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {(edificiosQuery.data ?? []).map((p) => (
              <tr key={p.codigo}>
                <td>{p.nombre}</td>
                <td>{p.direccion}</td>
                <td>
                  <Button onClick={() => setEditing(p)}>Editar</Button>
                  <Button
                    variant="secondary"
                    onClick={() => setEdificioSeleccionado(p)}
                  >
                    Departamentos
                  </Button>
                  <Button
                  variant="warning"
                    onClick={() => verReclamos(p.codigo)}>Reclamos</Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteMutation.mutate(p.codigo)}
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {edificioSeleccionado && (
        <Departamentos
          edificio={edificioSeleccionado}
          open={edificioSeleccionado !== undefined}
          onClose={() => setEdificioSeleccionado(undefined)}
        />
      )}
      <ModalFormEdificio
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={async (values) => {
          await createMutation.mutate(values);
          setCreateOpen(false);
        }}
      />
      {editing !== undefined && (
        <ModalFormEdificio
          open={editing !== undefined}
          initialValues={editing}
          onClose={() => setEditing(undefined)}
          onSubmit={async (values) => {
            await editMutation.mutate(values);
            setEditing(undefined);
          }}
        />
      )}
    </div>
  );
}

export default Edificios;
