import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import day from './day';
import Opts from '../../interfaces/solution';

const walk = (
  [elf, ...elves]: string[][],
  tops: number[] = [0, 0, 0],
): string => {
  if (!elf) {
    return tops.reduce((acc, t) => acc + t, 0).toString();
  }

  const v = elf.reduce((acc, n) => acc + parseInt(n, 10), 0);

  tops.sort((t1, t2) => t1 - t2);

  if (tops[0] < v) {
    tops[0] = v;
  }

  return walk(elves, tops);
};

export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const batches = parse(input);

  return walk(batches);
}
