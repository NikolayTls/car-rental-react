import { CarItem } from "./car-item/CarItem";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { useEffect, useState } from "react";


export const CarList = () => {
    const [cars,setCars] = useState([]);


    useEffect(() =>{
        fetch("http://127.0.0.1:8000")
        .then(res => res.json())
        .then(result => 
            setCars(result))
    },[]);

  console.log(cars);
    
  return (
    <Container>
      <Row>
        {cars.map(x => <CarItem key={x.id} cars = {x} />)}
      </Row>
    </Container>
  );
};
