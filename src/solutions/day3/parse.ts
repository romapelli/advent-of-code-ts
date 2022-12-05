export default function parse(input: string): string[] {
  return input.split(/\n/).reduce(
    (acc, v) => {
      if (!v) {
        return acc;
      }

      acc.push(v);
      return acc;
    },
    [] as string[],
  );
}
