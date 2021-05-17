import type { EventWithMetadata } from '@komore/event';
import { createEvent } from '@komore/event';
import { snapshotOnSize } from './snapshot-on-size';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Snapshot on size strategy specification
 */
describe('Snapshot on size strategy', () => {
  function createTestEvent(n: number): EventWithMetadata<any> {
    const event = createEvent('test-event-type')();
    return {
      event,
      metadata: {
        aggregateKey: 'test-aggregate-key',
        sequenceNumber: n,
        size: 1,
        timestamp: new Date()
      }
    };
  }

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;

  interface SnapshotStrategyTestState {
    readonly value: number;
  }

  const testNewState: SnapshotStrategyTestState = {
    value: 0
  };

  it.each([
    [2, SnapshotStrategySelectionType.AFTER, 3],
    [2, SnapshotStrategySelectionType.AT, 2],
    [2, SnapshotStrategySelectionType.BEFORE, 1],
    [2, SnapshotStrategySelectionType.FIRST, 1],
    [2, SnapshotStrategySelectionType.LAST, 4],
    [1, SnapshotStrategySelectionType.BEFORE, false],
    [4, SnapshotStrategySelectionType.AFTER, false],
    [5, SnapshotStrategySelectionType.AFTER, false],
    [5, SnapshotStrategySelectionType.AT, false],
    [5, SnapshotStrategySelectionType.BEFORE, false],
    [5, SnapshotStrategySelectionType.FIRST, false],
    [5, SnapshotStrategySelectionType.LAST, false]
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
