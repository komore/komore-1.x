import { expectTypeOf } from 'expect-type';
import type { EventPropertiesSchema } from './event-properties-schema';
import { props } from './props';

describe('Properties (event)', () => {
  it('can define an event properties schema', () => {
    given: 'an event properties type';
    type TestSchema = { test: number };
    when: 'creating a schema';
    const schema = props<TestSchema>();
    expect: 'the schema to be an event properties schema for the specified properties type';
    expectTypeOf(schema).toEqualTypeOf<EventPropertiesSchema<TestSchema>>();
  });
});
