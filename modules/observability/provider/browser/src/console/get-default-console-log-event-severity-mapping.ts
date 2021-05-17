import { LogEventSeverity } from '@komore/observability/logging';
import type { ConsoleSeverityRange } from './console-severity-range';

/**
 * Gets the default log event severity mapping
 */
export function getDefaultConsoleLogEventSeverityMapping(): ReadonlyArray<ConsoleSeverityRange> {
  return [
    {
      max: LogEventSeverity.INFO - 1,
      severity: 'debug'
    },
    {
      min: LogEventSeverity.INFO,
      max: LogEventSeverity.WARNING - 1,
      severity: 'info'
    },
    {
      min: LogEventSeverity.WARNING,
      max: LogEventSeverity.ERROR - 1,
      severity: 'warn'
    },
    {
      min: LogEventSeverity.ERROR,
      severity: 'error'
    }
  ];
}
