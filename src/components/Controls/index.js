import React from "react";
import classes from "./index.module.css";

export const Controls = ({ setModel, models, answer }) => {
  return (
    <div className={classes.Overall}>
      <div className={classes.Title}>Mastermind</div>
      <div className={classes.Controls}>
        <div className={classes.Title}>AI Mode:</div>
        <select
          className={classes.Dropdown}
          onChange={(e) => setModel(e.target.value)}
        >
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <div className={classes.Title}>Answer:</div>
        <div className={classes.AnswerRow}>
          {answer.map((ans, index) => (
            <div
              key={index}
              className={[classes.Circle, classes[ans]].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
