import { type MockFunction } from './mock-function';

export function mock<FunctionType extends (...args: ReadonlyArray<any>) => any>(
  functionImplementation?: FunctionType
): MockFunction<FunctionType>;

export function mock<MockedType extends (...args: ReadonlyArray<any>) => any>(
  _implementation?: MockedType
): MockFunction<MockedType> {
  // TODO
  return undefined as unknown as MockFunction<MockedType>;
}
