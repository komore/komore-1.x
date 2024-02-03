import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

/**
 * Executes code whenever an observable is unsubscribed from
 *
 * @param project Function executed when the observable is unsubscribed from
 * @returns Operator function that executes code whenever the observable is unsubscribed from
 */
export function whenUnsubscribed<T>(project: () => void): MonoTypeOperatorFunction<T> {
  return source$ =>
    new Observable<T>(subscriber => {
      let wasClosed = false;
      const subscription = source$.subscribe({
        next: value => subscriber.next(value),
        error: error => {
          wasClosed = true;
          subscriber.next(error);
        },
        complete: () => {
          wasClosed = true;
          subscriber.complete();
        },
      });

      subscriber.add(() => {
        if (!wasClosed) {
          project();
        }

        subscription.unsubscribe();
      });
    });
}
