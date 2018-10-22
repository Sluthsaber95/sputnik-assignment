import React from "react";
import { ButtonRounded, SlideMarkers } from "../../components";
import ImageHero from "./Image-Hero.png";
import IconArrow from "./Icon-Arrow.svg";

const BannerHero = () => {
  const style = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundImage: "url(" + ImageHero + ")",
  };
  return (
    <section
      style={style}
      className="banner banner__img--crop banner__img--crop::before"
    >
      <article className="banner--inner">
        <div className="banner--inner__container">
          <h3 className="banner--inner-title">Our Stories</h3>
          <h1 className="banner--inner-main">
            We provide childrens education in Central America{" "}
          </h1>
          <p className="banner--inner-paragraph">
            Our latest education and training event was held in Guatemala on April
            12th
          </p>
        <ButtonRounded text="Find out more" />
        <SlideMarkers />
        </div>
      </article>
      <img
        className="banner--inner-arrow"
        src={IconArrow}
        alt="hero banner carousel arrow icon right"
      />
    </section>
  );
};

export default BannerHero;
