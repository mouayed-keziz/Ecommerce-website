import React from "react";
//import font awesome and fa-user
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
export default function LoginForm() {
  return (
    <div className="card mb-4 my-5 col-lg-4 col-sm-6 col-10">
      <div className="card-body">
        <h4 className="mb-4">Sign in</h4>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="d-flex mb-3">
            <label className="form-check me-auto">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked
              />
              <span className="form-check-label"> Remember </span>
            </label>
            <a href="#" className="text-decoration-none">
              Forgot password
            </a>
          </div>
          <button className="btn btn-primary w-100" type="button">
            Sign in
          </button>
          <p className="text-divider my-4">or access via</p>
          <a href="#" className="btn btn-light w-100">
            <img src="/images/google.svg" height="20" width="20" />
            <span className="ms-1 align-middle">Continue with Google</span>
          </a>
          <p className="mb-0 mt-4 text-center">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
