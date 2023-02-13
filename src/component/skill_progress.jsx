import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Skill_progress = ({ value, text1 }) => {
  return (
    <div class="columns">
      <div class="column  ">
        <div>
          <h3 class="subtitle is-5">{text1}</h3>
        </div>
      </div>

      <div class="column is-four-fifths has-text-left">
        <div>
          <ProgressBar completed={value} customLabel=" " width="90%" />
        </div>
      </div>
    </div>
  );
};

export default Skill_progress;
