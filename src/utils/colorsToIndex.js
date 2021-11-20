/**
 * Converts the array of colors to an array of their number representations
 *
 * @param {string[]} colors - array of colors
 * @param {Object} colorIndex - map of the colors to their number representations
 * @return {number[]} - Array of numbers which are the number representations of the colors
 *
 * @example
 *
 *     const colors = ['purple', 'yellow', 'blue', 'red']
 *     const COLORS_INDEX = {
 *       "red": 0,
 *       "blue": 1 ,
 *       "green": 2,
 *       "purple": 3,
 *       "yellow": 4,
 *       "orange": 5,
 *     }
 *     colorsToIndex(colors, COLORS_INDEX)
 */
export const colorsToIndex = (colors, colorIndex) => {
  let colorsFormatted = [];
  for (let i = 0; i < colors.length; i++) {
    colorsFormatted.push(colorIndex[colors[i]]);
  }
  return colorsFormatted;
};
