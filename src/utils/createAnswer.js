var _ = require("underscore");

export const createAnswer = (colors, length) => {
  return _.sample(colors, length);
};
