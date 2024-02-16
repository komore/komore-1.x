import { testDomain } from '@komore/domain/testing';
import { createEventType, eventProperties } from '@komore/event';
import { feature } from '@komore/testing';

import { type EventStoreMetadata } from '../metadata/event-store-metadata';
import { createEventReducer } from './create-event-reducer';
import { onEvent as on } from './on-event';

feature('Create event reducer', () => {
  type TestState = {
    readonly stringValue: string;
    readonly numberValue: number;
  };

  const testInitialState: TestState = {
    stringValue: 'test',
    numberValue: 42,
  };

  const testEvent = createEventType(testDomain, {
    test: eventProperties<{ readonly additionalNumber: number }>(),
  });

  const testEventMetadata: EventStoreMetadata = {
    aggregateKey: 'test',
    sequenceNumber: 1,
    size: 0,
    timestamp: Temporal.Now.instant(),
  };

  it('can be created with an initial state', () => {
    given: 'a reducer with an initial state';
    const reducer = createEventReducer(testInitialState);

    when: 'calling the reducer without any argument';
    const event = testEvent.test({ additionalNumber: 4 });
    const newState = reducer(undefined, event as never, testEventMetadata);

    then: 'the state is set to the initial state';
    newState === testInitialState;
  });

  it('can be created with an event handler', () => {
    given: 'an event reducer with an event handler';
    const eventReducer = createEventReducer(
      testInitialState,
      on(testEvent.test, (state, { additionalNumber }) => ({
        ...state,
        numberValue: state.numberValue + additionalNumber,
      }))
    );

    when: 'calling the reducer with an event';
    const event = testEvent.test({ additionalNumber: 4 });
    const newState = eventReducer(undefined, event, testEventMetadata);

    then: 'the state is properly reduced';
    newState !== undefined;
    newState !== testInitialState;
    newState.numberValue === testInitialState.numberValue + event.properties.additionalNumber;
  });
});
