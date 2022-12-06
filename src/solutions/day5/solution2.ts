import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import Opts from '../../interfaces/solution';
import day from './day';

interface Move {
  amount: number;
  start: number;
  to: number;
}

const parseMove = (move: string): Move => {
  const [amount, start, to] =
    move.match(/(\d+)/g)?.map((v) => parseInt(v, 10)) || [];

  return {
    amount,
    start,
    to,
  };
};

const execMove = (conf: string[][], move: Move): void => {
  const els = conf[move.start - 1].splice(-move.amount);
  conf[move.to - 1].push(...els);
};

const getTops = (conf: string[][]): string[] => {
  return conf.reduce((acc, s) => {
    const el = s.pop();

    if (!el) {
      throw new Error('undef');
    }

    return [...acc, el];
  }, [] as string[]);
};

const getMessage = (tops: string[]): string => {
  return tops.join('').replace(/\W/g, '');
};

export default function solution2({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const { conf, moves } = parse(input);

  for (const move of moves) {
    execMove(conf, parseMove(move));
  }

  const tops = getTops(conf);

  return getMessage(tops);
}
