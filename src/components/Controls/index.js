import React from "react";
import classes from "./index.module.css";

export const Controls = () => {
  return (
    <div className={classes.Overall}>
      <div className={classes.Title}>Mastermind</div>
      <div className={classes.Controls}>
        <div className={classes.Title}>AI Mode:</div>
        <div className={classes.Title}>Answer:</div>
      </div>
    </div>
  );
};
