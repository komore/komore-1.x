import { takeUntil as rxjsTakeUntil } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type ObservableInput } from '../observable-input';

/**
 * Emits the values emitted by the source observable until the notifier observable emits a value
 * @param notifier Notifier observable
 * @template T Value type
 */
export function takeUntil<T>(notifier: ObservableInput<unknown>): MonoTypeOperatorFunction<T> {
  return rxjsTakeUntil<T>(notifier);
}
