import React, { useState } from "react";
import classes from "./index.module.css";

const DEFAULT_COLORS = ["default", "default", "default", "default"];

export const Row = () => {
  const [selection, setSelection] = useState(DEFAULT_COLORS);
  return (
    <div className={classes.Row}>
      <div className={classes.RowNumber}>1</div>
      {selection.map((select, index) => (
        <button
          key={index}
          className={[classes.Circle, classes[select]].join(" ")}
        />
      ))}
      <div>
        <div
          className={[classes.SmallCircle, classes[DEFAULT_COLORS[0]]].join(
            " "
          )}
        />
        <div
          className={[classes.SmallCircle, classes[DEFAULT_COLORS[1]]].join(
            " "
          )}
        />
      </div>
      <div>
        <div
          className={[classes.SmallCircle, classes[DEFAULT_COLORS[2]]].join(
            " "
          )}
        />
        <div
          className={[classes.SmallCircle, classes[DEFAULT_COLORS[3]]].join(
            " "
          )}
        />
      </div>
    </div>
  );
};
