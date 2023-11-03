import { createEvent, type EventWithMetadata } from '@komore/event';
import { Temporal } from '@komore/temporal';
import { feature } from '@komore/testing';

import { snapshotOnCount } from './snapshot-on-count';

/**
 * Snapshot on count strategy specification
 */
feature('Snapshot on count strategy', () => {
  const AFTER = 'after';
  const AT = 'at';
  const BEFORE = 'before';
  const FIRST = 'first';
  const LAST = 'last';
  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;
  const testNewState: SnapshotStrategyTestState = {
    value: 0,
  };

  it.each([
    [2, AFTER, 3],
    [2, AT, 2],
    [2, BEFORE, 1],
    [2, FIRST, 1],
    [2, LAST, 4],
    [1, BEFORE, false],
    [4, AFTER, false],
    [5, AFTER, false],
    [5, AT, false],
    [5, BEFORE, false],
    [5, FIRST, false],
    [5, LAST, false],
  ])('properly selects the sequence number (count = %s, selection = %s)', (count, selectionType, expectedResult) => {
    given: 'a snapshot on count strategy';
    const snapshotStrategy = snapshotOnCount(count, selectionType);
    when: 'running the strategy';
    const result = snapshotStrategy(testEvents, testNewState, undefined);
    then: 'the correct result is returned';
    expect(result).toBe(expectedResult);
  });

  it.each([0, -1])('throws an error when the number of events is not greater than 0', count => {
    expect: 'a snapshot on count strategy with an event count that is not greater than 0 to throw an error';
    expect(() => snapshotOnCount(count)).toThrowError(
      'a snapshot on count strategy must have a threshold strictly greater than 0 events'
    );
  });
});

function createTestEvent(n: number): EventWithMetadata<any> {
  const event = createEvent('test-event-type')();
  return {
    event,
    metadata: {
      aggregateKey: 'test-aggregate-key',
      sequenceNumber: n,
      size: 0,
      timestamp: Temporal.Now.plainDateTimeISO(),
    },
  };
}

type SnapshotStrategyTestState = Readonly<{
  value: number;
}>;
