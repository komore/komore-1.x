/**
 * Function trigger
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 * @template InputType Input type
 * @template ResultType Result type
 */
export interface FunctionTrigger<
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  FunctionReturnType,
  InputType = FunctionParameterTypes,
  ResultType = unknown
> {
  buildInputs(...parameters: FunctionParameterTypes): [supported: true, input: InputType];
  buildInputs(...parameters: FunctionParameterTypes): [supported: false];
  buildReturn(result: ResultType): FunctionReturnType;
}
