import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Map to an error
 * @param errorFactory Error factory
 * @template T Value type
 */
export function mapToError<T>(errorFactory?: (value: T) => unknown): OperatorFunction<T, never> {
  return map(value => {
    const error = errorFactory !== undefined ? errorFactory(value) : value;
    throw error;
  });
}
