import { MonoTypeOperatorFunction, of, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';
import { validate } from '../validate';

OperatorFunction | undefined | null | false | true

export function validateField<T, K extends keyof T, F extends OperatorFunction<T[K], T[K]>>(fieldName: K, functions: Array<F>): MonoTypeOperatorFunction<T> {
  return pipe(
    mergeMap(value => of(value[fieldName]).pipe(...[
      ...functions,
      mapTo(value)
    ])
  );
}

$.pipe(
  validate(isNull),
  validateField('fieldName', isNull, ...)
    $ => $.pipe(
    validate
  ))
);