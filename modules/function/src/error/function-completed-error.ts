/**
 * Function completed error
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 */
export class FunctionCompletedError<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown>
> extends Error {
  readonly functionParameters: FunctionParameterTypes;

  /**
   * Class constructor
   * @param functionName Function name
   * @param functionParameters Function parameters
   */
  constructor(readonly functionName: FunctionName, ...functionParameters: FunctionParameterTypes) {
    super(`Function ${functionName} has completed`);
    this.functionParameters = functionParameters;
    this.name = 'FunctionCompletedError';
  }
}
