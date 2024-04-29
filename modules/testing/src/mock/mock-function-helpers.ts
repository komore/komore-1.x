import { type MockFunctionObservableHelpers } from './mock-function-observable-helpers';
import { type MockFunctionReturnValueOptions } from './mock-function-return-value-options';

/**
 * Mock function helpers
 *
 * @template FunctionType Function type
 */
export interface MockFunctionHelpers<FunctionType extends (...args: ReadonlyArray<any>) => any>
  extends MockFunctionObservableHelpers<FunctionType> {
  mockReturnValue(
    returnValue: ReturnType<FunctionType>,
    options?: MockFunctionReturnValueOptions<ReturnType<FunctionType>>
  ): void;
  mockThrownError(thrownError: unknown, options?: unknown): void;
}
