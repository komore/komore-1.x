import { catchError as rxjsCatchError } from 'rxjs';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';

/**
 * Catches errors on the observable, returning a new observable or throwing a new error
 * @param selector Selector function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function catchError<InputType, OutputType>(
  selector: (error: unknown, caught: Observable<InputType>) => Observable<OutputType>
): OperatorFunction<InputType, InputType | OutputType> {
  return rxjsCatchError(selector);
}
