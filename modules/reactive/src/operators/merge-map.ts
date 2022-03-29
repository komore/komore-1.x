import { mergeMap as rxjsMergeMap } from 'rxjs';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';

/**
 * Projects each source value to an observable that gets merged into the output observable
 * @param project Projection function that returns the observable that needs to be merged
 * @param concurrent Optional maximum number of active subscriptions, defaults to no limit
 */
export function mergeMap<InputType, OutputType>(
  project: (value: InputType, index: number) => Observable<OutputType>,
  concurrent?: number
): OperatorFunction<InputType, OutputType> {
  return rxjsMergeMap(project, concurrent);
}
// TODO: only accept observable, making fromArray/etc explicit
