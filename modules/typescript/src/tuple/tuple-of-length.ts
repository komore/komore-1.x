/**
 * Tuple repeating the same element N times
 *
 * @template T Element type
 * @template N Number of elements in the tuple
 */
export type TupleOfLength<T, N extends number> = TupleOfLengthRecursive<T, N, []>;

/**
 * Tuple repeating the same element N times, recursively
 *
 * @template T Element type
 * @template N Number of elements in the tuple
 * @template State State during recursion
 * @private
 */
type TupleOfLengthRecursive<T, N extends number, State extends ReadonlyArray<unknown>> = State['length'] extends N
  ? State
  : TupleOfLengthRecursive<T, N, [T, ...State]>;
