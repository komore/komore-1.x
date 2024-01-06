import { filter, switchMap, takeUntil, type Observable } from '@komore/reactive';
import { hostStateIs, hostStateTransitionIs, type Host } from '@komore/runtime/host';

import { type ApplicationOptions } from './application-options';

/**
 * Runs an application
 *
 * @param options Application options
 * @returns Observable that emits once when the application has stopped running
 */
export function runApplication<Options extends ApplicationOptions<Host>>(
  applicationOptions: Options
): Observable<void> {
  const { host, main } = applicationOptions;
  const { state, stateTransitions } = host;

  const hostStopped$ = state.pipe(filter(hostStateIs('stopped')));

  return stateTransitions.pipe(
    filter(hostStateTransitionIs({ previous: 'starting', current: 'running' })),
    switchMap(() => main()),
    takeUntil(hostStopped$)
  );
}
