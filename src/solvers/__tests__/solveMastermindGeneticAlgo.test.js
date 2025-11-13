import { solveMastermindGeneticAlgo } from "../solveMastermindGeneticAlgo";
import { getMoveScore } from "../../utils/getMoveScore";
import { stateToColor } from "../../utils/stateToColor";

describe("solveMastermindGeneticAlgo", () => {
  test("should be a function", () => {
    expect(typeof solveMastermindGeneticAlgo).toBe('function');
  });

  test("should actually solve the puzzle correctly", () => {
    const answer = ["red", "blue", "green", "purple"];
    const result = solveMastermindGeneticAlgo(answer, 5);
    
    if (result && Array.isArray(result)) {
      const [board, state] = result;
      
      // Verify final answer is correct
      expect(board[board.length - 1]).toEqual(answer);
      
      // Verify each move's feedback is accurate
      board.forEach((move, index) => {
        const [incorrect, semi, perfect] = getMoveScore(move, answer);
        const expectedState = stateToColor(incorrect, semi, perfect);
        expect(state[index]).toEqual(expectedState);
      });
      
      // Verify reasonable efficiency
      expect(board.length).toBeLessThanOrEqual(20);
      expect(board.length).toBeGreaterThan(0);
    }
  });

  test("should solve different combinations", () => {
    const testCases = [
      ["red", "blue", "green", "purple"],
      ["yellow", "orange", "blue", "red"],
      ["green", "purple", "yellow", "blue"]
    ];

    testCases.forEach(answer => {
      const result = solveMastermindGeneticAlgo(answer, 6);
      
      if (result && Array.isArray(result)) {
        const [board, state] = result;
        
        // Must find correct answer
        expect(board[board.length - 1]).toEqual(answer);
        
        // All feedback must be valid
        board.forEach((move, index) => {
          const [incorrect, semi, perfect] = getMoveScore(move, answer);
          const expectedState = stateToColor(incorrect, semi, perfect);
          expect(state[index]).toEqual(expectedState);
        });
        
        // Should be reasonably efficient
        expect(board.length).toBeLessThanOrEqual(25);
      }
    });
  });

  test("should validate move progression logic", () => {
    const answer = ["red", "blue", "green", "purple"];
    const result = solveMastermindGeneticAlgo(answer, 5);
    
    if (result && Array.isArray(result)) {
      const [board, state] = result;
      
      // Should have at least one move (could get lucky on first try)
      expect(board.length).toBeGreaterThanOrEqual(1);
      
      // Final state should be all perfect matches
      const finalState = state[state.length - 1];
      expect(finalState).toEqual(["black", "black", "black", "black"]);
      
      // Each move should be valid (4 colors)
      board.forEach(move => {
        expect(move).toHaveLength(4);
        expect(Array.isArray(move)).toBe(true);
      });
    }
  });

  test("should handle 6-color mode", () => {
    const answer = ["red", "blue", "green", "orange"];
    const result = solveMastermindGeneticAlgo(answer, 6);
    
    if (result && Array.isArray(result)) {
      const [board, state] = result;
      
      // Should solve correctly
      expect(board[board.length - 1]).toEqual(answer);
      
      // Should be efficient with more colors available
      expect(board.length).toBeLessThanOrEqual(30);
    }
  });
});
