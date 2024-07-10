import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function ModalLogin({ show, handleClose }) {
  const navigate = useNavigate();
  const sendClose = () => {
    hide(false);
  };

  const [nameUser, setUsername] = useState("");

  const [isInValid, setIsInvalid] = useState(false);

  

  const userNameSave = () => {
    if (nameUser == "" || nameUser.length < 2) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      localStorage.setItem("userName", nameUser);
      navigate("/menu");
      console.log(localStorage.getItem("userName"));
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ingresa tu nombre:
          <Form.Control
            type="text"
            placeholder="Nombre"
            aria-label="Username"
            id="userName"
            variant="outline-primary"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            isInvalid={isInValid}
          />
          <Form.Control.Feedback type="invalid">
            Ingresa un nombre de usuario válido.
          </Form.Control.Feedback>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary " onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            style={{ backgroundColor: "#4CAF50" }}
            variant="success"
            onClick={userNameSave}
          >
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;
