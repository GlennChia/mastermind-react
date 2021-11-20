import { getMoveScore } from "../utils/getMoveScore";
import { stateToColor } from "../utils/stateToColor";

const INDEX_COLORS = {
  0: "red",
  1: "blue",
  2: "green",
  3: "purple",
  4: "yellow",
  5: "orange",
};

const COLORS_INDEX = {
  red: 0,
  blue: 1,
  green: 2,
  purple: 3,
  yellow: 4,
  orange: 5,
};

export const solveMastermindNaiveAlgo = (answer, numColors) => {
  let board = [];
  let state = [];
  let visitedColors = []; // since no repetition, reduce the search space
  // set a fixed initial prediction
  let prediction = ["red", "blue", "green", "purple"];
  // get current state
  let [incorrect, semi, perfect] = getMoveScore(prediction, answer);
  let currentState = stateToColor(incorrect, semi, perfect);
  // track moves and state
  board.push(prediction);
  state.push(currentState);
  // for progression management
  let previousPerfect = perfect;
  let currentSlot = 0;
  while (true) {
    // vary the colors by slot
    let currentColor = prediction[currentSlot];
    let currentColorIndex = COLORS_INDEX[currentColor];
    let newColorIndex = currentColorIndex + 1;
    let newColor = INDEX_COLORS[newColorIndex % numColors];
    while (visitedColors.includes(newColor)) {
      newColorIndex += 1;
      newColor = INDEX_COLORS[newColorIndex % numColors];
    }
    let newPrediction = [...prediction];
    newPrediction[currentSlot] = newColor;
    // get the state from the new prediction
    let [incorrect, semi, perfect] = getMoveScore(newPrediction, answer);
    let currentState = stateToColor(incorrect, semi, perfect);
    // track moves and state
    board.push(newPrediction);
    state.push(currentState);
    // Case 1: previous guess was wrong and new guess also wrong
    if (perfect == previousPerfect) {
      prediction = newPrediction;
    } else if (perfect < previousPerfect) {
      // Case 2: previous guess for the slot was correct
      visitedColors.push(currentColor);
      currentSlot += 1;
    } else {
      // Case 3: new guess is correct
      prediction = newPrediction;
      visitedColors.push(newColor);
      currentSlot += 1;
      previousPerfect = perfect;
    }
    if (perfect == 4) {
      break;
    }
  }
  return [board, state];
};
