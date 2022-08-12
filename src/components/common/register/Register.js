import { NavBtnLink } from "../../header/HeaderElements";
import styles from "./register.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: userData[e.target.name].length < bound,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userData.password !== userData.repassword) {

      return;
    }

    delete userData.repassword;

    fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    navigate('/');
  };

  const isFormValid = !Object.values(errors).some((x) => x);
  const emptyFields = Object.values(userData).every(x => x.length > 6);

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
              <NavBtnLink to="/login">Login</NavBtnLink>
            </li>
            <li className="nav-item" role="presentation">
              <div>Register</div>
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="form-outline mb-4">
            <input
              name="username"
              type="text"
              id="registerUsername"
              className="form-control"
              onChange={onChangeHandler}
              onBlur={(e) => minLength(e, 4)}
            />
            {errors.username ? (
              <h3 style={{ fontSize: "16px" }}>
                Username should be at least 4 characters long
              </h3>
            ) : (
              <label
                className={styles["input-label"]}
                htmlFor="registerUsername"
              >
                Username
              </label>
            )}
          </div>

          <div className="form-outline mb-4">
            <input
              name="email"
              type="email"
              id="registerEmail"
              className="form-control"
              onChange={onChangeHandler}
              onBlur={(e) => minLength(e, 6)}
            />
            {errors.email ? (
              <h3 style={{ fontSize: "16px" }}>
                Email should be at least 6 characters long
              </h3>
            ) : (
              <label className={styles["input-label"]} htmlFor="registerEmail">
                Email
              </label>
            )}
          </div>

          <div className="form-outline mb-4">
            <input
              name="password"
              type="password"
              id="registerPassword"
              className="form-control"
              onChange={onChangeHandler}
              onBlur={(e) => minLength(e, 6)}
            />
            {errors.password ? (
              <h3 style={{ fontSize: "16px" }}>
                The password should be at least 6 characters long
              </h3>
            ) : (
              <label
                className={styles["input-label"]}
                htmlFor="registerPassword"
              >
                Password
              </label>
            )}
          </div>

          <div className="form-outline mb-4">
            <input
              name="repassword"
              type="password"
              id="registerRepeatPassword"
              className="form-control"
              onChange={onChangeHandler}
              onBlur={(e) => minLength(e, 6)}
            />
            {errors.repassword ? (
              <h3 style={{ fontSize: "16px" }}>
                The password should be at least 6 characters long
              </h3>
            ) : (
              <label
                className={styles["input-label"]}
                htmlFor="registerRepeatPassword"
              >
                Repeat password
              </label>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className={styles["register-btn"]}
              disabled={!isFormValid || !emptyFields}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
