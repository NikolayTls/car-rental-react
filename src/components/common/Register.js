import { NavBtnLink } from "../header/NavBarElements";
import styles from "./login.module.css";

export const Register = () => {
  return (
    <div className = {styles['img-cover']}>
      <div
        style={{
          margin: "auto",
          width: "40%",
          border: "1px solid gray",
          padding: "10px",
          marginTop: "250px",
        }}
      >
        <div style={{ marginBottom: "50px", borderBottom: "1px solid gray" }}>
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <NavBtnLink to="/login">Login</NavBtnLink>
            </li>
            <li className="nav-item" role="presentation">
              <div>Register</div>
            </li>
          </ul>
        </div>
        <form>
          <div className="form-outline mb-4">
            <input type="text" id="registerUsername" className="form-control" />
            <label className="form-label" htmlFor="registerUsername">
              Username
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" />
            <label className="form-label" htmlFor="registerEmail">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerPassword"
              className="form-control"
            />
            <label className="form-label" htmlFor="registerPassword">
              Password
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerRepeatPassword"
              className="form-control"
            />
            <label className="form-label" htmlFor="registerRepeatPassword">
              Repeat password
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-3">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
