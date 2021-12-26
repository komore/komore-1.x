import { expectTypeOf } from 'expect-type';
import { type Event } from './event';

describe('Event', () => {
  it('can be defined without properties', () => {
    given: 'an event type without properties';
    type TestEventType = 'test-type';
    type TestEvent = Event<TestEventType>;
    expect: 'the interface to correctly expose all property types';
    expectTypeOf<TestEvent['type']>().toEqualTypeOf<TestEventType>();
  });
});
