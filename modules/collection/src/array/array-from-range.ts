import { type ArrayRange } from './array-range';

/**
 * Creates an array of numbers matching the provided range
 *
 * @param range Range
 * @returns Array of numbers ranging from `from` to `to`
 */
export function arrayFromRange({ from, to }: ArrayRange): Array<number> {
  const reverse = to < from;
  const length = reverse ? from - to : to - from;
  const proj = reverse ? (_: unknown, index: number) => from - index : (_: unknown, index: number) => index + from;
  return Array.from({ length }, proj);
}
