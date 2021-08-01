import React from "react";
import classes from "./index.module.css";

export const Controls = ({
  setModel,
  models,
  answer,
  startGame,
  showAnswer,
  answerVisible,
  hidden_colors,
  winStatus,
}) => {
  let displayAnswers = answerVisible ? answer : hidden_colors;
  return (
    <div className={classes.Overall}>
      <div className={classes.Title}>Mastermind</div>
      <div className={classes.Controls}>
        <div className={classes.Title}>AI Mode:</div>
        <select
          className={classes.Dropdown}
          onChange={(e) => setModel(e.target.value)}
        >
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <div className={classes.Title}>Answer:</div>
        <div className={classes.AnswerRow}>
          {displayAnswers.map((ans, index) => (
            <div
              key={index}
              className={[classes.Circle, classes[ans]].join(" ")}
            />
          ))}
        </div>
        <button
          onClick={() => startGame()}
          className={[classes.Button, classes.ButtonGreen, classes.Title].join(
            " "
          )}
        >
          Start Game
        </button>
        <button
          onClick={() => showAnswer()}
          className={[classes.Button, classes.ButtonYellow, classes.Title].join(
            " "
          )}
        >
          Show Answer
        </button>
      </div>
      {winStatus ? <div className={classes.Win}>Congratulations</div> : null}
    </div>
  );
};
