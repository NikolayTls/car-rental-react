import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CarList } from "./components/car-list/CarList";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Reservation } from "./components/reservation/Reservation";
import { MyReservations } from "./components/my-reservations/MyReservations";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <Header />
      <br/>

      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/:reservationId" element={<Reservation />} />
          <Route path="/my-reservations" element={<MyReservations />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
