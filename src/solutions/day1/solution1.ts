import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import day from './day';
import Opts from '../../interfaces/solution';

const walk = ([a, ...b]: string[][], c = ''): string => {
  if (!a) {
    return c;
  }

  const v = a.reduce((acc, n) => acc + parseInt(n, 10), 0);

  if (!c || parseInt(c, 10) < v) {
    c = `${v}`;
  }

  return walk(b, c);
};

export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const batches = parse(input);

  return walk(batches);
}
