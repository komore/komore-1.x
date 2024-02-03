import { createEvent } from './create-event';
import { createEventReducer } from './create-event-reducer';
import { type EventMetadata } from './event-metadata';
import { onEvent } from './event-reducer-on';
import { eventProperties } from './event-properties';

/**
 * Create reducer specification
 */
describe('Create event reducer', () => {
  type TestState = {
    stringValue: string;
    numberValue: number;
  };

  const testInitialState: TestState = {
    stringValue: 'test',
    numberValue: 42,
  };

  const testEvent = createEvent('test-type', schema<{ additionalNumber: number }>());

  const testEventMetadata: EventMetadata = {
    aggregateKey: 'test',
    sequenceNumber: 1,
    size: 0,
    timestamp: Temporal.Now.plainDateTimeISO(),
  };

  it('can be created with an initial state', () => {
    // given: a reducer with an initial state
    const reducer = createEventReducer(testInitialState);
    // when: calling the reducer without any argument
    const newState = reducer(undefined, testEvent, testEventMetadata);
    // then: the state is set to the initial state
    expect(newState).toBe(testInitialState);
  });

  it('can be created with an event handler', () => {
    // given: an event reducer with an event handler
    const eventReducer = createEventReducer(
      testInitialState,
      on(testEvent, (state: typeof testInitialState, { additionalNumber }) => ({
        ...state,
        numberValue: state.numberValue + additionalNumber,
      }))
    );
    // when: calling the reducer with an event
    const event = testEvent({ additionalNumber: 4 });
    const newState = eventReducer(undefined, event, testEventMetadata);
    // then: the state is properly reduced
    expect(newState).not.toBe(undefined);
    expect(newState).not.toBe(testInitialState);
    expect(newState.numberValue).toBe(testInitialState.numberValue + event.additionalNumber);
  });
});
