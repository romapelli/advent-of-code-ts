import getInputFromFileAsString from '../../services/getInputFromFile';
import solution1 from './solution1';
import solution2 from './solution2';
import day from './day';

describe(day, () => {
  const example = getInputFromFileAsString({ day, type: 'example' });

  describe('Part 1', () => {
    const sol = getInputFromFileAsString({ day, type: 'solution1' });

    it('should work with example', () => {
      const res = solution1({ input: example });
      const exampleSol = getInputFromFileAsString({
        day,
        type: 'solution1-example',
      });

      expect(res).toBe(exampleSol);
    });

    it('should work', () => {
      const res = solution1();
      expect(res).toBe(sol);
    });
  });

  describe('Part 2', () => {
    const sol = getInputFromFileAsString({ day, type: 'solution2' });

    it('should work with example', () => {
      const res = solution2({ input: example });
      const exampleSol = getInputFromFileAsString({
        day,
        type: 'solution2-example',
      });

      expect(res).toBe(exampleSol);
    });

    it('should work', () => {
      const res = solution2();
      expect(res).toBe(sol);
    });
  });
});
