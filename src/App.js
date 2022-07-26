import { Footer } from "./components/footer/Footer";
import { CarList } from "./components/car-list/CarList";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Reservation } from "./components/reservation/Reservation";
import { MyReservations } from "./components/my-reservations/MyReservations";
import { Login } from "./components/common/Login";
import { Register } from "./components/common/Register"
import Container from "react-bootstrap/Container";
import Navbar from "./components/header/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <br/>

      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/:reservationId" element={<Reservation />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />

        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
