import { expand as rxjsExpand } from 'rxjs';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';
import { type SchedulerLike } from '../scheduler/scheduler-like';

/**
 * Recursively projects each source value to an observable that gets merged in the output observable
 * @param project Projection function
 * @param concurrent Maximum number of inputs being subscribed to concurrently
 * @param scheduler Scheduler
 */
export function expand<InputType, OutputType>(
  project: (value: InputType, index: number) => Observable<OutputType>,
  concurrent?: number,
  scheduler?: SchedulerLike
): OperatorFunction<InputType, OutputType> {
  return rxjsExpand<InputType, Observable<OutputType>>(project, concurrent, scheduler);
}
