/**
 * Function that takes a single argument
 * @template ArgumentType Argument type
 * @template ResultType Result type
 */
export interface UnaryFunction<ArgumentType, ResultType> {
  (arg: ArgumentType): ResultType;
}
