import { concat, MonoTypeOperatorFunction, Observable, Subscription } from 'rxjs';
import { publish } from 'rxjs/operators';

/**
 * Delays emissions until a notifier emits or completes
 * @param notifier Notifier
 */
export function delayUntil<T>(notifier: Observable<unknown>): MonoTypeOperatorFunction<T> {
  return publish(published =>
    concat(
      new Observable<T>(observer => {
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
            next(value): void {
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
      }),
      published
    )
  );
}
