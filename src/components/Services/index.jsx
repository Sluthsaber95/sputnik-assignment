import React from "react";

import { ButtonRectangle } from "../../components";
import ImageServices from "./Image-Services.png"

const Services = () => (
  <section class="services">
    <article class="services__content">
      <article class="services__content--inner">
        <h3 className="services__title">Our Stories</h3>
        <h1 className="services__main">Our pledge to quality</h1>
        <p className="services__paragraph">
          We provide education support in countries where the infrastructure is
          not as established as elsewhere. We seize opportunities and stay strong,
          even if it gets difficult.
        </p>
      <ButtonRectangle text="All Services" />
      </article>
    </article>
    <img className="services-img--inner" src={ImageServices} alt="Child at school"/>
  </section>
);

export default Services;
