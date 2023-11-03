import { feature } from '@komore/testing';

import { eventProperties } from './event-properties';
import { type EventPropertiesSchema } from './event-properties-schema';

feature('Event properties', {
  'can define an event properties schema': () => {
    given: 'an event properties type';
    type TestSchema = { test: number };

    when: 'creating a schema';
    const schema = eventProperties<TestSchema>();

    expect: 'the schema to be an event properties schema for the specified properties type';
    typeof schema === EventPropertiesSchema<TestSchema>;
    expectTypeOf(schema).toEqualTypeOf<EventPropertiesSchema<TestSchema>>();
  },
});
