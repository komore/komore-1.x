import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { concat, Observable, Subscription } from '@komore/reactive';
import { publish } from './publish';

/**
 * Delays emissions until a notifier emits or completes
 * @param notifier Notifier
 * @template T Value type
 */
export function delayUntil<T>(notifier: Observable<unknown>): MonoTypeOperatorFunction<T> {
  return publish(published => concat([createDelayedObservable(published, notifier), published]));
}

/**
 * Creates a delayed observable
 * @param published Published observable
 * @param notifier Notifier observable
 * @returns Observable that applies a delay
 */
function createDelayedObservable<T>(published: Observable<T>, notifier: Observable<unknown>): Observable<T> {
  return new Observable<T>(observer => {
    const subscription = new Subscription();
    const buffer: Array<T> = [];
    let completed = false;

    subscription.add(
      notifier.subscribe({
        next(): void {
          buffer.forEach(bufferedValue => observer.next(bufferedValue));
          observer.complete();
        },
        error(error: unknown): void {
          observer.error(error);
        },
        complete(): void {
          completed = true;
          buffer.length = 0;
        }
      })
    );

    subscription.add(() => {
      buffer.length = 0;
    });

    subscription.add(
      published.subscribe({
        next(value) {
          if (!completed) {
            buffer.push(value);
          }
        },
        error(error: unknown) {
          observer.error(error);
        }
      })
    );

    return subscription;
  });
}
