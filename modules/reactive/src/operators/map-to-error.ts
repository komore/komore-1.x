import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Maps a value to an error
 *
 * @param errorFactory Error factory
 * @template ValueType Value type
 */
export function mapToError<ValueType>(
  errorFactory?: (value: ValueType) => unknown
): OperatorFunction<ValueType, never> {
  return map(value => {
    const error = errorFactory !== undefined ? errorFactory(value) : value;
    throw error;
  });
}
