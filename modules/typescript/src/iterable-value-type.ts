/**
 * Iterable value type
 * @template IterableType Iterable type
 */
export type IterableValueType<IterableType extends Iterable<unknown>> = IterableType extends Iterable<infer ValueType>
  ? ValueType
  : never;
