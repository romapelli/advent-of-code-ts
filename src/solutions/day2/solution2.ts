import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import Opts from '../../interfaces/solution';
import day from './day';

enum Sign {
  Rock = 1,
  Paper = 2,
  Scissor = 3,
}

enum OutcomeSigns {
  WIN = 'Z',
  DRAW = 'Y',
  LOSS = 'X',
}

const Decrypt = (v: string): Sign => {
  if ('A' === v) {
    return Sign.Rock;
  }
  if ('B' === v) {
    return Sign.Paper;
  }
  return Sign.Scissor;
};

const YourPick = (oppPick: Sign, v: OutcomeSigns) => {
  if (v === OutcomeSigns.LOSS) {
    // Loose
    const s = Powers(oppPick).winsOn;

    return [Powers(s).value, Outcomes.L];
  }

  if (v === OutcomeSigns.DRAW) {
    // draw
    return [Powers(oppPick).value, Outcomes.D];
  }
  const s = Powers(oppPick).looseOn;

  return [Powers(s).value, Outcomes.W];
};

const Powers = (k: Sign) => {
  if (k === Sign.Rock) {
    // rock -> scissor
    return {
      winsOn: Sign.Scissor,
      looseOn: Sign.Paper,
      value: 1,
    };
  }
  if (k === Sign.Paper) {
    // paper -> rock
    return {
      winsOn: Sign.Rock,
      looseOn: Sign.Scissor,
      value: 2,
    };
  }

  // scissor -> paper
  return {
    winsOn: Sign.Paper,
    looseOn: Sign.Rock,
    value: 3,
  };
};

enum Outcomes {
  W = 6,
  D = 3,
  L = 0,
}

export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day, type: 'input' });
  }

  const batches = parse(input);

  return batches
    .reduce((acc, round) => {
      const [_opp, _you] = round.split(' ');

      const opp = Decrypt(_opp);
      const [yourP, outcome] = YourPick(opp, _you as OutcomeSigns);

      return acc + outcome + yourP;
    }, 0)
    .toString();
}
