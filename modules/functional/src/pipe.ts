import { identity } from './identity';
import { type UnaryFunction } from './unary-function';

export function pipe(): typeof identity;
export function pipe<InputType, OutputType>(
  function1: UnaryFunction<InputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<InputType, Function1OutputType, OutputType>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<InputType, Function1OutputType, Function2OutputType, OutputType>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<InputType, Function1OutputType, Function2OutputType, Function3OutputType, OutputType>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  Function5OutputType,
  OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, Function5OutputType>,
  fn6: UnaryFunction<Function5OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  Function5OutputType,
  Function6OutputType,
  OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, Function5OutputType>,
  fn6: UnaryFunction<Function5OutputType, Function6OutputType>,
  fn7: UnaryFunction<Function6OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  Function5OutputType,
  Function6OutputType,
  Function7OutputType,
  OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, Function5OutputType>,
  fn6: UnaryFunction<Function5OutputType, Function6OutputType>,
  fn7: UnaryFunction<Function6OutputType, Function7OutputType>,
  fn8: UnaryFunction<Function7OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  Function5OutputType,
  Function6OutputType,
  Function7OutputType,
  Function8OutputType,
  OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, Function5OutputType>,
  fn6: UnaryFunction<Function5OutputType, Function6OutputType>,
  fn7: UnaryFunction<Function6OutputType, Function7OutputType>,
  fn8: UnaryFunction<Function7OutputType, Function8OutputType>,
  fn9: UnaryFunction<Function8OutputType, OutputType>
): UnaryFunction<InputType, OutputType>;
export function pipe<
  InputType,
  Function1OutputType,
  Function2OutputType,
  Function3OutputType,
  Function4OutputType,
  Function5OutputType,
  Function6OutputType,
  Function7OutputType,
  Function8OutputType,
  Function9OutputType
>(
  fn1: UnaryFunction<InputType, Function1OutputType>,
  fn2: UnaryFunction<Function1OutputType, Function2OutputType>,
  fn3: UnaryFunction<Function2OutputType, Function3OutputType>,
  fn4: UnaryFunction<Function3OutputType, Function4OutputType>,
  fn5: UnaryFunction<Function4OutputType, Function5OutputType>,
  fn6: UnaryFunction<Function5OutputType, Function6OutputType>,
  fn7: UnaryFunction<Function6OutputType, Function7OutputType>,
  fn8: UnaryFunction<Function7OutputType, Function8OutputType>,
  fn9: UnaryFunction<Function8OutputType, Function9OutputType>,
  ...fns: UnaryFunction<unknown, unknown>[]
): UnaryFunction<InputType, unknown>;

/**
 * TODO
 * @param functions
 */
export function pipe(...functions: ReadonlyArray<UnaryFunction<unknown, unknown>>): UnaryFunction<unknown, unknown> {
  if (functions.length === 0) {
    return identity;
  }

  if (functions.length === 1) {
    const [func] = functions as readonly [UnaryFunction<unknown, unknown>];
    return func;
  }

  return input => functions.reduce((prev, func) => func(prev), input);
}
