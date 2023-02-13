import React from "react";
import NavbarApp from "../component/navbar";
import Aboutme from "./aboutme";
// import ContactMe from "./contactme";
import Portofolio from "./portofolio";
import Profile from "./profile";
import Qualification from "./qualification";
import Skills from "./skills";

const HomePages = () => {
  return (
    <div class="container" style={{ padding: 5 }}>
      <NavbarApp />
      <Profile />
      <br />
      <br />
      <Aboutme />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <Qualification />
      <br />
      <br />
      <Portofolio />
      <br />
      <br />
      {/* <ContactMe /> */}
    </div>
  );
};

export default HomePages;
