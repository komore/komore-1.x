import { map as rxjsMap } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType> {
  return rxjsMap(project);
}
