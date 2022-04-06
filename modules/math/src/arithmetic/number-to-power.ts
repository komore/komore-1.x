/**
 * Creates a function that returns a number to a power
 *
 * @param exponent Exponent
 * @returns Function that returns a value to its `exponent`'s power
 */
export function numberToPower(exponent: number): (value: number) => number;

/**
 * Creates a function that returns a bigint to a power
 *
 * @param exponent Exponent
 * @returns Function that returns a value to its `exponent`'s power
 */
export function numberToPower(exponent: bigint): (value: bigint) => bigint;

export function numberToPower(exponent: number | bigint): ((value: number) => number) | ((value: bigint) => bigint) {
  return (value: number) => value ** (exponent as number);
}
