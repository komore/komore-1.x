import { type MockFunction } from './mock-function';
import { type MockObject } from './mock-object';

export function mock<FunctionType extends (...args: ReadonlyArray<any>) => any>(
  functionImplementation?: FunctionType
): MockFunction<FunctionType>;

export function mock<ObjectType extends {}>(objectImplementation?: unknown): MockObject<ObjectType>;

export function mock<MockedType extends ((...args: ReadonlyArray<any>) => any) | {}>(
  _implementation?: MockedType
): MockedType extends (...args: ReadonlyArray<any>) => any ? MockFunction<MockedType> : MockObject<MockedType> {
  // TODO
  return undefined as unknown as MockedType extends (...args: ReadonlyArray<any>) => any
    ? MockFunction<MockedType>
    : MockObject<MockedType>;
}
