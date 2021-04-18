/**
 * Function trigger
 * @template FunctionReturnType Function return type
 * @template FunctionParameterTypes Function parameter types
 * @template ProcessedFuncitonParameterTypes Processed function parameter types
 */
export type FunctionTrigger<
  FunctionReturnType,
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  ProcessedFunctionParameterTypes extends ReadonlyArray<unknown> = FunctionParameterTypes
> = Readonly<{
  _ReturnType: FunctionReturnType;
}> &
  ((...functionParameters: FunctionParameterTypes) => ProcessedFunctionParameterTypes);

/**
 * Function trigger parameter types
 */
export type FunctionTriggerParameterTypes<FunctionTriggerType> = FunctionTriggerType extends FunctionTrigger<
  unknown,
  infer FunctionParameterTypes,
  ReadonlyArray<unknown>
>
  ? FunctionParameterTypes
  : never;
