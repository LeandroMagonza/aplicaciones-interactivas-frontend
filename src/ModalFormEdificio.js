import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function ModalFormEdificio({ open, onClose, onSubmit, initialValues }) {
  const form = useForm({
    defaultValues: { ...initialValues },
  });
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Generar Nuevo Edificio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control {...form.register("nombre")} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección:</Form.Label>
            <Form.Control {...form.register("direccion")} required />
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
export default ModalFormEdificio;
