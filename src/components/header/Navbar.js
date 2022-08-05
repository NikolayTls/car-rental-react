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

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


const Navbar = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            <FaCarAlt size="3em" />
          </NavLink>
        </NavMenu>
        <NavMenu>
          {user && (
            <p>
              Hello, {user.username}
            </p>
          )}
          <NavLink to="/">Home</NavLink>
          {user && (
            <NavLink to="/my-reservations" activeStyle>
              My Reservations
            </NavLink>
          )}
          <NavLink to="/cars" activeStyle>
            Cars
          </NavLink>

          {user && (
            <NavLink to="/reservation" activeStyle>
              Reservation
            </NavLink>
          )}
          {/* Second Nav */}
          {!user && (
            <NavBtn>
              <NavBtnLink to="/register">Register</NavBtnLink>
            </NavBtn>
          )}
        </NavMenu>
        <NavBtn>
          {!user ? (
            <NavBtnLink to="/login">Login</NavBtnLink>
          ) : (
            <button onClick={logoutUser}>Logout</button>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
