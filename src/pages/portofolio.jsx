import React from "react";
import CarouselApp from "../component/carousel";
import "aos/dist/aos.css";

const Portofolio = () => {
  return (
    <>
      <div
        id="portofolio"
        style={{ height: "100vh" }}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <div class="columns">
          <div class="column is-fullhd has-text-centered">
            <h1 class="title is-3">PORTOFOLIO</h1>
          </div>
        </div>
        <br />
        {/* <div class="columns"> */}
        {/* <div class="column is-fullhd has-text-centered">
            <h3 class="subtitle is-5">Carousel</h3> */}
        <CarouselApp />
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Portofolio;
