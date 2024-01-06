import { of } from '../creation/of';
import { type Observable } from '../observable';
import { type ObservableInput } from '../observable-input';
import { type OperatorFunction } from '../operator-function';
import { catchErrorIf } from './catch-error-if';

/**
 * Maps errors on the observable when a condition is met
 *
 * @param predicate Predicate condition that determines whether the error should be caught
 * @param selector Selector function
 * @template InputType Input type
 * @template OutputType Output type
 * @template ErrorType Asserted error type
 */
export function mapErrorIf<InputType, OutputType, ErrorType>(
  predicate: (error: unknown) => error is ErrorType,
  selector: (error: ErrorType, caught: ObservableInput<InputType>) => OutputType
): OperatorFunction<InputType, InputType | OutputType>;

/**
 * Maps errors on the observable when a condition is met
 *
 * @param predicate Predicate condition that determines whether the error should be caught
 * @param selector Selector function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function mapErrorIf<InputType, OutputType>(
  predicate: (error: unknown) => boolean,
  selector: (error: unknown, caught: Observable<InputType>) => OutputType
): OperatorFunction<InputType, InputType | OutputType>;

export function mapErrorIf<InputType, OutputType>(
  predicate: (error: unknown) => boolean,
  selector: (error: unknown, caught: Observable<InputType>) => OutputType
): OperatorFunction<InputType, InputType | OutputType> {
  return catchErrorIf(predicate, (error, caught) => of(selector(error, caught)));
}
