import { runApplication } from '@komore/application';
import { createBrowserHost } from '@komore/browser';
import { type GenericCommand } from '@komore/command';
import { EMPTY, type Observable } from '@komore/reactive';

import { type BrowserApplicationOptions } from './browser-application-options';
import { setupBrowserApplication } from './setup-browser-application';

/**
 * Runs a browser application
 *
 * @param applicationOptions Browser application options
 */
export function runBrowserApplication<Options extends BrowserApplicationOptions<GenericCommand>>(
  _applicationOptions: Options
): Observable<void> {
  const host = createBrowserHost({});
  return runApplication({
    host,
    main: () => {
      setupBrowserApplication();

      return EMPTY;
    },
  });
}
