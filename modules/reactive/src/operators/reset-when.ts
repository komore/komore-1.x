import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type Observable } from '../observable';
import { startWith } from './start-with';
import { switchMapTo } from './switch-map-to';

export function resetWhen<T>(trigger$: Observable<unknown>): MonoTypeOperatorFunction<T> {
  return observable$ => trigger$.pipe(startWith(void 0), switchMapTo(observable$));
}
