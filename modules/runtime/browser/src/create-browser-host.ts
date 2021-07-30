import { fromEvent, Subject } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { Host, HostLifecycleEvent, HostState } from '@komore/runtime';
import type { BrowserHostOptions } from './browser-host-options';

/**
 * Creates a browser host
 * @param options Browser host options
 * @returns Browser host
 */
export function createBrowserHost(_options?: BrowserHostOptions): Host {
  // TODO: remove once ErrorEvent can be inferred
  const errors = fromEvent<ErrorEvent>(window, 'error').pipe(
    map(({ colno, error, filename, lineno, message }) => ({
      columnNumber: colno,
      error,
      lineNumber: lineno,
      message,
      source: filename
    }))
  );

  fromEvent(window, 'beforeunload', () => {
    // TODO
  });
  fromEvent(window, 'unload')
  const lifecycle = new Subject<HostLifecycleEvent>();
  const state = new Subject<HostState>();

  return {
    errors,
    lifecycle,
    state
  };
}
