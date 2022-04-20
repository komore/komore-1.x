import { of } from '../creation/of';
import { type OperatorFunction } from '../operator-function';
import { catchError } from './catch-error';

/**
 * Emits a value whenever the source observable emits an error
 *
 * @param value Value to emit
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapErrorTo<InputType, OutputType>(
  value: OutputType
): OperatorFunction<InputType, InputType | OutputType> {
  return catchError(() => of(value));
}
