/**
 * Mock function recorded invocation
 *
 * @template FunctionType Function type
 */
export interface MockFunctionRecordedInvocation<FunctionType extends (...args: ReadonlyArray<any>) => any> {
  /**
   * Parameters
   */
  readonly parameters: Parameters<FunctionType>;
  /**
   * Return value
   */
  readonly returnValue: ReturnType<FunctionType>;
}
