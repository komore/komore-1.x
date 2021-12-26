import { catchError, type MonoTypeOperatorFunction, type Observable, switchMap } from '@komore/reactive';
import { ConstraintViolationError } from './error/constraint-violation-error';

/**
 * Creates an asynchronous constraint validator
 * @param constraint Constraint test function
 * @param messageId Message identifier
 * @param constraints Constraints
 */
export function createAsyncConstraintValidator<T, Constraints extends Record<string, unknown> | undefined = undefined>(
  constraint: (value: T) => Observable<boolean>,
  messageId: string,
  constraints?: Constraints
): MonoTypeOperatorFunction<T> {
  return switchMap(value => constraint(value).pipe(
    throwIf(error => )
  )
    (value): value is R => constraint(value),
    () => new ConstraintViolationError(messageId, constraints)
  );
}
