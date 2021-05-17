import type { ConsoleAppenderOptions } from './console-appender-options';
import { getDefaultConsoleLogEventSeverityMapping } from './get-default-console-log-event-severity-mapping';

export function withDefaultConsoleLogEventSeverityMapping(
  options: Omit<ConsoleAppenderOptions, 'severityMapping'>
): ConsoleAppenderOptions {
  return {
    ...options,
    severityMapping: getDefaultConsoleLogEventSeverityMapping()
  };
}
