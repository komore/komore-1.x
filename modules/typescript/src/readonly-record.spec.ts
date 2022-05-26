import { feature } from '@komore/testing';
import { expectTypeOf } from 'expect-type';
import { type ReadonlyRecord } from './readonly-record';

feature('Readonly record', {
  'Basic usage'() {
    given: 'keys and a value type';
    type Keys = 'a' | 'b';
    type ValueType = number;

    when: 'defining a record';
    type TestRecord = ReadonlyRecord<Keys, ValueType>;

    expect: 'a record with readonly properties to have been defined';
    expectTypeOf<TestRecord>().toEqualTypeOf<{ readonly a: number; readonly b: number }>();
  }
});
