import { NavBtnLink } from "../../header/HeaderElements";
import { useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
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
  const emptyFields = values.username.length > 4 && values.password.length > 6;
  console.log(emptyFields);

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(values);
  };

  return (
    <div className={styles["img-cover"]}>
      <div className={styles["form-container"]}>
        <div className={styles["nav-pills"]}>
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
              <div className="form-outline mb-5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  onChange={changeHandler}
                />
                <label htmlFor="username" className={styles["input-label"]}>
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={changeHandler}
                />
                <label htmlFor="password" className={styles["input-label"]}>
                  Password
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  className={styles["login-btn"]}
                  disabled={!emptyFields}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
