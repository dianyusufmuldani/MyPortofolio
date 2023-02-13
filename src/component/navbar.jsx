import React from "react";
import { Link } from "react-scroll";

const NavbarApp = () => {
  return (
    <div className="position-sticky">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          {/* <a class="navbar-item"> */}
          {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
          <Link
            to="introduction"
            smooth={true}
            offset={-50}
            duration={500}
            class="navbar-item"
          >
            <button>HOME</button>
          </Link>
          {/* </a> */}
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <Link
                to="aboutme"
                smooth={true}
                offset={-50}
                duration={500}
                class="navbar-item"
              >
                About Me
              </Link>
              <Link
                to="skills"
                smooth={true}
                offset={-50}
                duration={500}
                class="navbar-item"
              >
                Skills
              </Link>
              <Link
                to="qualification"
                smooth={true}
                offset={-50}
                duration={500}
                class="navbar-item"
              >
                Qualification
              </Link>
              <Link
                to="portofolio"
                smooth={true}
                offset={-50}
                duration={500}
                class="navbar-item"
              >
                Portofolio
              </Link>

              <div class="buttons">
                {/* <a class="button is-primary" href="/">
                  <strong>Contact Me</strong>
                </a> */}
                {/* <a class="button is-light">Log in</a>  */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarApp;
