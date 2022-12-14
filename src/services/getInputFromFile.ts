import { readFileSync } from 'fs';
import * as path from 'path';

export type Day = `day${
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'}`;
type Type =
  | `example`
  | `input`
  | `solution1`
  | `solution2`
  | `solution1-example`
  | `solution2-example`;

interface Opts {
  day: Day;
  type: Type;
  disableRemoveLastCharacter?: boolean;
}

const getFilePath = ({ day, type }: Opts): string => {
  return path.join(__dirname, '../..', `puzzles/${day}/${type}.txt`);
};

export default function getInputFromFileAsString({
  day,
  type,
  disableRemoveLastCharacter,
}: Opts): string {
  let content = readFileSync(getFilePath({ day, type })).toString();

  if (!disableRemoveLastCharacter) {
    content = content.slice(0, content.length - 1);
  }

  return content;
}
