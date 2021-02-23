/**
 * Array value type
 * @template ArrayType Array type
 */
export type ArrayValueType<ArrayType extends ArrayLike<unknown>> = ArrayType extends ArrayLike<infer ValueType>
  ? ValueType
  : never;
