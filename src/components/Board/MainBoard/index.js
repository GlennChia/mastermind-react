import React from "react";
import classes from "./index.module.css";
import { Row } from "./Row";

export const MainBoard = ({
  board,
  setRow,
  currentIndex,
  lockRow,
  state,
  gameStart,
  winStatus,
  colors,
}) => {
  return (
    <div className={classes.Overall}>
      <div className={classes.MainBoard}>
        {board.map((row, index) => (
          <Row
            key={index}
            row={row}
            rowNumber={index}
            setRow={setRow}
            currentIndex={currentIndex}
            lockRow={lockRow}
            state={state[index]}
            gameStart={gameStart}
            winStatus={winStatus}
            colors={colors}
          />
        ))}
      </div>
    </div>
  );
};
