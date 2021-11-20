import React, { useState } from "react";
import classes from "./index.module.css";
import { Controls } from "../../components/Controls";
import { Board } from "../../components/Board";
import { createAnswer } from "../../utils/createAnswer";
import { getMoveScore } from "../../utils/getMoveScore";
import { stateToColor } from "../../utils/stateToColor";
import { solveMastermind } from "../../utils/solveMastermind";
import { solveMastermindGeneticAlgo } from "../../utils/solveMastermindGeneticAlgo";

const MODELS = ["Naive", "Genetic algorithm"];
const COLORS_5 = ["red", "blue", "green", "purple", "yellow"];
const COLORS_6 = ["red", "blue", "green", "purple", "yellow", "orange"];
const COLOR_OPTIONS = {
  5: COLORS_5,
  6: COLORS_6,
};
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
const INITIAL_STATE = [
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
  const [userState, setUserState] = useState(INITIAL_STATE);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [winStatus, setWinStatus] = useState(false);
  const [loseStatus, setLoseStatus] = useState(false);
  const [aiBoard, setAiBoard] = useState(INITIAL_BOARD);
  const [aiState, setAiState] = useState(INITIAL_STATE);
  const [numColors, setNumColors] = useState(5);
  const [colors, setColors] = useState(COLORS_5);

  const startGame = () => {
    const createdAnswer = createAnswer(colors, 4);
    setGameStart(true);
    setWinStatus(false);
    setLoseStatus(false);
    setCurrentIndex(0);
    setUserBoard(INITIAL_BOARD);
    setUserState(INITIAL_STATE);
    setAnswer(createdAnswer);
    setAiBoard(INITIAL_BOARD);
    setAiState(INITIAL_STATE);
  };

  const setTotalColors = (numColors) => {
    setNumColors(numColors);
    setColors(COLOR_OPTIONS[numColors]);
  };

  const showAnswer = () => {
    setAnswerVisible(!answerVisible);
  };

  const showAiAnswer = () => {
    switch (model) {
      case "Naive":
        let [naiveAiBoard, naiveAiState] = solveMastermind(answer, numColors);
        setAiBoard(naiveAiBoard);
        setAiState(naiveAiState);
        break;
      case "Genetic algorithm":
        let [geneticAlgoBoard, geneticAlgoState] = solveMastermindGeneticAlgo(
          answer,
          numColors
        );
        setAiBoard(geneticAlgoBoard);
        setAiState(geneticAlgoState);
        break;
      default:
        let [defaultAiBoard, defaultAiState] = solveMastermind(
          answer,
          numColors
        );
        setAiBoard(defaultAiBoard);
        setAiState(defaultAiState);
    }
  };

  const setRow = (rowValue) => {
    const tempBoard = [...userBoard];
    tempBoard[currentIndex] = rowValue;
    setUserBoard(tempBoard);
  };

  const lockRow = () => {
    const newIndex = currentIndex + 1;
    const [incorrect, semi, perfect] = getMoveScore(
      userBoard[currentIndex],
      answer
    );
    let stateColor = stateToColor(incorrect, semi, perfect);
    const tempState = [...userState];
    tempState[currentIndex] = stateColor;
    setUserState(tempState);
    perfect === 4 ? setWinStatus(true) : null;
    setCurrentIndex(newIndex);
    newIndex >= userBoard.length && perfect < 4 ? setLoseStatus(true) : null;
  };

  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <Board
          colors={colors}
          board={userBoard}
          setRow={setRow}
          currentIndex={currentIndex}
          lockRow={lockRow}
          state={userState}
          gameStart={gameStart}
          winStatus={winStatus}
        />
        <Controls
          setModel={setModel}
          models={MODELS}
          answer={answer}
          startGame={startGame}
          showAnswer={showAnswer}
          answerVisible={answerVisible}
          hidden_colors={HIDDEN_COLORS}
          gameStart={gameStart}
          winStatus={winStatus}
          loseStatus={loseStatus}
          showAiAnswer={showAiAnswer}
          setTotalColors={setTotalColors}
        />
        <Board
          colors={colors}
          board={aiBoard}
          setRow={setRow}
          state={aiState}
        />
      </header>
    </div>
  );
};
