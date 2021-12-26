import { throwError } from '../creation/throw-error';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';
import { catchError } from './catch-error';

/**
 * Catches errors on the observable when a condition is met, returning a new observable or throwing a new error
 * @param predicate Predicate condition that determines whether the error should be caught
 * @param selector Selector function
 * @template InputType Input type
 * @template OutputType Output type
 * @template ErrorType Asserted error type
 */
export function catchErrorIf<InputType, OutputType, ErrorType>(
  predicate: (error: unknown) => error is ErrorType,
  selector: (error: ErrorType, caught: Observable<InputType>) => Observable<OutputType>
): OperatorFunction<InputType, InputType | OutputType>;

/**
 * Catches errors on the observable when a condition is met, returning a new observable or throwing a new error
 * @param predicate Predicate condition that determines whether the error should be caught
 * @param selector Selector function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function catchErrorIf<InputType, OutputType>(
  predicate: (error: unknown) => boolean,
  selector: (error: unknown, caught: Observable<InputType>) => Observable<OutputType>
): OperatorFunction<InputType, InputType | OutputType>;

export function catchErrorIf<InputType, OutputType>(
  predicate: (error: unknown) => boolean,
  selector: (error: unknown, caught: Observable<InputType>) => Observable<OutputType>
): OperatorFunction<InputType, InputType | OutputType> {
  return catchError((error, caught) => {
    if (predicate(error)) {
      return selector(error, caught);
    }

    return throwError(() => error);
  });
}
