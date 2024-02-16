import { createEvent } from '@komore/event';
import { feature } from '@komore/testing';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';
import { snapshotOnSize } from './snapshot-on-size';

feature('Snapshot on size strategy', () => {
  function createTestEvent(n: number): EventWithStoreMetadata<any> {
    const event = createEvent('test-event-type')();
    return {
      event,
      metadata: {
        aggregateKey: 'test-aggregate-key',
        sequenceNumber: n,
        size: 1,
        timestamp: Temporal.Now.plainDateTimeISO(),
      },
    };
  }

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;

  interface SnapshotStrategyTestState {
    readonly value: number;
  }

  const testNewState: SnapshotStrategyTestState = {
    value: 0,
  };

  const after = 'after';
  const at = 'at';
  const before = 'before';
  const first = 'first';
  const last = 'last';

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
  ])('properly selects the sequence number (bytes = %s, selection = %s)', (bytes, selectionType, expectedResult) => {
    given: 'a snapshot on size strategy';
    const snapshotStrategy = snapshotOnSize(bytes, selectionType);

    when: 'running the strategy';
    const result = snapshotStrategy(testEvents, testNewState, undefined);

    expect: 'the correct result to be returned';
    expect(result).toBe(expectedResult);
  });

  it.each([0, -1])('throws an error when the size is not greater than 0', bytes => {
    expect: 'a snapshot on size strategy with a size that is not greater than 0 to throw an error';
    expect(() => snapshotOnSize(bytes)).toThrowError(
      'a snapshot on size strategy must have a threshold strictly greater than 0 bytes'
    );
  });
});
