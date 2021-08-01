import React from "react";
import classes from "./index.module.css";
import { Row } from "./Row";

export const MainBoard = ({ board }) => {
  return (
    <div className={classes.Overall}>
      <div className={classes.MainBoard}>
        {board.map((row, index) => (
          <Row key={index} row={row} rowNumber={index} />
        ))}
      </div>
    </div>
  );
};
