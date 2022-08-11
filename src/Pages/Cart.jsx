import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Cart() {
  const arr = [0, 0, 0];
  return (
    <section className="padding-y bg-light">
      <div className="container">
        <h3 className="card-title">{"Shopping Card"}</h3>
        <div className="row">
          <div className="col-md-9">
            {arr.map((item) => {
              return (
                <article className="card card-body mb-3">
                  <div className="row gy-3 align-items-center">
                    <div className="col-md-6">
                      <a href="#" className="itemside align-items-center">
                        <div className="aside">
                          <img
                            src="/images/product.jpg"
                            height="72"
                            width="72"
                            className="img-thumbnail img-sm"
                          />
                        </div>
                        <div className="info">
                          <p className="title">
                            T-shirts with multiple colors, for men and lady
                          </p>
                          <span className="text-muted">Clothes</span>
                        </div>
                      </a>
                    </div>
                    <div className="col-auto">
                      <div className="input-group input-spinner">
                        <button className="btn btn-light" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#999"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13H5v-2h14v2z"></path>
                          </svg>
                        </button>
                        <input type="text" className="form-control" value="1" />
                        <button className="btn btn-light" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#999"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <strong className="price"> $180.00 </strong>
                    </div>
                    <div className="col text-end">
                      <a href="#" className="btn btn-icon btn-light">
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {/*<!-- col.// -->*/}
          <aside className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary">Apply</button>
                </div>
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-end">$1403.97</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-end text-success">- $60.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>TAX:</dt>
                  <dd className="text-end text-danger">+ $14.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-end text-dark h5">$1357.97</dd>
                </dl>
                <hr />
                <p className="text-center mt-3">
                  <img src="/images/payments.png" height="24" />
                </p>
                <a href="#" className="btn btn-primary mb-2 w-100">
                  Checkout
                </a>
                <a href="#" className="btn btn-outline-primary w-100">
                  Installment
                </a>
              </div>
              {/*<!-- card-body.// -->*/}
            </div>
            {/*<!-- card.// -->*/}
          </aside>
          {/*<!-- col.// -->*/}
        </div>
      </div>
    </section>
  );
}
