export default function parse(input: string): string[][] {
  return input.split(/\n/).reduce(
    (acc, v) => {
      if (!v) {
        return [...acc, []];
      }

      acc[acc.length - 1].push(v);
      return acc;
    },
    [[]] as string[][],
  );
}
