import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { catchError } from "rxjs/operators";

export function validate<T, Operators extends MonoTypeOperatorFunction<T>[]>(operators: [...Operators]): MonoTypeOperatorFunction<T> {
  return pipe(
    catchError(error => )
  );
}
export function validateField