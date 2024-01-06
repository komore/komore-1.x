import { logEventSeverities } from '@komore/logging';

import { type BrowserConsoleSeverityRange } from './browser-console-severity-range';

/**
 * Returns the default log event severity mapping for a browser console
 *
 *
 * The following mapping is used:
 * - `debug` for the range `[0-200[`: `debug`
 * - `info` for the range `[200-400[`: `info`, `notice`
 * - `warn` for the range `[400-500[`: `warning`
 * - `error` for the range `[500-`: `error`, `critical`, `alert` and `emergency`
 *
 * @returns Default log event severity mapping for a browser console
 * @note `console.log` is not used by default
 */
export function getDefaultBrowserConsoleLogEventSeverityMapping(): ReadonlyArray<BrowserConsoleSeverityRange> {
  return [
    {
      max: logEventSeverities.info - 1,
      severity: 'debug',
    },
    {
      min: logEventSeverities.info,
      max: logEventSeverities.warning - 1,
      severity: 'info',
    },
    {
      min: logEventSeverities.warning,
      max: logEventSeverities.error - 1,
      severity: 'warn',
    },
    {
      min: logEventSeverities.error,
      severity: 'error',
    },
  ];
}
