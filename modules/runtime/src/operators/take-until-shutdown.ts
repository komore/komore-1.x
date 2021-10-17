import type { HostState } from '@komore/host';
import { observeHostState } from '@komore/host';
import type { MonoTypeOperatorFunction } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

/**
 * Emits the values emitted by the source observable until the host begins to shut down.
 *
 * A host is considered to be shutting down when its host state is either `stopping` or `stopped`.
 * @returns Observable that emits the values from the source observable until the host begins to shut down
 */
export function takeUntilShutdown<T>(): MonoTypeOperatorFunction<T> {
  const shutdownStates: ReadonlyArray<HostState> = ['stopping', 'stopped'];
  const shutdownState$ = observeHostState().pipe(filter(state => shutdownStates.includes(state)));
  return takeUntil(shutdownState$);
}
