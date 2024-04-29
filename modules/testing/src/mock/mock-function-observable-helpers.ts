import { type ObservableType } from '@komore/reactive';

import { type MockFunctionReturnValueOptions } from './mock-function-return-value-options';

/**
 * Mock function observable helpers
 *
 * @template FunctionType Function type
 */
export interface MockFunctionObservableHelpers<FunctionType extends (...args: ReadonlyArray<any>) => any> {
  mockObservedValue(
    observedValue: ObservableType<ReturnType<FunctionType>>,
    options?: MockFunctionReturnValueOptions<ObservableType<ReturnType<FunctionType>>>
  ): this;
  mockObservedError(observedError: unknown, options?: unknown): this;
}
