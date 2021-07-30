import type { OperatorFunction } from '@komore/reactive';
import { map as rxjsMap } from 'rxjs';

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 * @template InputType Input type
 * @template OutputType Output type
 */
export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType> {
  return rxjsMap(project);
}
