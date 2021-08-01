/**
 * Creates a function that returns the square of a value
 * @returns Function that returns the square of a value
 */
export function toSquared(value: number): number;

/**
 * Creates a function that returns the square of a value
 * @returns Function that returns the square of a value
 */
export function toSquared(value: bigint): bigint;

export function toSquared(value: number | bigint): number | bigint {
  if (typeof value === 'number') {
    return value ** 2;
  } else {
    return value ** 2n;
  }
}
