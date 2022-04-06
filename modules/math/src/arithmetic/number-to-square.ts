/**
 * Returns the square of a number
 *
 * @param value Value
 * @returns Square of the value
 */
export function numberToSquare(value: number): number;

/**
 * Returns the square of a bigint
 *
 * @param value Value
 * @returns Square of the value
 */
export function numberToSquare(value: bigint): bigint;

export function numberToSquare(value: number | bigint): number | bigint {
  if (typeof value === 'number') {
    return value ** 2;
  } else {
    return value ** 2n;
  }
}
