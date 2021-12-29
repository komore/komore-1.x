/**
 * TODO
 * @param multiplier
 * @returns
 */
export function toValueMultipliedBy(multiplier: number): (multiplicant: number) => number;
export function toValueMultipliedBy(multiplier: bigint): (multiplicant: bigint) => bigint;

export function toValueMultipliedBy(
  multiplier: number | bigint
): ((multiplicant: number) => number) | ((multiplicant: bigint) => bigint) {
  if (typeof multiplier === 'number') {
    return (multiplicant: number) => multiplicant * multiplier;
  } else {
    return (multiplicant: bigint) => multiplicant * multiplier;
  }
}
