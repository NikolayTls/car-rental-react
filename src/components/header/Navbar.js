import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

import { FaCarAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <FaCarAlt size="3em" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/my-reservations" activeStyle>
            My Reservations
          </NavLink>
          <NavLink to="/cars" activeStyle>
            Cars
          </NavLink>

          <NavLink to="/reservation" activeStyle>
            Reservation
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to="/register">Register</NavBtnLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
