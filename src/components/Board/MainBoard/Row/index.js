import React from "react";
import classes from "./index.module.css";
import tick from "../../../../assets/tick.png";

const COLORS = ["red", "blue", "green", "purple", "yellow"];
const DEFAULT_COLORS = ["default", "default", "default", "default"];

export const Row = ({
  row,
  rowNumber,
  setRow,
  currentIndex,
  lockRow,
  state,
}) => {
  const toggleColors = (index) => {
    const tempSelection = [...row];
    const colorIndex =
      tempSelection[index] === "default"
        ? -1
        : COLORS.indexOf(tempSelection[index]);
    const newColorIndex = (colorIndex + 1) % COLORS.length;
    tempSelection[index] = COLORS[newColorIndex];
    setRow(tempSelection);
  };
  return (
    <div className={classes.Row}>
      <div className={classes.RowNumber}>{rowNumber}</div>
      {row.map((select, index) => (
        <button
          key={index}
          onClick={() => toggleColors(index)}
          disabled={rowNumber !== currentIndex}
          className={[classes.Circle, classes[select]].join(" ")}
        />
      ))}
      <div>
        <div className={[classes.SmallCircle, classes[state[0]]].join(" ")} />
        <div className={[classes.SmallCircle, classes[state[1]]].join(" ")} />
      </div>
      <div>
        <div className={[classes.SmallCircle, classes[state[2]]].join(" ")} />
        <div className={[classes.SmallCircle, classes[state[3]]].join(" ")} />
      </div>
      {currentIndex === rowNumber ? (
        <button
          onClick={() => {
            lockRow();
          }}
          disabled={row.includes("default")}
          className={[classes.Circle, classes.ButtonGreen].join(" ")}
        >
          <img src={tick} className={classes.Image} />
        </button>
      ) : null}
    </div>
  );
};
