import { TestScheduler as RxjsTestScheduler } from 'rxjs/testing';
import type { TestScheduler } from './test-scheduler';

/**
 * Creates a test scheduler
 * @returns Test scheduler
 */
export function createTestScheduler(): TestScheduler {
  const testScheduler = new RxjsTestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected);
  });

  return test => () => testScheduler.run(helpers => test(helpers));
}
