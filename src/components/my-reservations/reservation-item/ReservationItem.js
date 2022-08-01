import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeleteModal } from "../DeleteModal";



export const ReservationItem = ({
  reservations,
  index,
  deleteReservationHandler,

}) => {

  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);


  const deleteHandler = (id) => {
    deleteReservationHandler(id);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{reservations.car}</td>
      <td>{reservations.station}</td>
      <td>{reservations.pickup_date}</td>
      <td>{reservations.station1}</td>
      <td>{reservations.dropoff_date}</td>
      <td>{reservations.price}$</td>
      <td>
        <Button
          onClick = {() => navigate(`/reservation/edit/${reservations.id}`)}
          variant="success"
          size="md"
        >
          Update
        </Button>
      </td>
      <td>
        <Button  onClick={() => setModalShow(true)} variant="danger">
          Delete
        </Button>
      </td>
      <DeleteModal reservation = {reservations} deleteHandler = {deleteHandler} show={modalShow} onHide={() => setModalShow(false)} />
    </tr>
  );
};
