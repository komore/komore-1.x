import { expectTypeOf } from 'expect-type';
import { type ReadonlyRecord } from './readonly-record';

describe('Readonly record', () => {
  it('creates a record with readonly properties', () => {
    given: 'keys and a value type';
    type Keys = 'a' | 'b';
    type ValueType = number;
    when: 'defining a record';
    type TestRecord = ReadonlyRecord<Keys, ValueType>;
    expect: 'a record with readonly properties to have been defined';
    expectTypeOf<TestRecord>().toEqualTypeOf<{ readonly a: number; readonly b: number }>();
  });
});
