/**
 * Function that takes two arguments
 * @template ArgumentType1 Argument type 1
 * @template ArgumentType2 Argument type 2
 * @template ResultType Result type
 */
export interface BinaryFunction<ArgumentType1, ArgumentType2, ResultType> {
  (arg1: ArgumentType1, arg2: ArgumentType2): ResultType;
}
