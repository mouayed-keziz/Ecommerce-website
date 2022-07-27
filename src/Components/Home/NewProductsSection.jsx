/*
  module name: NewProductsSection
  module wrote by: keziz mouayed
  email: m_keziz@estin.dz / mouayed0001@gmail.com
  date: 26/07/2022
  version: 1.0
  description: NewProductsSection contains a list of ProductCard to be displayed as a section that has new products
*/

import React from "react";
import ProductCard from "./ProductCard";

export default function NewProductsSection() {
  const newProducts = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <section class="padding-y bg-light">
      <div className="container">
        <div className="row">
          {newProducts.map((product) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </section>
  );
}
