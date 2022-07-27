import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faCcVisa,
  faCcAmex,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <footer
      className="section-footer bg-white border-top p-3"
      style={{
        marginTop: "2rem",
      }}
    >
      <div className="container">
        <section className="footer-main py-5">
          <div className="row">
            <aside className="col-md-12 col-lg-3 col-xl-3">
              <article className="me-lg-4">
                <img src="/logo192.png" className="logo-footer" />
                <p className="mt-3">
                  <br />
                </p>
              </article>
            </aside>
            <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
              <h6 className="title">Boutique</h6>
              <ul className="list-menu mb-3">
                <li>
                  <a href="/">A propos de nous </a>
                </li>
                <li>
                  <a href="/">Ou nous trouver</a>
                </li>
                <li>
                  <a href="/">Categories</a>
                </li>
                <li>
                  <a href="/">Qui somme nous</a>
                </li>
              </ul>
            </aside>
            <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
              <h6 className="title">Information</h6>
              <ul className="list-menu mb-3">
                <li>
                  <a href="/">Aide</a>
                </li>
                <li>
                  <a href="/">Le payement</a>
                </li>
                <li>
                  <a href="/">Livraison</a>
                </li>
              </ul>
            </aside>
            <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
              <h6 className="title">Mes liens</h6>
              <ul className="list-menu mb-3">
                <li>
                  <a href="/"> Mon compte </a>
                </li>
                <li>
                  <a href="/"> Mes commandes </a>
                </li>
                <li>
                  <a href="/"> Mon panier </a>
                </li>
              </ul>
            </aside>
            <aside className="col-6 col-md-3 col-lg-3 col-xl-3">
              <h6 className="title">Nous contacter</h6>
              <p className="h5 mb-0">(213) 000000000 </p>
              <small className="text-muted">
                (De dimache a jeudi - 9h a 20h)
              </small>
              <div className="mt-3">
                <a
                  className="btn btn-icon btn-light"
                  title="Facebook"
                  target="_blank"
                  href="/"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="btn btn-icon btn-light"
                  title="Instagram"
                  target="_blank"
                  href="/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="btn btn-icon btn-light"
                  title="Youtube"
                  target="_blank"
                  href="/"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  className="btn btn-icon btn-light"
                  title="Twitter"
                  target="_blank"
                  href="/"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </aside>
          </div>
        </section>
        <section className="footer-bottom d-flex justify-content-between border-top">
          <div>
            <FontAwesomeIcon
              style={{ marginRight: "0.3rem", zoom: "1.3" }}
              icon={faCcVisa}
            />
            <FontAwesomeIcon
              style={{ marginRight: "0.3rem", zoom: "1.3" }}
              icon={faCcAmex}
            />
            <FontAwesomeIcon
              style={{ marginRight: "0.3rem", zoom: "1.3" }}
              icon={faCcMastercard}
            />
            <FontAwesomeIcon
              style={{ marginRight: "0.3rem", zoom: "1.3" }}
              icon={faCcPaypal}
            />
          </div>
          <p>RepublicOfComputers2022</p>
        </section>
      </div>
    </footer>
  );
}
