import { type ErrorFromType } from '@komore/error';
import { fromEvent, map, type Observable } from '@komore/reactive';
import { type runtimeHostError } from '@komore/runtime/host';

import { browserErrorEventToUnhandledHostError } from './browser-error-event-to-unhandled-host-error-properties';

/**
 * Creates a browser host error observable
 *
 * @returns Observable stream of browser host errors
 */
export function createBrowserHostErrorObservable(): Observable<ErrorFromType<typeof runtimeHostError>> {
  return fromEvent(window, 'error').pipe(
    map(errorEvent => errorEvent as ErrorEvent),
    map(browserErrorEventToUnhandledHostError)
  );
}
