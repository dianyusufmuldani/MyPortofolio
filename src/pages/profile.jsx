import React from "react";
import ImageProfile from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div
      class="columns"
      style={{
        height: "100vh",
        alignItems: "center",
        marginTop: -56,
      }}
      id="introduction"
    >
      <div
        class="column is-half "
        style={{
          display: "flex",
          marginTop: 50,
          textAlign: "justify",
        }}
      >
        <div>
          <h1 class="title is-1">Hi, I'm Dian</h1>
          <h3 class="subtitle is-5">Frontend Developer</h3>
          <p style={{ width: "80%" }}>
            Junior frontend developer for the javascript programming language in
            the form of React Js and React Native.
          </p>
          <br />
          <button>Whatsapp</button>
        </div>
      </div>
      <div
        class="column is-half "
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <div style={{ width: 240, height: 250 }}>
          <img
            src={ImageProfile}
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
