import { createEvent } from './create-event';
import { createReducer } from './create-reducer';
import { EventMetadata } from './event-metadata';
import { on } from './event-reducer-on';
import { schema } from './event-schema';

/**
 * Create reducer specification
 */
describe('Create reducer', () => {
  type TestState = {
    stringValue: string;
    numberValue: number;
  };

  const testInitialState: TestState = {
    stringValue: 'test',
    numberValue: 42
  };

  const testEvent = createEvent('test-type', schema<{ additionalNumber: number }>());

  const testEventMetadata: EventMetadata = {
    aggregateKey: 'test',
    sequenceNumber: 1,
    size: 0,
    timestamp: new Date()
  };

  it('can be created with an initial state', () => {
    // given: a reducer with an initial state
    const reducer = createReducer(testInitialState);
    // when: calling the reducer without any argument
    const newState = reducer(undefined, testEvent, testEventMetadata);
    // then: the state is set to the initial state
    expect(newState).toBe(testInitialState);
  });

  it('can be created with an event handler', () => {
    // given: a reducer with an event handler
    const reducer = createReducer(
      testInitialState,
      on(testEvent, (state: typeof testInitialState, { additionalNumber }) => ({
        ...state,
        numberValue: state.numberValue + additionalNumber
      }))
    );
    // when: calling the reducer with an event
    const event = testEvent({ additionalNumber: 4 });
    const newState = reducer(undefined, event, testEventMetadata);
    // then: the state is properly reduced
    expect(newState).not.toBe(undefined);
    expect(newState).not.toBe(testInitialState);
    expect(newState.numberValue).toBe(testInitialState.numberValue + event.additionalNumber);
  });
});
