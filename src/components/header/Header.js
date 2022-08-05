import styles from "./header.module.css";
import { FaCarAlt } from "react-icons/fa";
import { FaBookOpen, FaBookReader, FaHome } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {NavLink , NavBtnLink} from './HeaderElements'

export const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);


  return (
    <div className={styles.header}>
      <div className={styles["left-section"]}>
        <div className={styles["car-logo"]}>
          <NavLink to="/"></NavLink>
        </div>
      </div>

      <div className={styles["middle-section"]}>
        <NavLink to="/">
          <span className={styles.span}>Home</span>
          <FaHome size="1em" />
        </NavLink>
        <NavLink to="/cars">
          <span className={styles.span}>Cars</span>

          <FaCarAlt size="1em" />
        </NavLink>
        {user && (
          <NavLink to="/my-reservations">
            <span className={styles.span}>My reservations</span>
            <FaBookReader size="1em" />
          </NavLink>
        )}
        {user && (
          <NavLink to="/reservation">
            <span className={styles.span}>Reserve</span>
            <FaBookOpen size="1em" />
          </NavLink>
        )}
      </div>

      <div className={styles["right-section"]}>
        {!user && <NavBtnLink to="/login">Login</NavBtnLink>}
        {!user && <NavBtnLink to="/register">Register</NavBtnLink>}
        {user && <span className={styles['hello-user']}>Hello, {user.username}</span>}
        {user && <button onClick = {logoutUser} className = {styles['logout-btn']}>Logout</button>}
      </div>
    </div>
  );
};
