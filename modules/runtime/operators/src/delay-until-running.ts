import { observeHostState } from '@komore/host';
import type { MonoTypeOperatorFunction } from 'rxjs';
import { delayWhen, filter, take } from 'rxjs/operators';

export function delayUntilRunning<T>(): MonoTypeOperatorFunction<T> {
  const hostStateRunning = observeHostState().pipe(
    filter(state => state === 'running'),
    take(1)
  );
  return delayWhen(() => hostStateRunning);
}