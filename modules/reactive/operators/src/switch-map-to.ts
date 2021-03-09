import type { Observable, OperatorFunction } from '@komore/reactive';
import { switchMapTo as rxjsSwitchMapTo } from 'rxjs/operators';

/**
 * Projects each source value to the same observable that gets flattened multiple times using switchMap
 * @param observable Observable
 * @template T Observable value type
 */
export function switchMapTo<T>(
  observable: Observable<T>
): OperatorFunction<unknown, T> {
  return rxjsSwitchMapTo(observable);
}
