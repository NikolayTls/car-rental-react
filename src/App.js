import { Footer } from "./components/footer/Footer";
import { CarList } from "./components/car-list/CarList";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Reservation } from "./components/reservation/Reservation";
import { MyReservations } from "./components/my-reservations/MyReservations";
import { Login } from "./components/common/Login";
import { Register } from "./components/common/Register";
import { AuthProvider } from "./context/AuthContext";

import PrivateRoute from "./utils/PrivateRoute";

import { Header } from "./components/header/Header";

function App() {
  return (
    <AuthProvider>
      <Header />

      <main
        style={{ marginTop: "65px", marginLeft: "20px", marginRight: "20px"}}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route
            path="/reservation"
            element={
              <PrivateRoute>
                <Reservation />
              </PrivateRoute>
            }
          />
          <Route
            path="/reservation/edit/:reservationId"
            element={<Reservation />}
          />
          <Route
            path="/my-reservations"
            element={
              <PrivateRoute>
                <MyReservations />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <div style = {{marginTop:"250px"}}>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
