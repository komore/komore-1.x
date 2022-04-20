import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Applies a mapping function to each element of the value emitted by the source observable, and emits those mapped
 * values
 *
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapEach<InputType, OutputType>(
  project: (value: InputType, elementIndex: number, index: number) => OutputType
): OperatorFunction<ReadonlyArray<InputType>, Array<OutputType>> {
  return map((array, index) => array.map((value, elementIndex) => project(value, elementIndex, index)));
}
