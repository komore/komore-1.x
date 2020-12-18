/**
 * Function trigger
 * @template FunctionReturnType Function return type
 * @template FunctionParameterTypes Function parameter types
 */
export type FunctionTrigger<
  FunctionReturnType,
  FunctionParameterTypes extends ReadonlyArray<any>,
  ProcessedFunctionParameterTypes extends ReadonlyArray<any> = FunctionParameterTypes
> = Readonly<{
  _ReturnType: FunctionReturnType;
}> &
  ((...functionParameters: FunctionParameterTypes) => ProcessedFunctionParameterTypes);

export type FunctionTriggerParameterTypes<FunctionTriggerType> = FunctionTriggerType extends FunctionTrigger<
  any,
  infer FunctionParameterTypes,
  any
>
  ? FunctionParameterTypes
  : never;
