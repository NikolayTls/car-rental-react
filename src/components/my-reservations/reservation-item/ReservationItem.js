import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


export const ReservationItem = ({
  reservations,
  index,
  deleteReservationHandler,

}) => {

  let navigate = useNavigate();


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
          onClick = {() => navigate(`/reservation/${reservations.id}`)}
          variant="success"
          size="md"
        >
          Update
        </Button>
      </td>
      <td>
        <Button onClick={() => deleteHandler(reservations.id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
