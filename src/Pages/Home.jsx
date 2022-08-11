/*
  module name: Home
  module wrote by: keziz mouayed
  email: m_keziz@estin.dz / mouayed0001@gmail.com
  date: 26/07/2022
  version: 1.0
  description: Home contains a list of components that are going to be rendered in the home page.
*/

import React from "react";
import HeaderSection from "../Components/Home/HeaderSection";
import NewProductsSection from "../Components/Home/NewProductsSection";
import WhyChoseUsSection from "../Components/Home/WhyChoseUsSection";
import Map from "../Components/Home/Map";
export default function Home() {
  return (
    <div>
      <HeaderSection />
      <section className="padding-y bg-light">
        <NewProductsSection />
        <WhyChoseUsSection />
        <Map />
      </section>
    </div>
  );
}
