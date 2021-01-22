import type { EventWithMetadata } from '@komore/event';
import { createEvent } from '@komore/event';
import { snapshotOnCount } from './snapshot-on-count';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Snapshot on count strategy specification
 */
describe('Snapshot on count strategy', () => {
  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;
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
  ])('properly selects the sequence number (count = %s, selection = %s)', (count, selectionType, expectedResult) => {
    given: 'a snapshot on count strategy'
    const snapshotStrategy = snapshotOnCount(count, selectionType);
    when: 'running the strategy'
    const result = snapshotStrategy(testEvents, testNewState, undefined);
    then: 'the correct result is returned'
    expect(result).toBe(expectedResult);
  });

  it.each([0, -1])('throws an error when the number of events is not greater than 0', count => {
    expect: 'a snapshot on count strategy with an event count that is not greater than 0 to throw an error'
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
      timestamp: new Date()
    }
  };
}

type SnapshotStrategyTestState = Readonly<{
  value: number;
}>;
