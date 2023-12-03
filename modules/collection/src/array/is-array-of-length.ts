import { type NumericRange, type TupleOfLength } from '@komore/typescript';

/**
 * Creates a function that tests whether an array is of a specific length
 *
 * @param length Length
 * @returns Function that tests whether an array is of length `length`
 * @template N Length
 */
export function isArrayOfLength<N extends NumericRange<0, 10>>(
  length: N
): <T>(array: ReadonlyArray<T>) => array is TupleOfLength<T, N>;

/**
 * Creates a function that tests whether an array is of a specific length
 *
 * @param length Length
 * @returns Function that tests whether an array is of length `length`
 */
export function isArrayOfLength(length: number): (array: ReadonlyArray<unknown>) => boolean;

export function isArrayOfLength(length: number): (array: ReadonlyArray<unknown>) => boolean {
  return array => length === array.length;
}
