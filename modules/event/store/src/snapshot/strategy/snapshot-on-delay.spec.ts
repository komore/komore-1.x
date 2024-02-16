import { feature } from '@komore/testing';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';
import { type EventStoreSnapshot } from '../event-store-snapshot';
import { snapshotOnDelay } from './snapshot-on-delay';

feature('Snapshot on delay strategy', () => {
  function createTestEvent(n: number): EventWithStoreMetadata<any> {
    const event = createEvent('test-event-type')();
    return {
      event,
      metadata: {
        aggregateKey: 'test-aggregate-key',
        sequenceNumber: n,
        size: 0,
        timestamp: new Date(`2020-09-01T01:00:00.00${n}Z`),
      },
    };
  }

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;

  type SnapshotStrategyTestState = Readonly<{
    value: number;
  }>;

  const testNewState: SnapshotStrategyTestState = {
    value: 0,
  };

  const testCurrentSnapshot: EventStoreSnapshot<SnapshotStrategyTestState> = {
    aggregateKey: testEvents[1].metadata.aggregateKey,
    sequenceNumber: 0,
    state: {
      value: 0,
    },
    timestamp: new Date('2020-09-01T01:00:00.000Z'),
  };

  const after = 'after';
  const at = 'at';
  const before = 'before';
  const first = 'first';
  const last = 'last';

  it.each([
    [2, false, after, 4],
    [2, true, after, 3],
    [2, false, at, 3],
    [2, true, at, 2],
    [2, false, before, 2],
    [2, true, before, 1],
    [2, false, first, 1],
    [2, true, first, 1],
    [2, false, last, 4],
    [2, true, last, 4],
    [3, false, after, false],
    [4, false, after, false],
    [4, false, at, false],
    [4, false, before, false],
    [4, false, first, false],
    [4, false, last, false],
  ])(
    'properly selects the sequence number (delay = %s, snapshot = %s, selection = %s)',
    (delay, snapshot, selectionType, expectedResult) => {
      given: 'a snapshot on delay strategy';
      const snapshotStrategy = snapshotOnDelay(delay, selectionType);

      when: 'running the strategy';
      const result = snapshotStrategy(testEvents, testNewState, snapshot ? testCurrentSnapshot : undefined);

      then: 'the correct result is returned';
      expect(result).toBe(expectedResult);
    }
  );

  it.each([0, -1])('throws an error when the number of milliseconds is not greater than 0', milliseconds => {
    expect: 'a snapshot on delay strategy with a delay that is not greater than 0 to throw an error';
    expect(() => snapshotOnDelay(milliseconds)).toThrowError(
      'a snapshot on delay strategy must have a threshold strictly greater than 0 milliseconds'
    );
  });
});
