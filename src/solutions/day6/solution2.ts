import getInputFromFileAsString from '../../services/getInputFromFile';
import parse from './parse';
import Day from "./day";


interface Opts {
  input?: string;
}
export default function solution2({ input }: Opts = {}): string {
  if (!input) {
    input = getInputFromFileAsString({ day: Day.ID, type: 'input' });
  }

  const r = parse(input);

  let res: number | null = null;

  const WINDOW = 13

  for (let i = 0; i < r.length; i++) {
    if (res !== null) {
      break
    }

    if (i===5) {
      console.log(i, WINDOW+i)
    }

    const sliceW = r.slice(i, i+WINDOW+1).split('')
    const tmp: string[] = []
    for (const ch of sliceW) {
      if (tmp.includes(ch)) {
        break
      }

      tmp.push(ch)
    }

    if (tmp.length !== sliceW.length) {
      continue
    }

    res = i+WINDOW+1
  }

  if (!res) {
    throw new Error('UH OH')
  }

  return `${res}`
}
