import { type MockFunctionRecordedInvocation } from './mock-function-recorded-invocation';

export interface MockFunctionRecorder<FunctionType extends (...args: ReadonlyArray<any>) => any> {
  readonly invocations: ReadonlyArray<MockFunctionRecordedInvocation<FunctionType>>;
}
