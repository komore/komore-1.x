/**
 * Creates an array of numbers matching the provided range
 * @param from Start index
 * @param to End index (inclusive)
 * @returns Array of numbers ranging from `from` to `to`
 */
export function fromRange(from: number, to: number): Array<number> {
  type MappingFunction = (_: unknown, index: number) => number;
  const reverse = to < from;
  const length = reverse ? from - to + 1 : to - from + 1;
  const proj: MappingFunction = reverse ? (_, index) => from - index : (_, index) => index + from;
  return Array.from({ length }, proj);
}
