/**
 * Returns the sign of a value
 *
 * - If `value` is equal to `0`, `0` is returned
 * - If `value` is less than `0`, `-1` is returned
 * - If `value` is greater than `0`, `1` is returned
 * @param value Value
 * @returns Sign as either `-1`, `0` or `1`
 */
export function numberToSign(value: number | bigint): -1 | 0 | 1 {
  if (typeof value === 'number') {
    // TODO: remove cast if the type definition changes
    return Math.sign(value) as -1 | 0 | 1;
  }

  if (value < 0n) {
    return -1;
  }

  if (value > 0n) {
    return 1;
  }

  return 0;
}
