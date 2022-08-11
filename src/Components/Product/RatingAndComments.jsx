import React from "react";
//import fontawesomeicon and thumb-up and thumb-down and ellipsis-v
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
export default function RatingAndComments() {
  const arr = [0, 0, 0];
  return (
    <section className="padding-y bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/*<!-- =================== COMPONENT REVIEW ====================== -->*/}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <hr />
                {arr.map((item, index) => {
                  return (
                    <blockquote className="border-bottom">
                      <div className="float-lg-end d-flex mb-3">
                        <div className="btn-group d-inline-flex me-2">
                          <button
                            className="btn btn-light btn-sm float-end"
                            data-bs-toggle="tooltip"
                            data-bs-title="Like"
                          >
                            <FontAwesomeIcon icon={faThumbsUp} />
                          </button>
                          <button
                            className="btn btn-light btn-sm float-end"
                            data-bs-toggle="tooltip"
                            data-bs-title="Dislike"
                          >
                            <FontAwesomeIcon icon={faThumbsDown} />
                          </button>
                        </div>
                        <button className="btn btn-light btn-sm float-end">
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                      </div>
                      <div className="icontext">
                        <img
                          src="images/avatar.jpg"
                          className="img-xs icon rounded-circle"
                        />
                        <div className="text">
                          <h6 className="mb-0">Michael Jonathan</h6>
                          <div className="rating-wrap">
                            <ul className="rating-stars">
                              <li
                                style={{ width: "80%" }}
                                className="stars-active"
                              >
                                <img src="/images/stars-active.svg" alt="" />
                              </li>
                              <li>
                                <img src="/images/starts-disable.svg" alt="" />
                              </li>
                            </ul>
                            {"•"}
                            <small className="label-rating text-muted">
                              Purchased on Wed, May 12
                            </small>
                          </div>
                        </div>
                      </div>
                      {/*<!-- icontext.// -->*/}
                      <div className="mt-3">
                        <p>
                          It used to be great, finding almost every song, but
                          now i dont know what happened (they might be hacked
                          even) that it can not find any song and it just makes
                          up a different song to thats all and all the best
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi
                        </p>
                      </div>
                    </blockquote>
                  );
                })}
              </div>
            </div>
            {/*<!-- =================== COMPONENT REVIEW .// ================== -->*/}
          </div>
          {/*<!-- col.// -->*/}
          <div className="col-lg-4">
            {/*<!-- =================== COMPONENT SELLER ====================== -->*/}
            <article className="card">
              <div className="card-body">
                <a href="#" className="btn w-100 btn-primary-light">
                  Write review
                </a>
                <div className="rating-wrap mt-3">
                  <ul className="rating-stars stars-lg">
                    <li style={{ width: "80%" }} className="stars-active">
                      <img src="/images/stars-active.svg" alt="" />
                    </li>
                    <li>
                      <img
                        height="520"
                        src="/images/starts-disable.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <b className="label-rating text-lg"> 4.6 out of 5 </b>
                </div>
                {/*<!-- rating-wrap.// -->*/}
                <p className="mt-1 text-muted">320 reviews</p>
                <table className="table table-borderless table-sm">
                  <tr valign="middle">
                    <td width="50">5 star</td>
                    <td>
                      <div
                        className="progress"
                        style={{ height: "15px", backgroundColor: "#e9ecef" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="25"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      {/*<!-- progress .// -->*/}
                    </td>
                    <td width="50">95 %</td>
                  </tr>
                  <tr valign="middle">
                    <td>4 star</td>
                    <td>
                      <div
                        className="progress"
                        style={{
                          height: "15px",
                          backgroundColor: "#e9ecef",
                        }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      {/*<!-- progress .// -->*/}
                    </td>
                    <td>80 %</td>
                  </tr>
                  <tr valign="middle">
                    <td>3 star</td>
                    <td>
                      <div
                        className="progress"
                        style={{ height: "15px", backgroundColor: "#e9ecef" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="35"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      {/*<!-- progress .// -->*/}
                    </td>
                    <td>35 %</td>
                  </tr>
                  <tr valign="middle">
                    <td>2 star</td>
                    <td>
                      <div
                        className="progress"
                        style={{ height: "15px", backgroundColor: "#e9ecef" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "13%" }}
                          aria-valuenow="13"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      {/*<!-- progress .// -->*/}
                    </td>
                    <td>13 %</td>
                  </tr>
                  <tr valign="middle">
                    <td>1 star</td>
                    <td>
                      <div
                        className="progress"
                        style={{ height: "15px", backgroundColor: "#e9ecef" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow="5"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      {/*<!-- progress .// -->*/}
                    </td>
                    <td>15 %</td>
                  </tr>
                </table>
              </div>
            </article>
            {/*<!-- =================== COMPONENT SELLER .// ================== -->*/}
          </div>
          {/*<!-- col.// -->*/}
        </div>
        {/*<!-- row .// -->*/}
      </div>
      {/*<!-- container .// -->*/}
    </section>
  );
}
