import React from "react";
import Skill_progress from "../component/skill_progress";

const Skills = () => {
  return (
    <>
      <div id="skills" style={{ height: "100vh", marginBottom: 250 }}>
        <div class="columns">
          <div class="column is-fullhd has-text-centered">
            <h1 class="title is-3">SKILLS</h1>
          </div>
        </div>
        <br />
        <Skill_progress value={87} text1={"HTML"} />
        <Skill_progress value={78} text1={"CSS"} />
        <Skill_progress value={86} text1={"React Js"} />
        <Skill_progress value={80} text1={"Next Js"} />
        <Skill_progress value={85} text1={"React Native"} />
        <Skill_progress value={60} text1={"Node Js"} />
        <Skill_progress value={78} text1={"Material Ui"} />
        <Skill_progress value={78} text1={"Bulma CSS"} />
      </div>
    </>
  );
};

export default Skills;
