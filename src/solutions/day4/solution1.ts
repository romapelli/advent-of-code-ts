import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import Opts from '../../interfaces/solution';
import day from './day';

const getPairings = (ass: string): string[] => ass.split(',');
const getRange = (pair: string): number[] =>
  pair.split('-').map((v) => parseInt(v, 10));

export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const batches = parse(input);

  return batches
    .reduce((acc, b) => {
      const [t1, t2] = getPairings(b);

      const [low1, high1] = getRange(t1);
      const [low2, high2] = getRange(t2);

      if (high2 - low2 === high1 - low1 && low1 !== low2 && high1 !== high2) {
        return acc;
      }

      if (
        (low1 <= low2 && high1 >= high2) ||
        (low1 >= low2 && high1 <= high2)
      ) {
        return acc + 1;
      }

      return acc;
    }, 0)
    .toString();
}
