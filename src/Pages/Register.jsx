import React from "react";
import RegisterForm from "../Components/Register/RegisterForm";
import { UndrawMobileApps } from "react-undraw-illustrations";

export default function Register() {
  return (
    <section className="padding-y bg-light">
      <div className="d-flex justify-content-around">
        <div className="mb-4 my-5 col-lg-4 d-none d-lg-block">
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "2.5rem" }}
          >
            <UndrawMobileApps
              primaryColor="#0d6efd"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
