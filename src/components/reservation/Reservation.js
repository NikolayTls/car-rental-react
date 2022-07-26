import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import * as data from "../services/reservationForm";
import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

export const Reservation = () => {
  const [cars, setCars] = useState([]);
  const [stations, setStations] = useState([]);
  const [stations1, setStations1] = useState([]);
  const [cities, setCities] = useState([]);

  const [values, setValues] = useState({
    car: "Fiat 500",
    city: "Berlin",
    station: "BERLIN STEGLITZ",
    city1: "Berlin",
    station1: "BERLIN STEGLITZ",
  });

  let navigate = useNavigate();

  let { reservationId } = useParams();

  const [price, setPrice] = useState(0);

  const [date_pick, setDatePick] = useState(new Date());
  const [date_drop, setDateDrop] = useState(new Date());

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    data.getCars().then((result) => setCars(result));
    data.getCities().then((result) => setCities(result));

    if (reservationId) {
      fetch(`http://127.0.0.1:8000/reservation/${reservationId}`)
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
  }, [reservationId]);

  useEffect(() => {
    let [city] = cities.filter((x) => x.name === values.city);

    if (city) {
      fetch(`http://127.0.0.1:8000/ajax/load-stations/${city.id}`)
        .then((res) => res.json())
        .then((result) => {
          setStations(result);
          setValues((state) => ({
            ...state,
            station: result[0].name,
          }));
        });
    }
  }, [values.city, cities]);

  useEffect(() => {
    let [city] = cities.filter((x) => x.name === values.city1);

    if (city) {
      fetch(`http://127.0.0.1:8000/ajax/load-stations/${city.id}`)
        .then((res) => res.json())
        .then((result) => {
          setStations1(result);
          setValues((state) => ({
            ...state,
            station1: result[0].name,
          }));
        });
    }
  }, [values.city1, cities]);

  useEffect(() => {
    const diffTime = Math.abs(date_drop - date_pick);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let carPrice = cars.find((x) => x.name === values.car)?.category
      .price_per_day;

    setPrice(diffDays * carPrice);
  }, [date_pick, date_drop, cars, values.car]);

  const onSubmit = (e) => {
    e.preventDefault();
    values["pickup_date"] = date_pick;
    values["dropoff_date"] = date_drop;
    values["price"] = price;

    fetch("http://127.0.0.1:8000/reservation-create/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    navigate("/my-reservations");
  };

  return (
    <>
      {reservationId && <h4>Edit</h4>}
      <Form
        style={{ margin: "auto", width: "40%", border: "5px", padding: "10px" }}
        onSubmit={onSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="car" size="lg">
            Car
          </Form.Label>
          <Form.Select
            id="car"
            className="form-control"
            value={values.car}
            name="car"
            onChange={changeHandler}
          >
            {cars.map((x) => (
              <option key={x.id} value={x.name}>
                {x.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="city_pickup">City for the pickup</Form.Label>
          <Form.Select
            id="city_pickup"
            className="form-control"
            value={values.city}
            name="city"
            onChange={changeHandler}
          >
            {cities.map((x) => (
              <option key={x.id} value={x.name}>
                {x.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="station_pickup ">
            Station for the pickup
          </Form.Label>
          <Form.Select
            id="station_pickup"
            className="form-control"
            value={values.station}
            name="station"
            onChange={changeHandler}
          >
            {stations.map((x) => (
              <option key={x.id} value={x.name}>
                {x.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date for the pickup</Form.Label>
          <DateTimePicker value={date_pick} onChange={setDatePick} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="city_dropoff">City for the dropoff</Form.Label>
          <Form.Select
            id="city_dropoff"
            className="form-control"
            value={values.city1}
            name="city1"
            onChange={changeHandler}
            selected
          >
            {cities.map((x) => (
              <option key={x.id} value={x.name}>
                {x.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="station_dropoff">
            Station for the dropoff
          </Form.Label>
          <Form.Select
            id="station_dropoff"
            className="form-control"
            value={values.station1}
            name="station1"
            onChange={changeHandler}
          >
            {stations1.map((x) => (
              <option key={x.id} value={x.name}>
                {x.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date for the dropoff</Form.Label>
          <DateTimePicker value={date_drop} onChange={setDateDrop} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontSize: "30px", fontWeight: "bold" }}>
            Price : {price}$
          </Form.Label>
        </Form.Group>

        <Button className="btn btn-primary btn-block mb-1" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
