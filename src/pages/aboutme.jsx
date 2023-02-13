import React from "react";
import ImageReact from "../assets/reactjs.png";
import ImageReactNative from "../assets/reactnative.png";
import "aos/dist/aos.css";

const Aboutme = () => {
  return (
    <>
      <div
        id="aboutme"
        style={{
          height: "100vh",
          alignItems: "center",
        }}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <div class="columns">
          <div class="column is-fullhd has-text-centered">
            <h1 class="title is-3">About Me</h1>
            <h3 class="subtitle is-6">My Introduction</h3>
          </div>
          <br />
        </div>
        <div class="columns">
          <div class="column is-half has-text-centered">
            <img
              width={500}
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"
              alt="Frontend Developer"
            />
          </div>
          <div class="column is-half">
            <br />
            <p style={{ textAlign: "justify" }}>
              I am a frontend website developer using react. I have experience
              in react js, next js, react native as well as basic backend in
              node js. The frameworks that I usually use are Material UI and
              Bulma.
            </p>
            <div>
              {/* <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Bulma"
                className="imagecenter"
                style={{ position: "static" }}
              /> */}
              <img src={ImageReact} width="80" alt="React Js" />
              <img src={ImageReactNative} width="86" alt="React Native" />
            </div>
            <br />
            <a href="https://drive.google.com/file/d/1LXs-_TE1twaQ9T3niaAGRVl3ZQ6AqQAw/view?usp=share_link">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
