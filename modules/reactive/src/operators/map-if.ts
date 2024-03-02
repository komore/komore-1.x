import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Maps a value if it matches a condition
 *
 * @param predicate Predicate function that determines the condition
 * @param project Mapping function
 * @returns Operation function that matches a value if it matches a condition
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapIf<InputType, ConditionalInputType extends InputType, OutputType>(
  predicate: (value: InputType) => value is ConditionalInputType,
  project: (value: ConditionalInputType) => OutputType
): OperatorFunction<InputType, InputType | OutputType>;

/**
 * Maps a value if it matches a condition
 *
 * @param predicate Predicate function that determines the condition
 * @param project Mapping function
 * @returns Operation function that matches a value if it matches a condition
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapIf<InputType, OutputType>(
  predicate: (value: InputType) => boolean,
  project: (value: InputType) => OutputType
): OperatorFunction<InputType, InputType | OutputType>;

export function mapIf<InputType, OutputType>(
  predicate: (value: InputType) => boolean,
  project: (value: InputType) => OutputType
): OperatorFunction<InputType, InputType | OutputType> {
  return map(value => (predicate(value) ? project(value) : value));
}
