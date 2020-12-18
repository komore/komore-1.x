import { createEvent } from './create-event';
import { EventWithMetadata } from './event-metadata';
import { snapshotOnEvent } from './snapshot-on-event';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Snapshot on event strategy specification
 */
describe('Snapshot on event strategy', () => {
  function createTestEvent(n: number): EventWithMetadata<any> {
    const event = createEvent(`test-event-type-${n}`)();
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

  const testEvents = [createTestEvent(1), createTestEvent(2), createTestEvent(3), createTestEvent(4)] as const;
  const testEventCreator = createEvent('test-event-type-2');

  type SnapshotStrategyTestState = Readonly<{
    value: number;
  }>;

  const testNewState: SnapshotStrategyTestState = {
    value: 0
  };

  it.each([
    [['test-event-type-2'], SnapshotStrategySelectionType.AFTER, 3],
    [['test-event-type-2'], SnapshotStrategySelectionType.AT, 2],
    [['test-event-type-2'], SnapshotStrategySelectionType.BEFORE, 1],
    [['test-event-type-2'], SnapshotStrategySelectionType.FIRST, 1],
    [['test-event-type-2'], SnapshotStrategySelectionType.LAST, 4],
    [['test-event-type-1'], SnapshotStrategySelectionType.BEFORE, false],
    [['test-event-type-4'], SnapshotStrategySelectionType.AFTER, false],
    [['test-event-type-3', 'test-event-type-2'], SnapshotStrategySelectionType.AFTER, 3],
    [['test-event-type-3', 'test-event-type-2'], SnapshotStrategySelectionType.AT, 2],
    [['test-event-type-3', 'test-event-type-2'], SnapshotStrategySelectionType.BEFORE, 1],
    [['test-event-type-3', 'test-event-type-2'], SnapshotStrategySelectionType.FIRST, 1],
    [['test-event-type-3', 'test-event-type-2'], SnapshotStrategySelectionType.LAST, 4],
    [[testEventCreator], SnapshotStrategySelectionType.AFTER, 3],
    [[testEventCreator], SnapshotStrategySelectionType.AT, 2],
    [[testEventCreator], SnapshotStrategySelectionType.BEFORE, 1],
    [[testEventCreator], SnapshotStrategySelectionType.FIRST, 1],
    [[testEventCreator], SnapshotStrategySelectionType.LAST, 4],
    [['unknown'], SnapshotStrategySelectionType.AFTER, false],
    [['unknown'], SnapshotStrategySelectionType.AT, false],
    [['unknown'], SnapshotStrategySelectionType.BEFORE, false],
    [['unknown'], SnapshotStrategySelectionType.FIRST, false],
    [['unknown'], SnapshotStrategySelectionType.LAST, false]
  ])('properly selects the sequence number (count = %s, selection = %s)', (events, selectionType, expectedResult) => {
    // given: a snapshot on size strategy
    const snapshotStrategy = snapshotOnEvent(events, selectionType);
    // when: running the strategy
    const result = snapshotStrategy(testEvents, testNewState, undefined);
    // then: the correct result is returned
    expect(result).toBe(expectedResult);
  });

  it('throws an error when no event types are provided', () => {
    // expect: a snapshot on event strategy with no event type to throw an error
    expect(() => snapshotOnEvent([])).toThrowError(
      'a snapshot on event strategy must have at least one event type specified'
    );
  });
});
