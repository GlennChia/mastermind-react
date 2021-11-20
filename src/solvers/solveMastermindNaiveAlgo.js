import { getMoveScore } from "../utils/getMoveScore";
import { stateToColor } from "../utils/stateToColor";
import { INDEX_COLORS, COLORS_INDEX } from "../constants/constants";

/**
 * Solves the mastermind game using a naive algorithm
 *
 * @param {string[]} answer - target array of colors
 * @param {number} numColors - total number of colors to choose from
 * @return {string[][]} - board and move state represented by colors
 *
 * @example
 *
 *     let answer = ['green', 'yellow', 'red', 'blue']
 *     solveMastermindNaiveAlgo(answer, 5)
 */
function solveMastermind(answer, numColors) {
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
  // for error handling
  let turn = 1;
  while (true) {
    turn++;
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
    // Change this number to the upper bound of the number of turns needed to solve mastermind
    if (turn > 20) {
      throw new Error("Solver unable to find solution");
    }
  }
  return [board, state];
}

/**
 * Solves the mastermind game using a naive algorithm. Accounts for UI case where numColors is decremented
 *
 * @param {string[]} answer - target array of colors
 * @param {number} numColors - total number of colors to choose from
 * @return {string[][]} - board and move state represented by colors
 *
 * @example
 *
 *     let answer = ['green', 'yellow', 'red', 'blue']
 *     solveMastermindNaiveAlgo(answer, 5)
 */
export const solveMastermindNaiveAlgo = (answer, numColors) => {
  try {
    return solveMastermind(answer, numColors);
  } catch (err) {
    return solveMastermind(answer, 6);
  }
};
