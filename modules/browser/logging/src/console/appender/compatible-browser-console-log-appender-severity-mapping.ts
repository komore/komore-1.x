import { type LogEventSeverity } from '@komore/logging';

import { type BrowserConsoleSeverityRange } from '../severity/browser-console-severity-range';

/**
 * Creates a function that returns true when a log event severity matches a browser console severity range
 *
 * @param severity Log event severity
 * @returns Function that returns true when a log event severity matches a browser console severity range
 * @private
 */
export function compatibleBrowserConsoleLogAppenderSeverityMapping(
  severity: LogEventSeverity
): (range: BrowserConsoleSeverityRange) => boolean {
  return ({ min, max }) => (min === undefined || min <= severity) && (max === undefined || severity <= max);
}
