import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import {
  useAgregarDuenioMutation,
  useDueniosQuery,
  usePersonasQuery,
} from "./utils/api";

function ModalDuenios({ open, onClose, idDepto }) {
  const dueniosQuery = useDueniosQuery(idDepto);
  const personasQuery = usePersonasQuery();
  const agregarDuenioMutation = useAgregarDuenioMutation();

  const handleAgregarInquilino = async (values) => {
    await agregarDuenioMutation.mutateAsync({
      codigoUnidad: idDepto,
      documento: values.duenio.documento,
    });
    form.reset();
  };

  console.log(dueniosQuery.data);

  const form = useForm();
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Dueños</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={form.handleSubmit(handleAgregarInquilino)}
          style={{ display: "flex", gap: 10 }}
        >
          <Form.Group>
            <Form.Label>Dueños:</Form.Label>
            <Form.Select {...form.register("duenio")} required>
              {(personasQuery.data ?? []).map((i) => (
                <option value={i.documento}>
                  {i.nombre} - {i.documento}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
            </tr>
          </thead>
          <tbody>
            {(dueniosQuery.data ?? []).map((p) => (
              <tr key={p.documento}>
                <td>{p.nombre}</td>
                <td>{p.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
}
export default ModalDuenios;
