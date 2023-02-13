import Aos from "aos";
import React, { useEffect } from "react";
import NavbarApp from "../component/navbar";
import Aboutme from "./aboutme";
// import ContactMe from "./contactme";
import Portofolio from "./portofolio";
import Profile from "./profile";
import Qualification from "./qualification";
import Skills from "./skills";

const HomePages = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
      <Portofolio />
      <br />
      <br />
      {/* <ContactMe /> */}
    </div>
  );
};

export default HomePages;
