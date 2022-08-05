import { Link } from "react-router-dom";
import { NavBtnLink } from "../header/NavBarElements";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "./login.module.css";

export const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  let { loginUser } = useContext(AuthContext);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(values);
  };

  return (
    <div className={styles["img-cover"]}>
      <div
        style={{
          width: "40%",
          border: "3px solid black",
          padding: "8px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
        }}
      >
        <div style={{ marginBottom: "50px", marginTop: "15px" }}>
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <div>Login</div>
            </li>
            <li className="nav-item" role="presentation">
              <NavBtnLink to="/register">Register</NavBtnLink>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={onSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={changeHandler}
                />
                <label
                  className="form-label"
                  htmlFor="name"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={changeHandler}
                />
                <label
                  className="form-label"
                  htmlFor="password"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Password
                </label>
              </div>

              <div style = {{display: "flex", justifyContent: "center"}}>
                <button
                  type="submit"
                  className= {styles['login-btn']}
                >
                  Sign in
                </button>
              </div>

              <div style={{ width: "20%" }} className="text-center">
                <div style={{ color: "white", fontWeight: "bold" }}>
                  Not a member?{" "}
                  <div style={{ display: "inline-block" }}>
                    <Link to="/register">
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        Register
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
