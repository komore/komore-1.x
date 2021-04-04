import type { TestScheduler } from 'rxjs/testing';

/**
 * Test scheduler helpers
 */
export interface TestSchedulerHelpers {
  readonly cold: typeof TestScheduler.prototype.createColdObservable;
  readonly hot: typeof TestScheduler.prototype.createHotObservable;
  readonly flush: typeof TestScheduler.prototype.flush;
  readonly time: typeof TestScheduler.prototype.createTime;
  readonly expectObservable: typeof TestScheduler.prototype.expectObservable;
  readonly expectSubscriptions: typeof TestScheduler.prototype.expectSubscriptions;
  readonly animate: (marbles: string) => void;
}
