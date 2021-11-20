/**
 * Returns an array with details about incorrect, correctColorWrongLocation, and correctColorLocation
 *
 * @param {number[]|string[]} input - user entered array that is compared to the answer
 * @param {number[]|string[]} answer - target array
 * @return {number[]} - scores associated to the current input
 *
 * @example
 *
 *     prediction = [2, 4, 1, 3]
 *     answer = [3, 4, 1, 0]
 *     getMoveScore(prediction, answer)
 */
export const getMoveScore = (input, answer) => {
  let correctColorLocation = 0;
  let correctColorWrongLocation = 0;
  // correct color correct location
  for (let i = 0; i < input.length; i++) {
    if (input[i] === answer[i]) {
      correctColorLocation += 1;
    }
  }
  // correct color
  for (let i = 0; i < answer.length; i++) {
    var inputSet = new Set(input);
    if (inputSet.has(answer[i])) {
      correctColorWrongLocation += 1;
    }
  }
  correctColorWrongLocation -= correctColorLocation;
  const incorrect = 4 - correctColorWrongLocation - correctColorLocation;
  return [incorrect, correctColorWrongLocation, correctColorLocation];
};
