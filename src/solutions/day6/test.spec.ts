import getInputFromFileAsString from '../../services/getInputFromFile';
import solution1 from './solution1';
import solution2 from './solution2';
import Day from "./day";

describe(Day.NAME, () => {
  describe('Example', () => {
    const input = getInputFromFileAsString({ day: Day.ID, type: 'example' });

    it('should work with sol1', () => {
      const res = solution1({ input });
      const exampleSol = getInputFromFileAsString({
        day: Day.ID,
        type: 'solution1-example',
      });

      expect(res).toBe(exampleSol);
    });

    it('should work with sol2', () => {
      const res = solution2({ input });
      const exampleSol = getInputFromFileAsString({
        day: Day.ID,
        type: 'solution2-example',
      });

      expect(res).toBe(exampleSol);
    });
  });

  describe('Part 1', () => {
    const sol = getInputFromFileAsString({ day: Day.ID, type: 'solution1' });

    it('should work', () => {
      const res = solution1();
      expect(res).toBe(sol);
    });
  });

  describe('Part 2', () => {
    const sol = getInputFromFileAsString({ day: Day.ID, type: 'solution2' });

    it('should work', () => {
      const res = solution2();

      expect(res).toBe(sol);
    });
  });
});
