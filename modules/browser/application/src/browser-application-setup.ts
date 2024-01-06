import {
  createBrowserConsoleLogAppender,
  getDefaultBrowserConsoleLogEventSeverityMapping,
} from '@komore/browser/logging';
import { addLogEventMapping, createLogEventMapping } from '@komore/logging';
import { cache, deferValue } from '@komore/reactive';

import { createBrowserApplicationLogEncoder } from './create-browser-application-log-encoder';

/**
 * Observable application setup
 *
 * Observable responsible for the initial setup of common browser application elements:
 *
 * - Log encoder
 * - Log appender (browser console)
 * - Log event mapping towards the console
 *
 * @private
 */
export const browserApplicationSetup = deferValue(() => {
  const encoder = createBrowserApplicationLogEncoder();
  const target = console;
  const logAppender = createBrowserConsoleLogAppender({
    encoder,
    severityMapping: getDefaultBrowserConsoleLogEventSeverityMapping(),
    target,
  });
  logAppender;
  // TODO: addLogAppender('console', logAppender);
  const logEventMapping = createLogEventMapping('console');
  addLogEventMapping(logEventMapping);
}).pipe(cache());
