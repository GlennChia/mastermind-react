import React from "react";
import classes from "./index.module.css";
import tick from "../../../assets/tick.png";

export const Palette = ({ colors }) => {
  return (
    <div className={classes.Overall}>
      <div className={classes.Palette}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={[classes.Circle, classes[color]].join(" ")}
          />
        ))}
      </div>
      <div className={classes.ButtonWrap}>
        <button className={[classes.Circle, classes.ButtonGreen].join(" ")}>
          <img src={tick} className={classes.Image} />
        </button>
      </div>
    </div>
  );
};
