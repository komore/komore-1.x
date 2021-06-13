import type { ObservableInput, ObservableInputType, OperatorFunction } from '@komore/reactive';
import { mergeMap as rxjsMergeMap } from 'rxjs/operators';

/**
 * Projects each source value to an observable that gets merged into the output observable
 * @param project Projection function that returns the observable that needs to be merged
 * @param concurrent Optional maximum number of active subscriptions, defaults to no limit
 */
export function mergeMap<InputType, OutputType extends ObservableInput<unknown>>(
  project: (value: InputType, index: number) => OutputType,
  concurrent?: number
): OperatorFunction<InputType, ObservableInputType<OutputType>> {
  return rxjsMergeMap(project, concurrent);
}
// TODO: only accept observable, making fromArray/etc explicit
