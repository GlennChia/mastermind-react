import React from "react";
import classes from "./index.module.css";
import { Palette } from "./Palette";

export const Board = ({ colors }) => {
  return (
    <div className={classes.Overall}>
      <Palette colors={colors} />
      <div className={classes.MainBoard} />
    </div>
  );
};
