import React, { useState } from "react";
import classes from "./index.module.css";
import { Controls } from "../../components/Controls";
import { Board } from "../../components/Board";

const MODELS = ["Naive", "Deep Q Learning", "Q Learning"];

export const Game = () => {
  const [model, setModel] = useState(MODELS[0]);
  const [answer, setAnswer] = useState(["red", "blue", "green", "purple"]);

  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <Board />
        <Controls setModel={setModel} models={MODELS} answer={answer} />
        <Board />
      </header>
    </div>
  );
};
