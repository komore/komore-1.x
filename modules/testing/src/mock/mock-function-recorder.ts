import { type MockFunctionRecordedInvocation } from './mock-function-recorded-invocation';

/**
 * Mock function recorder
 *
 * @template FunctionType Function type
 */
export interface MockFunctionRecorder<FunctionType extends (...args: ReadonlyArray<any>) => any> {
  readonly invocations: ReadonlyArray<MockFunctionRecordedInvocation<FunctionType>>;
}
