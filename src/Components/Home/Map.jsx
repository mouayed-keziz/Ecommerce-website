import React from "react";

export default function Map() {
  return (
    <div style={{ marginTop: "1.2rem" }}>
      <div className="container">
        <div style={{ marginBottom: "1.2rem", zoom: "1.2" }}>
          <h4 className="card-title">Ou nous trouver ?</h4>
          <h6 className="card-title">Bab Ezzouar, ALGER, ALGERIE</h6>
          <h6 className="card-title">36.7178093873184, 3.1880282680559247</h6>
        </div>
        <div className="d-flex  justify-content-center">
          <iframe
            title="pcprodz_shop_map"
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12792.861558165388!2d3.1869232!3d36.717388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x721e027c34b6a0cf!2sREPUBLIC%20OF%20COMPUTER!5e0!3m2!1sfr!2sdz!4v1658099261860!5m2!1sfr!2sdz"
            width="100%"
            height="320"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
