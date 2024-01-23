/**
 * Iterable value type
 *
 * @template IterableType Iterable type
 */
export type IterableValueType<IterableType extends Iterable<unknown> | AsyncIterable<unknown>> =
  IterableType extends Iterable<infer ValueType>
    ? ValueType
    : IterableType extends AsyncIterable<infer ValueType>
      ? ValueType
      : never;
