import { empty, takeWhile } from '@komore/reactive';
import { createHost } from '@komore/runtime/host';

import { type BrowserHost } from './browser-host';
import { type BrowserHostOptions } from './browser-host-options';
import { createBrowserHostErrorObservable } from './create-browser-host-error-observable';
import { createBrowserHostStateObservable } from './create-browser-host-state-observable';

/**
 * Creates a browser host
 *
 * @param hostOptions Browser host options
 * @returns Browser host
 */
export function createBrowserHost(_hostOptions: BrowserHostOptions): BrowserHost {
  const error = createBrowserHostErrorObservable();
  const lifecycle = empty; // TODO
  const state = createBrowserHostStateObservable();

  state.pipe(takeWhile(hostState => hostState !== 'stopped')).subscribe();

  return createHost({
    error,
    lifecycle,
    state,
  });
}
