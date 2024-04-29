import { type MockFunctionHelpers } from './mock-function-helpers';
import { type MockFunctionRecorder } from './mock-function-recorder';

/**
 * Mock function
 *
 * @template FunctionType Function type
 */
export type MockFunction<FunctionType extends (...args: ReadonlyArray<any>) => any> = FunctionType &
  MockFunctionRecorder<FunctionType> &
  MockFunctionHelpers<FunctionType>;
