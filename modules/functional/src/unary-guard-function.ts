/**
 * Function that takes a single argument and guards its type
 *
 * @template ArgumentType Argument type
 * @template ResultType Result type
 */
export interface UnaryGuardFunction<ArgumentType, ResultType extends ArgumentType> {
  (arg: ArgumentType): arg is ResultType;
}
