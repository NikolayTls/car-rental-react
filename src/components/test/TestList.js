import { useEffect, useState } from "react";

import { TestCar } from "./TestCar";

export const TestList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000")
      .then((res) => res.json())
      .then((result) => setCars(result));
  }, []);

  console.log(cars);
  return (
    <div>
      {cars.map((x) => (
        <TestCar key={x.id} cars={x} />
      ))}
    </div>
  );
};
