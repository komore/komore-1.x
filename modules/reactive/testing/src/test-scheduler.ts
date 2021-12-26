import { type TestSchedulerHelpers } from './test-scheduler-helpers';

/**
 * Test scheduler
 */
export interface TestScheduler {
  <T>(test: (helpers: TestSchedulerHelpers) => T): () => void;
}
