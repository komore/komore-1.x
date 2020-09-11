import { createEvent } from './create-event';
import { isEventType } from './is-event-type';

/**
 * Is event type specification
 */
describe('Is event type', () => {
  it('returns true when a type matches', () => {
    // given: event types
    const eventType1 = createEvent('event-type-1');
    const eventType2 = createEvent('event-type-2');
    // and: an event
    const event = eventType1();
    // when: testing the event type
    const isEventType1 = isEventType(event, eventType1);
    const isEventType2 = isEventType(event, eventType2);
    // expect: the type to be correctly matched
    expect(isEventType1).toBe(true);
    expect(isEventType2).toBe(false);
  });
});
