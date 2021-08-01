/**
 * Returns the sign of a value
 *
 * - If `value` is equal to `0`, `0` is returned
 * - If `value` is less than `0`, `-1` is returned
 * - If `value` is greater than `0`, `1` is returned
 * @param value Value
 * @returns Sign as either `-1`, `0` or `1`
 */
export function toSign(value: number | bigint): -1 | 0 | 1 {
  if (value < 0) {
    return -1;
  }

  if (value > 0) {
    return 1;
  }

  return 0;
}
