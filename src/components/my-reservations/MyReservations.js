import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { ReservationItem } from "./reservation-item/ReservationItem";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Spinner";
import * as reservationService from "../services/reservationService";

export const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    reservationService.getReservations().then((reservation) => {
      setSpinner(false);
      setReservations(reservation);
    });
  }, []);

  const deleteReservationHandler = (reservationId) => {
    reservationService
      .deleteReservation(reservationId)
      .then((result) => console.log(result));

    setReservations(reservations.filter((x) => x.id !== reservationId));
  };

  return (
      <Row style = {{marginTop: "100px"}}>
        <Col md>
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <h3>My Reservations</h3>
          </div>
          {spinner && <LoadingSpinner />}
          <Card>
            <Card.Body>
              <Table striped bordered hover size="sm" variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Car</th>
                    <th>Pick up</th>
                    <th>Date</th>
                    <th>Drop off</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {reservations.map((reservation, index) => (
                    <ReservationItem
                      index={index + 1}
                      key={reservation.id}
                      reservations={reservation}
                      deleteReservationHandler={deleteReservationHandler}
                    />
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};
