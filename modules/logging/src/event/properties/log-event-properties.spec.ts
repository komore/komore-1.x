import { feature } from '@komore/testing';

import { logEventProperties } from './log-event-properties';
import { type LogEventPropertiesSchema } from './log-event-properties-schema';

feature('Log event properties', {
  'can define a log event properties schema': () => {
    given: 'a log event properties type';
    type TestSchema = { test: number };

    when: 'creating a schema';
    const schema = logEventProperties<TestSchema>();

    expect: 'the schema to be a log event properties schema for the specified properties type';
    typeof schema === LogEventPropertiesSchema<TestSchema>;
    expectTypeOf(schema).toEqualTypeOf<EventPropertiesSchema<TestSchema>>();
  },
});
