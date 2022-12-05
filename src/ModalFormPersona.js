import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function ModalFormPersona({ open, onClose, onSubmit, initialValues }) {
  const form = useForm({
    defaultValues: { ...initialValues },
  });
  return (
    <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Generar Nueva Persona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control {...form.register("nombre")} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control {...form.register("email")} required />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Tipo de documento:</Form.Label>
            <Form.Select {...form.register("tipoDocumento")} required>
              <option value="DNI">DNI</option>
              <option value="CPA">CPA</option>
              <option value="CI">CI</option>
            </Form.Select>
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Documento:</Form.Label>
            <Form.Control {...form.register("documento")} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control {...form.register("password")} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol:</Form.Label>
            <Form.Select {...form.register("rol")} required>
              <option value="USER">Usuario</option>
              <option value="ADMIN">Admin</option>
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
export default ModalFormPersona;
