import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article>
          <h1>Thang Cong Tu is the Best</h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book
          </p>
          <button className="btn">Start Now</button>
        </article>

        <article className="hero-image">
          <img src={phoneImg} className="phone-img" alt="phone Image"></img>
        </article>
      </div>
    </section>
  );
};

export default Hero;
