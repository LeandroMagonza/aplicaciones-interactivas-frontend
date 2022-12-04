import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function ModalFormDepartamento({ open, onClose, onSubmit, initialValues }) {
  const form = useForm({
    defaultValues: { ...initialValues },
  });
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Generar Nuevo Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Piso:</Form.Label>
            <Form.Control {...form.register("piso")} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Número:</Form.Label>
            <Form.Control {...form.register("numero")} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Habilitado:</Form.Label>
            <Form.Select {...form.register("rol")} required>
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ModalFormDepartamento;
