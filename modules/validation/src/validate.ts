import type { MonoTypeOperatorFunction } from "@komore/reactive";
import { pipe } from "@komore/reactive/operators";
import { catchError } from "@komore/reactive/operators";

export function validate<T, Operators extends MonoTypeOperatorFunction<T>[]>(operators: [...Operators]): MonoTypeOperatorFunction<T> {
  return pipe(
    catchError(error => )
  );
}
export function validateField