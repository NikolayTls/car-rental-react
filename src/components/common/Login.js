import { Link } from "react-router-dom";
import { NavBtnLink } from "../header/NavBarElements";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

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
    <>
      <div
        style={{
          margin: "auto",
          width: "40%",
          border: "1px solid gray",
          padding: "10px",
        }}
      >
        <div style={{ marginBottom: "50px", borderBottom: "1px solid gray" }}>
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
                <label className="form-label" htmlFor="name">
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
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>

              <div style={{ width: "20%" }} className="text-center">
                <div>
                  Not a member?{" "}
                  <div style={{ display: "inline-block" }}>
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
