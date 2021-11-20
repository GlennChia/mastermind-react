/**
 * Converts the array of indexes to an array of their color representations
 *
 * @param {number[]} prediction - array of the index representations of the colors
 * @param {Object} indexColors - map of the index to their color representations
 * @return {string[]} - Array of colors
 *
 * @example
 *
 *     const colors = ['purple', 'yellow', 'blue', 'red']
 *     const INDEX_COLORS = {
 *       0: "red",
 *       1: "blue",
 *       2: "green",
 *       3: "purple",
 *       4: "yellow",
 *       5: "orange",
 *     }
 *     colorsToIndex(colors, INDEX_COLORS)
 */
export const predictionToColor = (prediction, indexColors) => {
  let predictionFormatted = [];
  for (let i = 0; i < prediction.length; i++) {
    predictionFormatted.push(indexColors[prediction[i]]);
  }
  return predictionFormatted;
};
