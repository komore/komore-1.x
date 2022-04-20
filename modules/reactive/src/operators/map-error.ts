import { of } from '../creation/of';
import { type OperatorFunction } from '../operator-function';
import { catchError } from './catch-error';

/**
 * Emits a project value whenever the source observable emits an error
 *
 * @param project Projection function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapError<InputType, OutputType>(
  project: (error: unknown) => OutputType
): OperatorFunction<InputType, InputType | OutputType> {
  return catchError(error => of(project(error)));
}
