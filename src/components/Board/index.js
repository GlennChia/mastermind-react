import React from "react";
import classes from "./index.module.css";
import { Palette } from "./Palette";
import { MainBoard } from "./MainBoard";

export const Board = ({ colors }) => {
  return (
    <div className={classes.Overall}>
      <Palette colors={colors} />
      <MainBoard />
    </div>
  );
};
