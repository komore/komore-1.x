import { type MockFunctionRecorder } from './mock-function-recorder';

/**
 * Mock function
 *
 * @template FunctionType Function type
 */
export type MockFunction<FunctionType extends (...args: ReadonlyArray<any>) => any> =
  MockFunctionRecorder<FunctionType> & ((...parameters: Parameters<FunctionType>) => number);
