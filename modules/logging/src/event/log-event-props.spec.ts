import { expectTypeOf } from '@kmore/testing';

import { type LogEventPropertiesSchema } from './log-event-properties-schema';
import { logEventProps } from './log-event-props';

describe('Log event properties', () => {
  it('can define a log event properties schema', () => {
    given: 'a log event properties type';
    type TestSchema = { test: number };

    when: 'creating a schema';
    const schema = logEventProps<TestSchema>();

    expect: 'the schema to be a log event properties schema for the specified properties type';
    expectTypeOf(schema).toEqualTypeOf<LogEventPropertiesSchema<TestSchema>>();
  });
});
