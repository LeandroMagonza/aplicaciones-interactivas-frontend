import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import {
  useAgregarInquilinoMutation,
  useInquilinosQuery,
  usePersonasQuery,
} from "./utils/api";

function ModalInquilinos({ open, onClose, idDepto }) {
  const inquilinosQuery = useInquilinosQuery(idDepto);
  const personasQuery = usePersonasQuery();
  const agregarInquilinoMutation = useAgregarInquilinoMutation();

  const handleAgregarInquilino = async (values) => {
    await agregarInquilinoMutation.mutateAsync({
      codigoUnidad: idDepto,
      documento: values.inquilino.documento,
    });
    form.reset();
  };

  const form = useForm();
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Inquilinos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={form.handleSubmit(handleAgregarInquilino)}
          style={{ display: "flex", gap: 10 }}
        >
          <Form.Group>
            <Form.Label>Inquilino:</Form.Label>
            <Form.Select {...form.register("inquilino")} required>
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
            {(inquilinosQuery.data ?? []).map((p) => (
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
export default ModalInquilinos;
