/**
 * Creates a function that immediately returns
 *
 * - The function behaves like an *identity function* if it takes parameters
 * - The function behaves like a *noop function* if it does not take parameters
 * @param functionName Function name
 * @returns Function
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 */
export function createImmediateFunction<FunctionName extends string, FunctionParameterTypes extends ReadonlyArray<any>>(
  functionName: FunctionName
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionParameterTypes | void> {
  const wrapper = {
    [functionName](...functionParameters: FunctionParameterTypes): Promise<FunctionParameterTypes | void> {
      if (functionParameters.length > 0) {
        return Promise.resolve(functionParameters);
      } else {
        return Promise.resolve();
      }
    }
  };

  return wrapper[functionName];
}
