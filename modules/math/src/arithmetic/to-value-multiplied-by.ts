/**
 * TODO
 * @param multiplier
 * @returns
 */
export function toValueMultipledBy(multiplier: number): (multiplicant: number) => number;
export function toValueMultipledBy(multiplier: bigint): (multiplicant: bigint) => bigint;

export function toValueMultipledBy(
  multiplier: number | bigint
): ((multiplicant: number) => number) | ((multiplicant: bigint) => bigint) {
  if (typeof multiplier === 'number') {
    return (multiplicant: number) => multiplicant * multiplier;
  } else {
    return (multiplicant: bigint) => multiplicant * multiplier;
  }
}
