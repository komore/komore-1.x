import type { TestMutationObserver } from './test-mutation-observer';

/**
 * Test mutation observer registry
 */
export interface TestMutationObserverRegistry {
  readonly observers: ReadonlyArray<TestMutationObserver>;

  /**
   * Clears the list of registered test mutation observers
   */
  clear(): void;
}

/**
 * Test mutation observer registry implementation
 */
export class TestMutationObserverRegistryImpl implements TestMutationObserverRegistry {
  private readonly _observers: Array<TestMutationObserver> = [];

  get observers(): ReadonlyArray<TestMutationObserver> {
    return this._observers;
  }

  /**
   * Clears the list of observers
   */
  clear(): void {
    this._observers.splice(0, this.observers.length);
  }

  /**
   * Registers a test mutation observer
   * @param testMutationObserver Test mutation observer
   */
  registerObserver(testMutationObserver: TestMutationObserver): void {
    this._observers.push(testMutationObserver);
  }
}

/**
 * Test mutation observer registry
 */
export const testMutationObserverRegistry = new TestMutationObserverRegistryImpl();
