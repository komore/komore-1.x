import type { OperatorFunction } from '@komore/reactive';
import { map as rxjsMap } from 'rxjs';

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType>;

// TODO: map([toX, toY]) => Observable<[X, Y]>
// TODO: map({x: toX, y: toY}) => Observable<{x: X, y: Y}>
/*export function map<InputType, OutputType extends ReadonlyArray<unknown>>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType>;*/

export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType> {
  if (typeof project === 'function') {
    return rxjsMap(project);
  }

  throw new Error('alternative reactive map operator signatures not implemented');
}
