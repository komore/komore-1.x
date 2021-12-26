import { expectTypeOf } from 'expect-type';
import { type LogEventPropertiesSchema } from './log-event-properties-schema';
import { props } from './props';

describe('Properties (logging)', () => {
  it('can define a log event properties schema', () => {
    given: 'a log event properties type';
    type TestSchema = { test: number };
    when: 'creating a schema';
    const schema = props<TestSchema>();
    expect: 'the schema to be a log event properties schema for the specified properties type';
    expectTypeOf(schema).toEqualTypeOf<LogEventPropertiesSchema<TestSchema>>();
  });
});
