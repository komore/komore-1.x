/**
 * Function completed error
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 */
export class FunctionCompletedError<FunctionName extends string, FunctionParameterTypes extends ReadonlyArray<unknown>>
  implements Error {
  readonly functionParameters: FunctionParameterTypes;
  readonly name = 'komore.function.completed';
  readonly message: string;

  /**
   * Class constructor
   * @param functionName Function name
   * @param functionParameters Function parameters
   */
  constructor(readonly functionName: FunctionName, ...functionParameters: FunctionParameterTypes) {
    this.functionParameters = functionParameters;
    this.message = `Function ${functionName} has completed`;
  }
}
