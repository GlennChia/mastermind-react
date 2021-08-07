import React from "react";
import classes from "./index.module.css";
import { Palette } from "./Palette";
import { MainBoard } from "./MainBoard";

export const Board = ({
  colors,
  board,
  setRow,
  currentIndex,
  lockRow,
  state,
  gameStart,
  winStatus,
}) => {
  return (
    <div className={classes.Overall}>
      <Palette colors={colors} />
      <MainBoard
        colors={colors}
        board={board}
        setRow={setRow}
        currentIndex={currentIndex}
        lockRow={lockRow}
        state={state}
        gameStart={gameStart}
        winStatus={winStatus}
      />
    </div>
  );
};
