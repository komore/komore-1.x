import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';

/**
 * Maps a value to an error, if the value matches a condition
 *
 * @param predicate Predicate function that determines the condition
 * @param errorFactory Error factory
 * @template ValueType Value type
 */
export function mapToErrorIf<ValueType, ConditionalValueType extends ValueType>(
  predicate: (value: ValueType) => value is ConditionalValueType,
  errorFactory?: (value: ConditionalValueType) => unknown
): MonoTypeOperatorFunction<ValueType>;

/**
 * Maps a value to an error, if the value matches a condition
 *
 * @param predicate Predicate function that determines the condition
 * @param errorFactory Error factory
 * @template ValueType Value type
 */
export function mapToErrorIf<ValueType>(
  predicate: (value: ValueType) => boolean,
  errorFactory?: (value: ValueType) => unknown
): MonoTypeOperatorFunction<ValueType>;

export function mapToErrorIf<ValueType>(
  predicate: (value: ValueType) => boolean,
  errorFactory?: (value: ValueType) => unknown
): MonoTypeOperatorFunction<ValueType> {
  return map(value => {
    if (predicate(value)) {
      const error = errorFactory !== undefined ? errorFactory(value) : value;
      throw error;
    }

    return value;
  });
}
