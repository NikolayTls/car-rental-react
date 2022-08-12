import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const CarItemModal = ({ onHide, show, cars }) => {
  console.log(cars);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {cars.name}
          <div>Category: {cars.category.category_name}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Car Information</h4>
        <ul>
          <li>Horse Power : {cars.category.Power}</li>
          <li>Dour Amount : {cars.category.baggage_amount}</li>
          <li>Driver Age : {cars.category.driver_age}</li>
          <li>Horse Power : {cars.category.Power}</li>
          <li>Max. Occupants : {cars.category.occupant_amount}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
