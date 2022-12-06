import getInputFromFileAsString, {Day} from '../../services/getInputFromFile';
import solution1 from './solution1';
import solution2 from './solution2';

const day: Day = 'day5'

describe('Day 5', () => {
  describe('Example', () => {
    const input = getInputFromFileAsString({ day, type: 'example' });

    it('should work with sol1', () => {
      const res = solution1({ input });
      const exampleSol = getInputFromFileAsString({
        day,
        type: 'solution1-example',
      });

      expect(res).toBe(exampleSol);
    });

    it('should work with sol2', () => {
      const res = solution2({ input });
      const exampleSol = getInputFromFileAsString({
        day,
        type: 'solution2-example',
      });

      expect(res).toBe(exampleSol);
    });
  });

  describe('Part 1', () => {
    const sol = getInputFromFileAsString({ day, type: 'solution1' });

    it('should work', () => {
      const res = solution1();
      expect(res).toBe(sol);
    });
  });

  describe('Part 2', () => {
    const sol = getInputFromFileAsString({ day, type: 'solution2' });

    it('should work', () => {
      const res = solution2();

      expect(res).toBe(sol);
    });
  });
});
