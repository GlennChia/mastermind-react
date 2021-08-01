import React, { useState } from "react";
import classes from "./index.module.css";
import { Controls } from "../../components/Controls";
import { Board } from "../../components/Board";
import { createAnswer } from "../../utils/createAnswer";

const MODELS = ["Naive", "Deep Q Learning", "Q Learning"];
const COLORS = ["red", "blue", "green", "purple", "yellow"];

export const Game = () => {
  const [model, setModel] = useState(MODELS[0]);
  const [answer, setAnswer] = useState(["red", "blue", "green", "purple"]);

  const startGame = () => {
    const createdAnswer = createAnswer(COLORS, 4);
    setAnswer(createdAnswer);
  };

  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <Board />
        <Controls
          setModel={setModel}
          models={MODELS}
          answer={answer}
          startGame={startGame}
        />
        <Board />
      </header>
    </div>
  );
};
