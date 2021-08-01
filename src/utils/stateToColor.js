export const stateToColor = (incorrect, semi, perfect) => {
  let stateColor = [];
  for (let i = 0; i < incorrect; i++) {
    stateColor.push("default");
  }
  for (let i = 0; i < semi; i++) {
    stateColor.push("white");
  }
  for (let i = 0; i < perfect; i++) {
    stateColor.push("black");
  }
  return stateColor;
};
