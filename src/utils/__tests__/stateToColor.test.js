import { stateToColor } from "../stateToColor";

describe("stateToColor", () => {
  test("should convert perfect matches to black", () => {
    const result = stateToColor(0, 0, 4);
    expect(result).toEqual(["black", "black", "black", "black"]);
  });

  test("should convert semi matches to white", () => {
    const result = stateToColor(0, 4, 0);
    expect(result).toEqual(["white", "white", "white", "white"]);
  });

  test("should convert incorrect to default", () => {
    const result = stateToColor(4, 0, 0);
    expect(result).toEqual(["default", "default", "default", "default"]);
  });

  test("should handle mixed feedback", () => {
    const result = stateToColor(1, 1, 2);
    expect(result).toEqual(["default", "white", "black", "black"]);
  });

  test("should prioritize in order: incorrect, semi, perfect", () => {
    const result = stateToColor(0, 2, 2);
    expect(result).toEqual(["white", "white", "black", "black"]);
  });

  test("should handle edge case with all zeros", () => {
    const result = stateToColor(0, 0, 0);
    expect(result).toEqual([]);
  });
});
