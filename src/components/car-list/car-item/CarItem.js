import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import { CarItemModal } from "./CarItemModal"
import { useState } from "react";
import { Link } from "react-router-dom";

export const CarItem = ({cars}) => {

    const [modalShow,setModalShow] = useState(false);

  return (
    <Col style={{marginBottom:"25px"}}>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src= {cars.imageUrl}
        />
        <Card.Body>
          <Card.Title>{cars.name}</Card.Title>
          <Card.Text>
            {cars.description}
          </Card.Text>
          <Button variant="primary" onClick = {()=> setModalShow(true)}>Info</Button>
          <CarItemModal
          show = {modalShow}
          onHide = {()=> setModalShow(false)}
          cars = {cars}
          />
          <Link to = "/reservation"><Button variant="outline-primary" style = {{margin: "10px"}}>Reserve</Button></Link>
          <Card.Text>Now from <div style={{fontWeight:"bold", fontSize:"25px"}}>{cars.category.price_per_day}$/Day</div></Card.Text>
        </Card.Body>
      </Card>

    </Col>
  );
};
