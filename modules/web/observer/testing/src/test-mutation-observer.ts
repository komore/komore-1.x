import { isDefined } from '@komore/functional';
import type { FunctionMock } from '@komore/testing';
import { testMutationObserverRegistry } from './test-mutation-observer-registry';

/**
 * Test mutation observer
 *
 * ```ts
 * global.MutationObserver = TestMutationObserver;
 * ```
 */
export class TestMutationObserver implements MutationObserver {
  private readonly mutationRecords: Array<MutationRecord> = [];
  private targets = new WeakMap<Node, MutationObserverInit | null>();

  readonly events: Readonly<{
    disconnect: FunctionMock<MutationObserver['disconnect']>;
    observe: FunctionMock<MutationObserver['observe']>;
    takeRecords: FunctionMock<MutationObserver['takeRecords']>;
  }> = {
    disconnect: jest.fn(),
    observe: jest.fn(),
    takeRecords: jest.fn()
  };

  /**
   * Class constructor
   * @param callback Callback function
   */
  constructor(private readonly callback: MutationCallback) {
    testMutationObserverRegistry.registerObserver(this);
  }

  /**
   * Stops observing mutations
   */
  disconnect(): void {
    this.events.disconnect();
    this.clearTargets();
  }

  /**
   * Observes a given target and report any mutations based on the criteria given by options
   */
  observe(target: Node, options?: MutationObserverInit): void {
    this.events.observe(target, options);
    this.targets.set(target, options ?? null);
  }

  /**
   * Empties the record queue and returns what was in there
   */
  takeRecords(): MutationRecord[] {
    this.events.takeRecords();
    return this.mutationRecords;
  }

  /**
   * Clears the mutation observer
   */
  clear(): void {
    this.clearTargets();
    this.clearEvents();
    this.mutationRecords.splice(0, this.mutationRecords.length);
  }

  /**
   * Emits a mutation record to any observer
   * @param mutationRecord Mutation record
   */
  next(...mutationRecords: ReadonlyArray<MutationRecord>): void {
    // TODO: check target against this.targets?
    const records = mutationRecords
      .map(filterMutationRecords(this.targets))
      .filter(isDefined)
    ;

    if (records.length > 0) {
      this.mutationRecords.push(...records);
      this.callback(records, this);
    }
  }

  /**
   * Clears the event mock functions
   */
  private clearEvents(): void {
    for (const mockFunction of Object.values(this.events)) {
      mockFunction.mockClear();
    }
  }

  /**
   * Clears the targets
   */
  private clearTargets(): void {
    this.targets = new WeakMap<Node, MutationObserverInit | null>();
  }
}

/**
 * Filters mutation records based on the observer's target options
 * @param targetOptionsMap Target options map
 */
function filterMutationRecords(targetOptionsMap: WeakMap<Node, MutationObserverInit | null>) {
  return (mutationRecord: MutationRecord) => {
    const target = mutationRecord.target;
    const targetOptions = targetOptionsMap.get(target);
    if (targetOptions === undefined) {
      return undefined;
    }

    // TODO: targetOptions being null == default options

    return mutationRecord;
  };
}
