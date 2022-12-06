import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import Opts from '../../interfaces/solution';
import day from './day';

const getPriority = (v: string): number => {
  let code = v.charCodeAt(0);

  if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
    code = code - 'a'.charCodeAt(0);
  } else {
    code = code - 'A'.charCodeAt(0) + 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }

  return code + 1;
};

const group = (b: string[]): string[][] => {
  return b.reduce((acc, e, i) => {
    if (i % 3 === 0) {
      return [...acc, [e]];
    }

    acc[acc.length - 1].push(e);

    return acc;
  }, [] as string[][]);
};

export default function solution2({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const batches = parse(input);

  const groups = group(batches);

  return groups
    .reduce((acc, [a, b, c]) => {
      const el = a.split('').find((i) => b.includes(i) && c.includes(i));

      if (!el) {
        throw new Error('UH OH');
      }

      return acc + getPriority(el);
    }, 0)
    .toString();
}
