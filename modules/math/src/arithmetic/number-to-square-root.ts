/**
 * Returns the square root of a number
 *
 * @param value Value
 * @returns Square root of the value
 */
export function numberToSquareRoot(value: number): number;

/**
 * Returns the square root of a bigint
 *
 * @param value Value
 * @returns Square root of the value
 */
export function numberToSquareRoot(value: bigint): bigint;

export function numberToSquareRoot(value: number | bigint): number | bigint {
  if (typeof value === 'number') {
    return Math.sqrt(value);
  } else {
    // TODO
    throw new Error('numberToSquareRoot not implemented for bigint');
  }
}
