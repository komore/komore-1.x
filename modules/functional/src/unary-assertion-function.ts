/**
 * Function that takes a single argument and asserts its type
 *
 * @template ArgumentType Argument type
 * @template ResultType Result type
 */
export interface UnaryAssertionFunction<ArgumentType, ResultType extends ArgumentType> {
  (arg: ArgumentType): asserts arg is ResultType;
}
