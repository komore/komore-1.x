/**
 * Function call information
 *
 * @template FunctionParameterTypes Function parameter t ypes
 * @template FunctionReturnType Function return type
 */
export interface FunctionCallInformation<FunctionParameterTypes extends ReadonlyArray<unknown>, FunctionReturnType> {
  readonly emitted?: boolean;
  readonly functionParameters: FunctionParameterTypes;
  reject: (error: unknown) => void;
  resolve: (value: FunctionReturnType | void) => void;
}
