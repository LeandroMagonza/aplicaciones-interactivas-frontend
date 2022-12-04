import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import ModalFormPersona from "./ModalFormPersona";
import {
  useCreatePersonaMutation,
  useDeletePersonaMutation,
  useEditPersonaMutation,
  usePersonasQuery,
} from "./utils/api";

function Personas() {
  const personasQuery = usePersonasQuery();
  const [createPersonaOpen, setCreatePersonaOpen] = useState(false);
  const [editingPersona, setEditingPersona] = useState(undefined);
  const createPersonaMutation = useCreatePersonaMutation();
  const deletePersonaMutation = useDeletePersonaMutation();
  const editPersonaMutation = useEditPersonaMutation();

  if (personasQuery.data === undefined) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h2 className="pageTitle">Personas</h2>
        <Button variant="primary" onClick={() => setCreatePersonaOpen(true)}>
          Agregar Persona
        </Button>
      </div>
      <hr></hr>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
              <th scope="col">Rol</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {(personasQuery.data ?? []).map((p) => (
              <tr key={p.documento}>
                <td>{p.nombre}</td>
                <td>{p.email}</td>
                <td>{p.rol}</td>
                <td>
                  <Button onClick={() => setEditingPersona(p)}>Editar</Button>
                  <Button
                    variant="text"
                    onClick={() => deletePersonaMutation.mutate(p.documento)}
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalFormPersona
        open={createPersonaOpen}
        onClose={() => setCreatePersonaOpen(false)}
        onSubmit={async (values) => {
          await createPersonaMutation.mutate(values);
          setCreatePersonaOpen(false);
        }}
      />
      {editingPersona !== undefined && (
        <ModalFormPersona
          open={editingPersona !== undefined}
          initialValues={editingPersona}
          onClose={() => setEditingPersona(undefined)}
          onSubmit={async (values) => {
            await editPersonaMutation.mutate(values);
            setEditingPersona(undefined);
          }}
        />
      )}
    </div>
  );
}

export default Personas;
