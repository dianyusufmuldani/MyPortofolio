import React from "react";
import ImageTransevilz from "../assets/transevilz.jpg";
import ImageTransevilz2 from "../assets/transevilz2.jpg";
import ImageSplitBill from "../assets/splitbill.jpg";
import ImageSplitBill2 from "../assets/splitbill2.jpg";
import ImagePortofolioWeb from "../assets/portofolio.jpg";
import { Link } from "react-scroll";
const CarouselApp = () => {
  return (
    <div class="columns" style={{ textAlign: "center" }}>
      <div class="column is-one-third">
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src={ImagePortofolioWeb}
            style={{ height: 200 }}
            alt="Web Portofolio"
          />
        </div>
        <h1 class="title is-5" style={{ margin: 10 }}>
          Portofolio Website
        </h1>
        <h3>Role:Frontend Web Developer with React</h3>
        <p>
          This is a website creation project using Reactjs as a frontend and
          Material UI for the CSS framework. Serves as a portfolio.
        </p>
        <Link to="introduction" smooth={true} offset={-50} duration={500}>
          <button>Check Application</button>
        </Link>
      </div>
      <div class="column ">
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src={ImageTransevilz}
            style={{ height: 200 }}
            alt="Trans Evilz"
          />
          <img
            src={ImageTransevilz2}
            style={{ height: 200 }}
            alt="Trans Evilz 2"
          />
        </div>
        <h1 class="title is-5" style={{ margin: 10 }}>
          Trans Evilz Mobile
        </h1>
        <h3>Role:Frontend Mobile Developer with React Native</h3>
        <p>
          Trans Evilz is a mobile application which is a mini project and
          features registration, account login, history and transfer services
        </p>
        <a href="https://drive.google.com/file/d/1pQs40quxDxPVWKejetlKoq0B1K6evIV7/view?usp=share_link">
          <button>Check Application</button>
        </a>
      </div>
      <div class="column ">
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img src={ImageSplitBill} style={{ height: 200 }} alt="Splitbill" />
          <img
            src={ImageSplitBill2}
            style={{ height: 200 }}
            alt="Splitbill 2"
          />
        </div>
        <h1 class="title is-5" style={{ margin: 10 }}>
          Splitbill Mobile
        </h1>
        <h3>Role:Frontend Mobile Developer with React Native</h3>
        <p>
          Split Bill is a react native application for mobile android which has
          the function to add or delete a list of food orders.
        </p>
        <button>Check Application</button>
      </div>
    </div>
  );
};

export default CarouselApp;
