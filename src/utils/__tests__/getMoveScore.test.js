import { getMoveScore } from "../getMoveScore";

describe("getMoveScore", () => {
  test("should return perfect match", () => {
    const prediction = ["red", "blue", "green", "purple"];
    const answer = ["red", "blue", "green", "purple"];
    const [incorrect, semi, perfect] = getMoveScore(prediction, answer);

    expect(incorrect).toBe(0);
    expect(semi).toBe(0);
    expect(perfect).toBe(4);
  });

  test("should return all incorrect", () => {
    const prediction = ["red", "blue", "green", "purple"];
    const answer = ["yellow", "orange", "yellow", "orange"];
    const [incorrect, semi, perfect] = getMoveScore(prediction, answer);

    expect(incorrect).toBe(4);
    expect(semi).toBe(0);
    expect(perfect).toBe(0);
  });

  test("should return semi-correct matches", () => {
    const prediction = ["red", "blue", "green", "purple"];
    const answer = ["blue", "red", "purple", "green"];
    const [incorrect, semi, perfect] = getMoveScore(prediction, answer);

    expect(incorrect).toBe(0);
    expect(semi).toBe(4);
    expect(perfect).toBe(0);
  });

  test("should handle mixed results", () => {
    const prediction = ["red", "blue", "green", "purple"];
    const answer = ["red", "green", "yellow", "purple"];
    const [incorrect, semi, perfect] = getMoveScore(prediction, answer);

    expect(perfect).toBe(2); // red and purple in correct positions
    expect(semi).toBe(1); // green in wrong position
    expect(incorrect).toBe(1); // blue not in answer
  });

  test("should handle duplicate colors correctly", () => {
    const prediction = ["red", "red", "blue", "green"];
    const answer = ["red", "blue", "red", "purple"];
    const [incorrect, semi, perfect] = getMoveScore(prediction, answer);

    expect(perfect).toBe(1); // first red
    expect(semi).toBe(2); // second red and blue
    expect(incorrect).toBe(1); // green
  });
});
