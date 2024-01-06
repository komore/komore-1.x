import { runApplication } from '@komore/application';
import { type GenericCommand } from '@komore/command';
import { type Observable } from '@komore/reactive';

import { type BrowserApplicationOptions } from './browser-application-options';

/**
 * Runs a browser application
 *
 * @param applicationOptions Browser application options
 */
export function runBrowserApplication<Options extends BrowserApplicationOptions<GenericCommand>>(
  applicationOptions: Options
): Observable<void> {
  return runApplication(applicationOptions);
}
