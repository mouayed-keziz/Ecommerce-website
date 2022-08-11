import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import { UndrawWebDevices } from "react-undraw-illustrations";

export default function Login() {
  return (
    <section className="padding-y bg-light">
      <div className="d-flex justify-content-around">
        <div className="mb-4 my-5 col-lg-5 d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <UndrawWebDevices
              primaryColor="#0d6efd"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
