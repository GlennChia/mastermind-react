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
