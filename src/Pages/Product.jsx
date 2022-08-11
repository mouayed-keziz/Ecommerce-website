import React from "react";
import ProductDetails from "../Components/Product/ProductDetails";
import RatingAndComments from "../Components/Product/RatingAndComments";

export default function Product() {
  return (
    <div>
      <ProductDetails />
      <section className="padding-y bg-light">
        <RatingAndComments />
      </section>
    </div>
  );
}
