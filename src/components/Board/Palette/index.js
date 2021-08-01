import React from "react";
import classes from "./index.module.css";

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
    </div>
  );
};
