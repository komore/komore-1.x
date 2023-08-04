import { LogEventSeverities } from '@komore/observability/logging';

import { type BrowserConsoleSeverityRange } from './browser-console-severity-range';

/**
 * Gets the default log event severity mapping for a browser console
 */
export function getDefaultBrowserConsoleLogEventSeverityMapping(): ReadonlyArray<BrowserConsoleSeverityRange> {
  return [
    {
      max: LogEventSeverities.INFO - 1,
      severity: 'debug',
    },
    {
      min: LogEventSeverities.INFO,
      max: LogEventSeverities.WARNING - 1,
      severity: 'info',
    },
    {
      min: LogEventSeverities.WARNING,
      max: LogEventSeverities.ERROR - 1,
      severity: 'warn',
    },
    {
      min: LogEventSeverities.ERROR,
      severity: 'error',
    },
  ];
}
