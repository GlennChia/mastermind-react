import React, { useState } from "react";
import classes from "./index.module.css";
import { Controls } from "../../components/Controls";
import { Board } from "../../components/Board";
import { createAnswer } from "../../utils/createAnswer";

const MODELS = ["Naive", "Deep Q Learning", "Q Learning"];
const COLORS = ["red", "blue", "green", "purple", "yellow"];
const HIDDEN_COLORS = ["default", "default", "default", "default"];
const INITIAL_BOARD = [
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
  ["default", "default", "default", "default"],
];

export const Game = () => {
  const [model, setModel] = useState(MODELS[0]);
  const [answer, setAnswer] = useState(HIDDEN_COLORS);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [userBoard, setUserBoard] = useState(INITIAL_BOARD);

  const startGame = () => {
    const createdAnswer = createAnswer(COLORS, 4);
    setAnswer(createdAnswer);
  };

  const showAnswer = () => {
    setAnswerVisible(!answerVisible);
  };

  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <Board colors={COLORS} board={userBoard} />
        <Controls
          setModel={setModel}
          models={MODELS}
          answer={answer}
          startGame={startGame}
          showAnswer={showAnswer}
          answerVisible={answerVisible}
          hidden_colors={HIDDEN_COLORS}
        />
        <Board colors={COLORS} board={INITIAL_BOARD} />
      </header>
    </div>
  );
};
