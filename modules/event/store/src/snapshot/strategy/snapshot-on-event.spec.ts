import { feature } from '@komore/testing';

import { type EventWithStoreMetadata } from '../../metadata/event-store-metadata';
import { snapshotOnEvent } from './snapshot-on-event';
import { createEventType, eventProperties } from '@komore/event';
import { testDomain } from '@komore/domain/testing';

feature('Snapshot on event', () => {
  const after = 'after';
  const at = 'at';
  const before = 'before';
  const first = 'first';
  const last = 'last';

  const testEvent = createEventType(testDomain, {
    test1: eventProperties(),
    test2: eventProperties(),
    test3: eventProperties(),
    test4: eventProperties(),
  });

  function createTestEvent(n: 1 | 2 | 3 | 4): EventWithStoreMetadata<any> {
    const event = testEvent[`test${n}`]();
    return {
      event,
      metadata: {
        aggregateKey: 'test-aggregate-key',
        sequenceNumber: n,
        size: 0,
        timestamp: new Date(),
      },
    };
  }

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;
  const testEventCreator = testEvent.test2;

  type SnapshotStrategyTestState = Readonly<{
    value: number;
  }>;

  const testNewState: SnapshotStrategyTestState = {
    value: 0,
  };

  it.each([
    [['test-event-type-2'], after, 3],
    [['test-event-type-2'], at, 2],
    [['test-event-type-2'], before, 1],
    [['test-event-type-2'], first, 1],
    [['test-event-type-2'], last, 4],
    [['test-event-type-1'], before, false],
    [['test-event-type-4'], after, false],
    [['test-event-type-3', 'test-event-type-2'], after, 3],
    [['test-event-type-3', 'test-event-type-2'], at, 2],
    [['test-event-type-3', 'test-event-type-2'], before, 1],
    [['test-event-type-3', 'test-event-type-2'], first, 1],
    [['test-event-type-3', 'test-event-type-2'], last, 4],
    [[testEventCreator], after, 3],
    [[testEventCreator], at, 2],
    [[testEventCreator], before, 1],
    [[testEventCreator], first, 1],
    [[testEventCreator], last, 4],
    [['unknown'], after, false],
    [['unknown'], at, false],
    [['unknown'], before, false],
    [['unknown'], first, false],
    [['unknown'], last, false],
  ])('properly selects the sequence number (count = %s, selection = %s)', (events, selectionType, expectedResult) => {
    given: 'a snapshot on size strategy';
    const snapshotStrategy = snapshotOnEvent(events, selectionType);

    when: 'running the strategy';
    const result = snapshotStrategy(testEvents, testNewState, undefined);

    then: 'the correct result is returned';
    expect(result).toBe(expectedResult);
  });

  it('throws an error when no event types are provided', () => {
    // expect: a snapshot on event strategy with no event type to throw an error
    expect(() => snapshotOnEvent([])).toThrowError(
      'a snapshot on event strategy must have at least one event type specified'
    );
  });
});
