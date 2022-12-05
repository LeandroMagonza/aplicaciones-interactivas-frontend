import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./App.css";
import ModalDuenios from "./ModalDuenios";
import ModalFormDepartamento from "./ModalFormDepartamento";
import ModalInquilinos from "./ModalInquilinos";
import {
  useCreateDepartamentoMutation,
  useDeleteDepartamentoMutation,
  useDepartamentosQuery,
  useEditDepartamentoMutation,
} from "./utils/api";

function Departamentos({ edificio, open, onClose }) {
  const departamentosQuery = useDepartamentosQuery(edificio.codigo);

  const [editing, setEditing] = useState(undefined);
  const [createOpen, setCreateOpen] = useState(false);
  const [showInquilinos, setShowInquilinos] = useState(undefined);
  const [showDuenios, setShowDuenios] = useState(undefined);

  const createMutation = useCreateDepartamentoMutation();
  const deleteMutation = useDeleteDepartamentoMutation();
  const editMutation = useEditDepartamentoMutation();

  if (departamentosQuery.data === undefined) {
    return <p>Cargando...</p>;
  }

  return (
    <Modal
      show={open}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Datos de Edificio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <h2 className="pageTitle">Departamentos</h2>
          <Button variant="primary" onClick={() => setCreateOpen(true)}>
            Agregar departamento
          </Button>
        </div>
        <hr></hr>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Piso</th>
                <th scope="col">Número Depto</th>
                <th scope="col">Habitado</th>
                <th scope="col">Código Edificio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {(departamentosQuery.data ?? []).map((depto) => (
                <tr key={depto.id}>
                  <td>{depto.piso}</td>
                  <td>{depto.numero}</td>
                  <td>{depto.habitado === true ? "Si" : "No"}</td>
         

                  <td>
                    <Button onClick={() => setEditing(depto)}>Editar</Button>
                    <Button
                      onClick={() => {
                        setShowInquilinos(depto);
                      }}
                    >
                      Inquilinos
                    </Button>
                    <Button onClick={() => setShowDuenios(depto)}>
                      Duenios
                    </Button>

                    <Button
                      variant="text"
                      onClick={() => deleteMutation.mutate(depto.codigo)}
                    >
                      Borrar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ModalFormDepartamento
          open={createOpen}
          onClose={() => setCreateOpen(false)}
          onSubmit={async (values) => {
            await createMutation.mutate({
              ...values,
              edificio: { ...edificio },
            });
            setCreateOpen(false);
          }}
        />
        {editing !== undefined && (
          <ModalFormDepartamento
            open={editing !== undefined}
            initialValues={editing}
            onClose={() => setEditing(undefined)}
            onSubmit={async (values) => {
              await editMutation.mutate({
                ...values,
                edificio: { ...edificio },
              });
              setEditing(undefined);
            }}
          />
        )}
        {showInquilinos && (
          <ModalInquilinos
            idDepto={showInquilinos.id}
            onClose={() => setShowInquilinos(undefined)}
            open={showInquilinos !== undefined}
          />
        )}
        {showDuenios && (
          <ModalDuenios
            idDepto={showDuenios.id}
            onClose={() => setShowDuenios(undefined)}
            open={showDuenios !== undefined}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Departamentos;
