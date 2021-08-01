import React from "react";
import classes from "./index.module.css";
import { Row } from "./Row";

export const MainBoard = () => {
  return (
    <div className={classes.Overall}>
      <div className={classes.MainBoard}>
        <Row />
      </div>
    </div>
  );
};
