import { Temporal } from '@komore/temporal';

import { createEvent } from './create-event';
import { type EventMetadata } from './event-metadata';
import { schema } from './event-schema';
import { onEvent } from './on-event';

/**
 * Event reducer on specification
 */
describe('Event reducer on', () => {
  const eventType = 'test-event-type';
  const eventCreator = createEvent(eventType);
  const eventWithSchemaCreator = createEvent(eventType, schema<{ t: number }>());
  const eventMetadata: EventMetadata = {
    aggregateKey: 'test-key',
    sequenceNumber: 1,
    size: 42,
    timestamp: Temporal.Now.plainDateTimeISO(),
  };

  it('can handle events with no schema', () => {
    given: 'an event and its event reducer';
    const event = eventCreator();
    const fn = jest.fn((state: {}) => state);
    when: 'creating an event reducer on';
    const o = on(eventCreator, fn);
    expect: 'a proper object to have been created';
    expect(o.eventReducer).toBeInstanceOf(Function);
    expect(o.type).toBe(eventType);
    and: 'calling the object to trigger the reducer function';
    const initialState = {};
    const result = o.eventReducer(initialState, event, eventMetadata);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(initialState, event, eventMetadata);
    expect(result).toBe(initialState);
  });

  it('can handle events with a schema', () => {
    // given: an event reducer and an event
    const event = eventWithSchemaCreator({ t: 42 });
    const fn = jest.fn((state: { n: number }, ev: typeof event, _: EventMetadata) => ({ ...state, n: ev.t }));
    // when: creating an event reducer on
    const o = on(eventWithSchemaCreator, fn);
    // then: a proper object is created
    expect(o.eventReducer).toBeInstanceOf(Function);
    expect(o.type).toBe(eventType);
    // and: calling the object triggers the reducer function
    const initialState = { n: 4 };
    const result = o.eventReducer(initialState, event, eventMetadata);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(initialState, event, eventMetadata);
    expect(result).not.toBe(initialState);
    expect(result.n).toBe(event.t);
  });
});
