import React from "react";

export default function RegisterForm() {
  return (
    <div className="card mb-4 my-5 col-lg-5 col-sm-8 col-10">
      <article className="card-body">
        <h4 className="mb-4">Create account</h4>
        <form>
          <div className="row gx-3">
            <div className="col mb-4">
              <label className="form-label">First name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col mb-4">
              <label className="form-label">Last name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                  checked
                />
                <span className="form-check-label"> Buyer </span>
              </label>
            </div>
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span className="form-check-label"> Seller </span>
              </label>
            </div>
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span className="form-check-label"> Both </span>
              </label>
            </div>
          </div>
          <div className="row gx-3">
            <div className="col mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col mb-3">
              <label className="form-label">Country</label>
              <select className="form-select">
                <option value="none">Choose...</option>
                <option value="uz">Uzbekistan</option>
                <option value="ru">Russia</option>
                <option selected="">United States</option>
                <option value="in">India</option>
                <option value="af">Afganistan</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="" />
              <small className="form-text">We'll never share your email</small>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Phone</label>
              <div className="input-group">
                <select className="form-select" style={{ maxWidth: "120px" }}>
                  <option value="us">US +1</option>
                  <option value="uz">UZ +998</option>
                  <option value="ru">RU +72</option>
                </select>
                <input type="email" className="form-control" placeholder="" />
              </div>
            </div>
            <div className="col mb-3">
              <label className="form-label">Create password</label>
              <input className="form-control" type="password" />
            </div>
            <div className="col mb-3">
              <label className="form-label">Repeat password</label>
              <input className="form-control" type="password" />
            </div>
          </div>
          <div className="row mt-3 mb-4 align-items-center">
            <div className="col-auto">
              <button className="btn btn-primary" type="button">
                Register now
              </button>
            </div>
            <div className="col">
              <label className="form-check me-auto">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label">
                  I agree with Terms and Conditions
                </span>
              </label>
            </div>
          </div>
        </form>
        <hr />
        <p className="mb-0">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </article>
    </div>
  );
}
