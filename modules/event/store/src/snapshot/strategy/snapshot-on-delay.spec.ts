import { createEvent } from './create-event';
import { EventWithMetadata } from './event-metadata';
import { Snapshot } from './snapshot';
import { snapshotOnDelay } from './snapshot-on-delay';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Snapshot strategies specifications
 */
describe('Snapshot on delay strategy', () => {
  function createTestEvent(n: number): EventWithMetadata<any> {
    const event = createEvent('test-event-type')();
    return {
      event,
      metadata: {
        aggregateKey: 'test-aggregate-key',
        sequenceNumber: n,
        size: 0,
        timestamp: new Date(`2020-09-01T01:00:00.00${n}Z`)
      }
    };
  }

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;

  type SnapshotStrategyTestState = Readonly<{
    value: number;
  }>;

  const testNewState: SnapshotStrategyTestState = {
    value: 0
  };

  const testCurrentSnapshot: Snapshot<SnapshotStrategyTestState> = {
    aggregateKey: testEvents[1].metadata.aggregateKey,
    sequenceNumber: 0,
    state: {
      value: 0
    },
    timestamp: new Date('2020-09-01T01:00:00.000Z')
  };

  it.each([
    [2, false, SnapshotStrategySelectionType.AFTER, 4],
    [2, true, SnapshotStrategySelectionType.AFTER, 3],
    [2, false, SnapshotStrategySelectionType.AT, 3],
    [2, true, SnapshotStrategySelectionType.AT, 2],
    [2, false, SnapshotStrategySelectionType.BEFORE, 2],
    [2, true, SnapshotStrategySelectionType.BEFORE, 1],
    [2, false, SnapshotStrategySelectionType.FIRST, 1],
    [2, true, SnapshotStrategySelectionType.FIRST, 1],
    [2, false, SnapshotStrategySelectionType.LAST, 4],
    [2, true, SnapshotStrategySelectionType.LAST, 4],
    [3, false, SnapshotStrategySelectionType.AFTER, false],
    [4, false, SnapshotStrategySelectionType.AFTER, false],
    [4, false, SnapshotStrategySelectionType.AT, false],
    [4, false, SnapshotStrategySelectionType.BEFORE, false],
    [4, false, SnapshotStrategySelectionType.FIRST, false],
    [4, false, SnapshotStrategySelectionType.LAST, false]
  ])(
    'properly selects the sequence number (delay = %s, snapshot = %s, selection = %s)',
    (delay, snapshot, selectionType, expectedResult) => {
      // given: a snapshot on delay strategy
      const snapshotStrategy = snapshotOnDelay(delay, selectionType);
      // when: running the strategy
      const result = snapshotStrategy(testEvents, testNewState, snapshot ? testCurrentSnapshot : undefined);
      // then: the correct result is returned
      expect(result).toBe(expectedResult);
    }
  );

  it.each([0, -1])('throws an error when the number of milliseconds is not greater than 0', milliseconds => {
    // expect: a snapshot on delay strategy with a delay that is not greater than 0 to throw an error
    expect(() => snapshotOnDelay(milliseconds)).toThrowError(
      'a snapshot on delay strategy must have a threshold strictly greater than 0 milliseconds'
    );
  });
});
