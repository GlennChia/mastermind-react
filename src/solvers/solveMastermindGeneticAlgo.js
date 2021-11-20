import { getMoveScore } from "../utils/getMoveScore";
import { stateToColor } from "../utils/stateToColor";
import { predictionToColor } from "../utils/predictionToColor";
import { colorsToIndex } from "../utils/colorsToIndex";
var _ = require("underscore");

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

/**
 * Returns an array of length arrayLength with unique numbers ranging from 0 to (numColors -1)
 *
 * @param {number} [arrayLength=4] - length of the output array
 * @param {number} [numColors=6] - Upper bound for number range (not inclusive)
 * @return {number[]} - Array of unique numbers
 *
 * @example
 *
 *     getArrayOfUniqueNumbers(4, 6)
 */
function getArrayOfUniqueNumbers(arrayLength = 4, numColors = 6) {
  let uniqueNumbers = [];
  while (uniqueNumbers.length < arrayLength) {
    let generatedNumber = Math.floor(Math.random() * numColors);
    if (uniqueNumbers.indexOf(generatedNumber) === -1)
      uniqueNumbers.push(generatedNumber);
  }
  return uniqueNumbers;
}

/**
 * Returns an array with the various permutations of the original array
 *
 * @param {number[]} numberRange - array of numbers to permute
 * @param {number} [arrayLength=4] - length of each permuted array
 * @return {number[][]} - array of permutations
 *
 * @example
 *
 *     generatePermutations([0,1,2,3,4], 4);
 */
function generatePermutations(numberRange, arrayLength = 4) {
  // reference: https://stackoverflow.com/questions/9960908/permutations-in-javascript
  if (arrayLength > numberRange.length) return [];
  else if (arrayLength == 1) return numberRange.map((d) => [d]);
  return numberRange.flatMap((d) =>
    generatePermutations(
      numberRange.filter((a) => a !== d),
      arrayLength - 1
    ).map((item) => [d, ...item])
  );
}

/**
 * Makes the best prediction from the current array of permutations
 *
 * @param {number[]} permutations - array of permutations
 * @return {number[]} - prediction
 *
 * @example
 *
 *     let numberRange = [...Array(5).keys()];
 *     permutations = generatePermutations(numberRange, 4);
 *     makePrediction(permutations)
 */
function makePrediction(permutations) {
  let remainTable = Array(permutations.length).fill(0);

  for (let i = 0; i < permutations.length; i++) {
    let permutationsIndex = [...Array(permutations.length).keys()];
    permutationsIndex.splice(i, 1);
    let sample = [];
    if (permutationsIndex.length > 100) {
      sample = _.sample(permutationsIndex, 100);
    } else {
      sample = _.sample(permutationsIndex, permutationsIndex.length);
    }
    let remain = 0;
    for (let j = 0; j < sample.length; j++) {
      let sampleValue = sample[j];
      let [_incorrect, semi, perfect] = getMoveScore(
        permutations[sampleValue],
        permutations[i]
      );
      for (let k = 0; k < sample.length; k++) {
        let sampleValue2 = sample[k];
        let [_incorrect2, semi2, perfect2] = getMoveScore(
          permutations[sampleValue2],
          permutations[i]
        );
        if (semi == semi2 && perfect == perfect2) {
          remain++;
        }
      }
    }
    remainTable[i] = remain;
  }

  let minIndex = remainTable.indexOf(Math.min.apply(null, remainTable));

  return permutations[minIndex];
}

/**
 * Solves the mastermind game using a genetic algorithm
 *
 * @param {string[]} answer - array of permutations
 * @param {number} numColors - total number of colors to choose from
 * @return {string[][]} - board and move state represented by colors
 *
 * @example
 *
 *     let answer = ['green', 'yellow', 'red', 'blue']
 *     geneticAlgorithm(answer, 5)
 */
export const solveMastermindGeneticAlgo = (answer, numColors) => {
  answer = colorsToIndex(answer, COLORS_INDEX);
  let board = [];
  let state = [];

  let permutations = generatePermutations([...Array(numColors).keys()], 4);
  // random first guess
  let prediction = getArrayOfUniqueNumbers(4, numColors);
  let [incorrect, semi, perfect] = getMoveScore(prediction, answer);

  let currentState = stateToColor(incorrect, semi, perfect);
  let currentPrediction = predictionToColor(prediction, INDEX_COLORS);

  board.push(currentPrediction);
  state.push(currentState);

  while (true) {
    let tempPermutations = [];
    for (let i = 0; i < permutations.length; i++) {
      let tempGuess = permutations[i];
      let [_incorrect2, semi2, perfect2] = getMoveScore(prediction, tempGuess);
      if (semi == semi2 && perfect == perfect2) {
        tempPermutations.push(tempGuess);
      }
    }
    permutations = tempPermutations;
    prediction = makePrediction(permutations);
    [incorrect, semi, perfect] = getMoveScore(prediction, answer);
    let currentState = stateToColor(incorrect, semi, perfect);
    let currentPrediction = predictionToColor(prediction, INDEX_COLORS);

    board.push(currentPrediction);
    state.push(currentState);
    if (perfect == 4) {
      break;
    }
  }
  return [board, state];
};
