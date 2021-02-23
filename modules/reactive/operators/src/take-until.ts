import type { MonoTypeOperatorFunction, ObservableInput } from '@komore/reactive';
import { takeUntil as rxjsTakeUntil } from 'rxjs/operators';

/**
 * Emits the values emitted by the source observable until the notifier observable emits a value
 * @param notifier Notifier observable
 * @template T Value type
 */
export function takeUntil<T>(notifier: ObservableInput<unknown>): MonoTypeOperatorFunction<T> {
  return rxjsTakeUntil<T>(notifier);
}
