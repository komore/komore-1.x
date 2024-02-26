import { type FunctionCallInformation } from './function-call-information';

/**
 * Function value
 *
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
export interface FunctionValue<FunctionParameterTypes extends ReadonlyArray<unknown>, FunctionReturnType>
  extends FunctionCallInformation<FunctionParameterTypes, FunctionReturnType> {
  readonly index: number;
  readonly result?: FunctionReturnType;
  readonly error?: unknown;
}
