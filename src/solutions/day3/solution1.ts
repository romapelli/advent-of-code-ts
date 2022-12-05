import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';

const getPriority = (v: string): number => {
  let code = v.charCodeAt(0)

  if ( code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) {
    code = code - "a".charCodeAt(0)
  } else {
    code = code - "A".charCodeAt(0) + "z".charCodeAt(0) - "a".charCodeAt(0)  + 1
  }


  return code + 1

}

interface Opts {
  input?: string;
}
export default function solution1({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day: 'day3', type: 'input' });
  }

  const batches = parse(input);

  return batches.reduce((acc, ruck) => {
    const comp1 = ruck.slice(0, ruck.length / 2)
    const comp2 = ruck.slice(ruck.length / 2)

    const el = comp1.split('').find(i => comp2.includes(i))

    if (!el) {
      throw new Error('UH OH')
    }

    return acc + getPriority(el)
  }, 0).toString();
}
