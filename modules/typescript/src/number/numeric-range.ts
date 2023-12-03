/**
 * Numeric range
 *
 * @template Start First number in the range
 * @template End Last number in the range
 */
export type NumericRange<Start extends number, End extends number> = NumericRangeRecursive<Start, End, [], never>;

/**
 * Numeric range recursion helper
 *
 * @template Start First number in the range
 * @template End Last number in the range
 * @template State State during recursion
 * @template Accumulator Union being built
 * @private
 */
type NumericRangeRecursive<
  Start extends number,
  End extends number,
  State extends ReadonlyArray<unknown>,
  Accumulator extends number,
> = State['length'] extends End
  ? Start | Accumulator | End
  : NumericRangeRecursive<
      Start,
      End,
      [...State, 1],
      State[Start] extends undefined ? Accumulator : Accumulator | State['length']
    >;
