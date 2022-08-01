import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteModal = ({ onHide, show, deleteHandler, reservation}) => {

  const confirmDel = (id) => {
    deleteHandler(id);
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Do you wish to cancel your reservation?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button onClick = {() => confirmDel(reservation.id)}variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};
