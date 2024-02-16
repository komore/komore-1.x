import { createEvent } from '@komore/event';
import { feature } from '@komore/testing';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';
import { snapshotOnCount } from './snapshot-on-count';

feature('Snapshot on count strategy', () => {
  const after = 'after';
  const at = 'at';
  const before = 'before';
  const first = 'first';
  const last = 'last';
  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;
  const testNewState: SnapshotStrategyTestState = {
    value: 0,
  };

  it.each([
    [2, after, 3],
    [2, at, 2],
    [2, before, 1],
    [2, first, 1],
    [2, last, 4],
    [1, before, false],
    [4, after, false],
    [5, after, false],
    [5, at, false],
    [5, before, false],
    [5, first, false],
    [5, last, false],
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

function createTestEvent(n: number): EventWithStoreMetadata<any> {
  const event = createEvent('test-event-type')();
  return {
    event,
    metadata: {
      aggregateKey: 'test-aggregate-key',
      sequenceNumber: n,
      size: 0,
      timestamp: Temporal.Now.instant(),
    },
  };
}

type SnapshotStrategyTestState = Readonly<{
  value: number;
}>;
