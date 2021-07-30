import type { MonoTypeOperatorFunction, OperatorFunction } from '@komore/reactive';
import { Observable } from '@komore/reactive';

export function filterUntil<T, S extends T>(predicate: (value: T) => value is S): OperatorFunction<T, S>;
export function filterUntil<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T>

export function filterUntil<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T> {
  return observable => new Observable<T>(observer => {
    let conditionMet = false;

    return observable.subscribe({
      next: value => {
        if (!conditionMet && predicate(value)) {
          conditionMet = true;
        }

        if (conditionMet) {
          observer.next(value);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
}
