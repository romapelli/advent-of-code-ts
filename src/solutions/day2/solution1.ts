import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';

type Keys = 'R' | 'P'| 'S'

const Decrypt = (v: string): Keys => {
  if (['A', 'X'].includes(v)) {
    return 'R'
  }
  if (['B', 'Y'].includes(v)) {
    return 'P'
  }
  return 'S'
}

const Powers = (k: Keys): [Keys, number] => {
  if (k === 'R') {
    return ['S', 1]
  }
  if (k === 'P') {
    return ['R', 2]
  }

  return ['P', 3]
}

enum Outcomes {
  W =  6,
  D =  3,
  L =  0,
}

interface Opts {
  input?: string;
}
export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day: 'day2', type: 'input' });
  }

  const batches = parse(input);

  return batches.reduce((acc, round) => {
    const [_opp, _you] = round.split(' ')

    const opp = Decrypt(_opp)
    const you = Decrypt(_you)
    const [oppWinsOn] = Powers(opp)
    const yourP = Powers(you)[1]

    let outcome: Outcomes = Outcomes.W

    if (oppWinsOn === you) {
      outcome = Outcomes.L
    } else if (opp === you) {
      outcome = Outcomes.D
    }

    return acc + outcome + yourP;
  }, 0).toString();
}
