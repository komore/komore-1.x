import { type ArrayRange } from './array-range';

/**
 * Creates an array of numbers matching the provided range
 *
 * @param range Range
 * @returns Array of numbers ranging from `from` to `to`
 */
export function arrayFromRange(range: ArrayRange): Array<number> {
  const { from, to } = range;
  const reversed = to < from;
  const length = reversed ? from - to : to - from;
  const project = reversed
    ? (_value: unknown, index: number) => from - index
    : (_value: unknown, index: number) => index + from;
  return Array.from({ length }, project);
}
