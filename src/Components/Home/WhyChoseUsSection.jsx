import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Strategy() {
  return (
    <section class="padding-y bg-light" style={{ marginTop: "1.2rem" }}>
      <div className="container">
        <h4 style={{ marginBottom: "1.2rem" }} className="card-title">
          Pourquoi nous choisirs
        </h4>
      </div>
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-4 col-md-4">
            <article className="card content-body">
              <div className="text-center mx-lg-4">
                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <div className="pt-3">
                  <h5 className="title">Qualité</h5>
                  <p className="mb-0">
                    On propose des ordinateurs de haute qualité (neufs/deja
                    utilisés).
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-4">
            <article className="card content-body">
              <div className="text-center mx-lg-4">
                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <div className="pt-3">
                  <h5 className="title">Meilleurs prix</h5>
                  <p className="mb-0">Les Meilleurs prix du marché Algerien.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-4">
            <article className="card content-body">
              <div className="text-center mx-lg-4">
                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                  <FontAwesomeIcon icon={faBox} />
                </span>
                <div className="pt-3">
                  <h5 className="title">Livraison</h5>
                  <p className="mb-0">
                    Service de livraison rapide et assuré jusqu'a chez vous.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
