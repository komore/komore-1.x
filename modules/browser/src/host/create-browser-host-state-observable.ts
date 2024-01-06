import {
  cache,
  distinctUntilChanged,
  fromEvent,
  map,
  mapTo,
  merge,
  startWith,
  type Observable,
} from '@komore/reactive';
import { HostState } from '@komore/runtime/host';

import { currentDocumentVisibilityStateToBrowserHostState } from './current-document-visibility-state-to-browser-host-state';

/**
 * Creates a browser host state observable
 *
 * The state changes based on window events:
 * - `load` maps to a `running` state
 * - `pagehide` maps to a `paused` or `stopped` state
 * - `focus`, `resume`, `pageshow`, `visibilitychange` map to:
 *   - a `paused` state if the document visibility is `hidden`
 *   - a `running` state if the document visibility is `visible`
 *
 * The observable initially emits a `starting` state.
 *
 * @returns Observable stream of browser host states
 */
export function createBrowserHostStateObservable(): Observable<HostState> {
  const visibilityStateChangeEventNames = ['blur', 'focus', 'pageshow', 'resume', 'visibilitychange'];

  return merge([
    fromEvent(window, 'load').pipe(mapTo('running' as const)),
    fromEvent(window, 'pagehide').pipe(
      map(pageHideEvent => pageHideEvent as PageTransitionEvent),
      map(pageTransitionEvent => (pageTransitionEvent.persisted ? 'paused' : 'stopped'))
    ),
    merge(visibilityStateChangeEventNames.map(eventName => fromEvent(window, eventName, { capture: true }))).pipe(
      map(currentDocumentVisibilityStateToBrowserHostState)
    ),
  ]).pipe(startWith('starting' as const), distinctUntilChanged(), cache());
}
