import { catchError, EMPTY, type MonoTypeOperatorFunction, pipe } from '@komore/reactive';

export function validateWith<T, Operators extends MonoTypeOperatorFunction<T>[]>(
  operators: [...Operators]
): MonoTypeOperatorFunction<T> {
  return pipe(catchError(error => EMPTY));
}
