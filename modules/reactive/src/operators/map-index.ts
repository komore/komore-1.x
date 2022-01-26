import { type OperatorFunction } from '../operator-function';
import { map } from './map';

export function mapIndex<InputType, OutputType>(
  project: (index: number, value: InputType) => OutputType
): OperatorFunction<InputType, OutputType> {
  return map((value, index) => project(index, value));
}
