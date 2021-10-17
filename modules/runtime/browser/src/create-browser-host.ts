import { fromEvent, map, Subject } from '@komore/reactive';
import type { HostLifecycleEvent, HostState } from '@komore/runtime';
import { HostError } from '@komore/runtime';
import type { BrowserHost } from './browser-host';
import type { BrowserHostOptions } from './browser-host-options';
import { buildBrowserHostOptions } from './build-browser-host-options';

/**
 * Creates a browser host
 * @param hostOptions Browser host options
 * @returns Browser host
 */
export function createBrowserHost(hostOptions?: BrowserHostOptions): BrowserHost {
  // TODO: remove once ErrorEvent can be inferred
  const options = buildBrowserHostOptions(hostOptions);
  const errors = fromEvent<ErrorEvent>(window, 'error').pipe(
    map(({ colno, error, filename, lineno, message }) => new HostError(message, filename, lineno, colno, error))
  );

  // TODO: https://developers.google.com/web/updates/2018/07/page-lifecycle-api
  fromEvent(window, 'beforeunload').pipe(
    // TODO
    map(x => x)
  );
  fromEvent(window, 'unload');
  const lifecycle = new Subject<HostLifecycleEvent>();
  const state = new Subject<HostState>();

  return {
    errors,
    lifecycle,
    options,
    state
  };
}
