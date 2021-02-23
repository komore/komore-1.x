import { expectTypeOf } from 'expect-type';
import type { Event } from './event';
import type { EventCreator } from './event-creator';

describe('Event creator', () => {
  it('can be defined without properties', () => {
    given: 'an event type name';
    type EventTypeName = 'test-event';
    when: 'defining an event creator for those generic parameters';
    type TestType = EventCreator<EventTypeName>;
    expect: 'the event creator type to feature the event type name';
    expectTypeOf<TestType['type']>().toEqualTypeOf<EventTypeName>();
    and: 'the function to take no parameters and return a matching log event';
    expectTypeOf<Parameters<TestType>>().toEqualTypeOf<[]>();
    expectTypeOf<ReturnType<TestType>>().toEqualTypeOf<Event<EventTypeName>>();
  });

  it('can be defined with properties', () => {
    given: 'an event type name and event properties schema';
    type EventTypeName = 'test-event';
    type EventPropertiesSchema = { test: number };
    when: 'defining an event creator for those generic parameters';
    type TestType = EventCreator<EventTypeName, EventPropertiesSchema>;
    expect: 'the event creator type to feature the event type name';
    expectTypeOf<TestType['type']>().toEqualTypeOf<EventTypeName>();
    and: 'the function to take a properties schema as its input and return a matching log event';
    expectTypeOf<Parameters<TestType>>().toEqualTypeOf<[EventPropertiesSchema]>();
    expectTypeOf<ReturnType<TestType>>().toEqualTypeOf<Event<EventTypeName, EventPropertiesSchema>>();
  });
});
