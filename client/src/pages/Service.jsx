import React from "react";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();
  //   console.log(services);
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services information"
                  width="500px"
                  height="auto"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{price}</p>
                  <p>{service}</p>
                </div>
                <h2>{provider}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
