import { Link } from "react-router-dom";
import { NavBtnLink } from "../header/NavBarElements";

export const Login = () => {
  return (
    <>
      <div
        style={{ margin: "auto", width: "40%", border: "5px", padding: "10px" }}
      >
        <div style = {{marginBottom: "50px" }}>
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
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
