import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Maps an emitted value's index
 *
 * @param project Projection function that maps the index to a new value
 * @returns Operator function that passes a value's index to a mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapIndex<InputType, OutputType>(
  project: (index: number, value: InputType) => OutputType
): OperatorFunction<InputType, OutputType> {
  return map((value, index) => project(index, value));
}
