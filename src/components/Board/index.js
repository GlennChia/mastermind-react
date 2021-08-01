import React from "react";
import classes from "./index.module.css";
import { Palette } from "./Palette";
import { MainBoard } from "./MainBoard";

export const Board = ({ colors, board, setRow, currentIndex }) => {
  return (
    <div className={classes.Overall}>
      <Palette colors={colors} />
      <MainBoard board={board} setRow={setRow} currentIndex={currentIndex} />
    </div>
  );
};
