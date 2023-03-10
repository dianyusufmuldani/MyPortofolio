import React from "react";
import "aos/dist/aos.css";

const ContactMe = () => {
  return (
    <>
      <div
        id="contactme"
        style={{ height: "100vh" }}
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div class="columns">
          <div class="column is-fullhd has-text-centered">
            <h1 class="title is-3">Contact Me</h1>
          </div>
          <br />
        </div>
        <div class="columns">
          <div class="column is-half has-text-centered">
            <h3 class="subtitle is-5">Carousel</h3>
          </div>
          <div class="column is-half">
            <h3 class="subtitle is-5">Carousel</h3>s
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
