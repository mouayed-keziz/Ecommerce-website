import React from "react";
//import fontawesomeicon and dot and comment and shopping-basket and star and lock and truck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShoppingBasket,
  faStar,
  faLock,
  faTruck,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
export default function ProductDetails() {
  return (
    <section className="padding-y bg-white shadow-sm">
      <div className="container">
        <div className="row">
          <aside className="col-lg-5">
            <article className="gallery-wrap">
              <a href="#" className="img-big-wrap">
                <img src="/images/product.jpg" className="rounded" />
              </a>
              <div className="thumbs-wrap">
                <a href="#" className="item-thumb">
                  <img src="/images/product.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  <img src="/images/product.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  <img src="/images/product.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  <img src="/images/product.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  <img src="/images/product.jpg" />
                </a>
              </div>
            </article>
          </aside>
          <div className="col-lg-4">
            <article>
              <p className="title h4 mb-1">
                Simple Modern Minimalist Nordic Dining Chair for Home or Kitchen
              </p>
              <div className="rating-wrap mb-2">
                <ul className="rating-stars">
                  <li style={{ width: "80%" }} className="stars-active">
                    <img
                      src="bootstrap5-ecommerce/images/misc/stars-active.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img height="520" src="/images/starts-disable.svg" alt="" />
                  </li>
                </ul>
                <b className="label-rating text-warning"> 4.5</b>•
                <span className="label-rating text-muted">
                  <FontAwesomeIcon icon={faComment} /> 34 reviews
                </span>
                •
                <span className="label-rating text-muted">
                  <FontAwesomeIcon icon={faShoppingBasket} /> 154 orders
                </span>
              </div>
              <p className="text-success">
                <FontAwesomeIcon icon={faCheck} /> in Stock
              </p>
              <hr />
              <div className="mb-4">
                <div className="text-muted mb-2">Select condition:</div>
                <div>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_44" />
                    <span className="btn btn-light"> Brand new </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_44" />
                    <span className="btn btn-light"> Used </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_44" />
                    <span className="btn btn-light"> Refurbished </span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-muted mb-2">Select color:</div>
                <div>
                  <label className="checkbox-btn">
                    <input type="radio" checked name="choose_55" />
                    <span className="btn btn-light"> Blue </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_55" />
                    <span className="btn btn-light"> Green </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_55" />
                    <span className="btn btn-light"> Purple </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="radio" name="choose_55" />
                    <span className="btn btn-light"> Brown </span>
                  </label>
                </div>
              </div>
              <ul className="list-dots mb-4">
                <li>Materials: Leather</li>
                <li>Size: 23 inch x 31 inch</li>
                <li>Weight: 1200 gramm</li>
                <li>Color: Brown</li>
              </ul>
            </article>
          </div>
          <aside className="col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="mb-3">
                  <var className="price h5">$815.00</var>
                  <span className="text-muted">/per kg</span>
                </div>
                <form>
                  <div className="d-flex align-items-center mb-3">
                    <div className="input-group" style={{ maxWidth: "140px" }}>
                      <button className="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z" />
                        </svg>
                      </button>
                      <input
                        className="form-control text-center"
                        readonly
                        placeholder=""
                        value="14"
                      />
                      <button className="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                    <span className="p-2"> Kg </span>
                  </div>
                </form>
                <div className="mb-4">
                  <a href="#" className="btn btn-primary w-100 mb-2">
                    Add to cart
                  </a>
                  <a href="#" className="btn btn-warning w-100 mb-2">
                    Buy now
                  </a>
                  <a href="#" className="btn btn-light w-100">
                    {" "}
                    Add to wishlist{" "}
                  </a>
                </div>
                <ul className="list-icon">
                  <li>
                    <FontAwesomeIcon icon={faTruck} /> Worldwide shipping
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLock} /> Secure payment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} /> 2 Years full waranty
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
