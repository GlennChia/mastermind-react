import React from "react";
import classes from "./index.module.css";
import { Controls } from "../../components/Controls";
import { Board } from "../../components/Board";

export const Game = () => {
  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <Board />
        <Controls />
        <Board />
      </header>
    </div>
  );
};
