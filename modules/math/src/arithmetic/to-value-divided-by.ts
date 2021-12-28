/**
 * TODO
 * @param divisor
 * @returns
 */
export function toValueDividedBy(divisor: number): (dividend: number) => number;
export function toValueDividedBy(divisor: bigint): (dividend: bigint) => bigint;

export function toValueDividedBy(
  divisor: number | bigint
): ((dividend: number) => number) | ((dividend: bigint) => bigint) {
  if (typeof divisor === 'number') {
    return (dividend: number) => dividend / divisor;
  } else {
    return (dividend: bigint) => dividend / divisor;
  }
}
