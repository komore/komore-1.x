import { mapTo, mergeMap, type MonoTypeOperatorFunction, of, type OperatorFunction, pipe } from '@komore/reactive';
import { validate } from '../validate';

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