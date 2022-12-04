import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useInquilinosQuery, usePersonasQuery } from "./utils/api";

function ModalInquilinos({ open, onClose, onSubmit, initialValues, idDepto }) {
  const inquilinosQuery = useInquilinosQuery(idDepto);
  const personasQuery = usePersonasQuery();

  const form = useForm({
    defaultValues: { ...initialValues },
  });
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Inquilino</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ModalInquilinos;
